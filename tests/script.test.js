const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const SCRIPT_SRC = fs.readFileSync(
  path.join(__dirname, '..', 'script.js'),
  'utf-8'
);

// Build a fresh DOM + script scope for every test so global state never leaks.
function loadScript() {
  const dom = new JSDOM(
    `<!DOCTYPE html><html><body>
       <button id="btn-retroceder"></button>
       <div id="lista"></div>
     </body></html>`,
    { runScripts: 'outside-only' }
  );
  const { window } = dom;
  // `baseDeDados` / `menus` are top-level `const`s, so a global eval does not
  // attach them to `window`. Expose them for assertions without touching the
  // production file.
  window.eval(
    SCRIPT_SRC + '\n;window.baseDeDados = baseDeDados; window.menus = menus;'
  );
  return window;
}

describe('script.js data', () => {
  test('exposes the expected top-level functions', () => {
    const window = loadScript();
    expect(typeof window.mostrarHome).toBe('function');
    expect(typeof window.verSubCategoria).toBe('function');
    expect(typeof window.criarCard).toBe('function');
  });

  test('registers mostrarHome as the window load handler', () => {
    const window = loadScript();
    expect(window.onload).toBe(window.mostrarHome);
  });

  test('baseDeDados contains the main teams and leagues', () => {
    const window = loadScript();
    const base = window.baseDeDados;
    for (const key of ['portugal', 'brasil', 'sporting', 'porto', 'benfica', 'liga_pt']) {
      expect(Array.isArray(base[key])).toBe(true);
      expect(base[key].length).toBeGreaterThan(0);
    }
  });

  test('every camisola entry has a nome and a foto', () => {
    const window = loadScript();
    const base = window.baseDeDados;
    for (const key of ['portugal', 'brasil', 'sporting', 'porto', 'benfica']) {
      for (const item of base[key]) {
        expect(typeof item.nome).toBe('string');
        expect(item.nome.length).toBeGreaterThan(0);
        expect(item.foto).toMatch(/^camisolas\//);
      }
    }
  });

  test('menu entries have id, nome and foto', () => {
    const window = loadScript();
    const { menus } = window;
    for (const group of ['selecoes', 'ligas']) {
      for (const item of menus[group]) {
        expect(item.id).toBeTruthy();
        expect(item.nome).toBeTruthy();
        expect(item.foto).toMatch(/^fotos\//);
      }
    }
  });
});

describe('criarCard', () => {
  test('builds a card wired to the given handler', () => {
    const window = loadScript();
    const html = window.criarCard(
      { id: 'portugal', nome: 'Portugal', foto: 'fotos/portugal.png' },
      'verSubCategoria'
    );
    expect(html).toContain("verSubCategoria('portugal', 'Portugal')");
    expect(html).toContain('src="fotos/portugal.png"');
    expect(html).toContain('<h3>Portugal</h3>');
    expect(html).toContain('class="card"');
  });
});

describe('mostrarHome', () => {
  test('renders selecoes and ligas sections and hides the back button', () => {
    const window = loadScript();
    const back = window.document.getElementById('btn-retroceder');
    back.style.display = 'block';

    window.mostrarHome();

    const lista = window.document.getElementById('lista');
    expect(lista.innerHTML).toContain('Seleções');
    expect(lista.innerHTML).toContain('Ligas');
    // One card per menu entry.
    const cards = lista.querySelectorAll('.card');
    expect(cards.length).toBe(
      window.menus.selecoes.length + window.menus.ligas.length
    );
    expect(back.style.display).toBe('none');
  });
});

describe('verSubCategoria', () => {
  test('shows a placeholder for an unknown id', () => {
    const window = loadScript();
    window.verSubCategoria('inexistente', 'Nada');
    const lista = window.document.getElementById('lista');
    expect(lista.innerHTML).toContain('Em breve...');
  });

  test('renders clickable club cards for the liga_pt category', () => {
    const window = loadScript();
    window.verSubCategoria('liga_pt', 'Liga Portugal');
    const lista = window.document.getElementById('lista');
    expect(lista.innerHTML).toContain('Liga Portugal');
    const cards = lista.querySelectorAll('.card');
    expect(cards.length).toBe(window.baseDeDados.liga_pt.length);
    expect(lista.innerHTML).toContain('verSubCategoria');
  });

  test('renders product cards with an order button for a team', () => {
    const window = loadScript();
    window.verSubCategoria('portugal', 'Portugal');
    const lista = window.document.getElementById('lista');
    const produtos = lista.querySelectorAll('.produto-card');
    expect(produtos.length).toBe(window.baseDeDados.portugal.length);
    expect(lista.innerHTML).toContain('Encomendar');
  });

  test('shows the back button when a category is opened', () => {
    const window = loadScript();
    const back = window.document.getElementById('btn-retroceder');
    back.style.display = 'none';
    window.verSubCategoria('portugal', 'Portugal');
    expect(back.style.display).toBe('block');
  });
});
