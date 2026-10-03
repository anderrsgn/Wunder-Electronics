
const WHATSAPP = "5950981064960";   
const ETIQUETA_COLOR = "#f08a24";  
const MONEDA = "Gs.";              
const NUEVO = { etiqueta: "Nuevo", etiquetaColor: "#2e9e5b" };  
const SEMI  = { etiqueta: "Seminuevo" };                        

const CATALOGOS = {
  iphones: {
    titulo: "iPhones",
    sub: "Elige la capacidad y mira el precio al instante.",
    productos: [
      /* ---- NUEVOS (serie 17) ---- */
      { nombre: "iPhone 17 Pro Max", ...NUEVO, specs: { ram: "12 GB" }, opciones: { "256 GB": 8110000, "512 GB": 9120000, "1 TB": 10480000 }, foto: "img/iphone17promax.jpeg" },
      { nombre: "iPhone 17 Pro", ...NUEVO, specs: { ram: "12 GB" }, opciones: { "256 GB": 7630000, "512 GB": 8650000, "1 TB": 10010000 }, foto: "img/iphone17pro.jpeg" },
      { nombre: "iPhone 17 Air", ...NUEVO, specs: { ram: "12 GB" }, opciones: { "256 GB": 6550000, "512 GB": 7560000 }, foto: "img/iphone17air.jpeg" },
      { nombre: "iPhone 17", ...NUEVO, specs: { ram: "8 GB" }, opciones: { "256 GB": 7100000, "512 GB": 8120000 }, foto: "img/iphone17.jpeg" },
      /* ---- SEMINUEVOS (serie 16 a 11) ---- */
      { nombre: "iPhone 16 Pro Max", ...SEMI, specs: { ram: "8 GB" }, opciones: { "256 GB": 4510000, "512 GB": 5080000 }, foto: "img/iphone16promax.jpeg" },
      { nombre: "iPhone 16 Pro", ...SEMI, specs: { ram: "8 GB" }, opciones: { "256 GB": 4080000, "512 GB": 4650000 }, foto: "img/iphone16pro.jpeg" },
      { nombre: "iPhone 16 Plus", ...SEMI, specs: { ram: "8 GB" }, opciones: { "256 GB": 3540000 }, foto: "img/iphone16plus.jpeg" },
      { nombre: "iPhone 16", ...SEMI, specs: { ram: "8 GB" }, opciones: { "128 GB": 3430000, "256 GB": 3650000 }, foto: "img/iphone16.jpeg" },
      { nombre: "iPhone 15 Pro Max", ...SEMI, specs: { ram: "8 GB" }, opciones: { "256 GB": 3650000, "512 GB": 4220000 }, foto: "img/iphone15promax.jpeg" },
      { nombre: "iPhone 15 Pro", ...SEMI, specs: { ram: "8 GB" }, opciones: { "256 GB": 3330000, "512 GB": 3900000 }, foto: "img/iphone15pro.jpeg" },
      { nombre: "iPhone 15 Plus", ...SEMI, specs: { ram: "6 GB" }, opciones: { "256 GB": 2740000 }, foto: "img/iphone15plus.jpeg" },
      { nombre: "iPhone 15", ...SEMI, specs: { ram: "6 GB" }, opciones: { "128 GB": 2580000, "256 GB": 2800000 }, foto: "img/iphone15.jpeg" },
      { nombre: "iPhone 14 Pro Max", ...SEMI, specs: { ram: "6 GB" }, opciones: { "128 GB": 2380000, "256 GB": 2610000 }, foto: "img/iphone14promax.jpeg" },
      { nombre: "iPhone 14 Pro", ...SEMI, specs: { ram: "6 GB" }, opciones: { "128 GB": 2170000, "256 GB": 2400000 }, foto: "img/iphone14pro.jpeg" },
      { nombre: "iPhone 14 Plus", ...SEMI, specs: { ram: "6 GB" }, opciones: { "128 GB": 2120000, "256 GB": 2350000 }, foto: "img/iphone14plus.jpeg" },
      { nombre: "iPhone 14", ...SEMI, specs: { ram: "6 GB" }, opciones: { "128 GB": 2060000, "256 GB": 2280000 }, foto: "img/iphone14.jpeg" },
      { nombre: "iPhone 13 Pro Max", ...SEMI, specs: { ram: "6 GB" }, opciones: { "128 GB": 1860000, "256 GB": 2090000 }, foto: "img/iphone13promax.jpeg" },
      { nombre: "iPhone 13 Pro", ...SEMI, specs: { ram: "6 GB" }, opciones: { "128 GB": 1810000, "256 GB": 2030000 }, foto: "img/iphone13pro.jpeg" },
      { nombre: "iPhone 13", ...SEMI, specs: { ram: "4 GB" }, opciones: { "128 GB": 1750000, "256 GB": 1980000 }, foto: "img/iphone13.jpeg" },
      { nombre: "iPhone 13 Mini", ...SEMI, specs: { ram: "4 GB" }, opciones: { "128 GB": 1750000, "256 GB": 1980000 }, foto: "img/iphone13mini.jpeg" },
      { nombre: "iPhone 12 Pro Max", ...SEMI, specs: { ram: "6 GB" }, opciones: { "128 GB": 1720000, "256 GB": 1940000 }, foto: "img/iphone12promax.jpeg" },
      { nombre: "iPhone 12 Pro", ...SEMI, specs: { ram: "6 GB" }, opciones: { "128 GB": 1660000, "256 GB": 1890000 }, foto: "img/iphone12pro.jpeg" },
      { nombre: "iPhone 12", ...SEMI, specs: { ram: "4 GB" }, opciones: { "64 GB": 1550000, "128 GB": 1660000, "256 GB": 1890000 }, foto: "img/iphone12.jpeg" },
      { nombre: "iPhone 12 Mini", ...SEMI, specs: { ram: "4 GB" }, opciones: { "64 GB": 1600000, "128 GB": 1720000, "256 GB": 1940000 }, foto: "img/iphone12mini.jpeg" },
      { nombre: "iPhone 11 Pro Max", ...SEMI, specs: { ram: "4 GB" }, opciones: { "256 GB": 1240000 }, foto: "img/iphone11promax.jpeg" },
      { nombre: "iPhone 11 Pro", ...SEMI, specs: { ram: "4 GB" }, opciones: { "64 GB": 1130000, "256 GB": 1470000 }, foto: "img/iphone11pro.jpeg" },
      { nombre: "iPhone 11", ...SEMI, specs: { ram: "4 GB" }, opciones: { "64 GB": 980000, "128 GB": 1100000 }, foto: "img/iphone11.jpeg" }
    ]
  },
  estuches: {
    titulo: "Estuches",
    sub: "Elige el tipo de estuche para tu modelo.",
    productos: [
      { nombre: "Estuche iPhone 17 Pro Max", precio: 60000, foto: "img/estuche17promax.jpeg" },
      { nombre: "Estuche iPhone 17 Pro", precio: 60000, foto: "img/estuche17pro.jpeg" },
      { nombre: "Estuche iPhone 17 Air", precio: 60000, foto: "img/estuche17air.jpeg" },
      { nombre: "Estuche iPhone 17", precio: 60000, foto: "img/estuche17.jpeg" },
      { nombre: "Estuche iPhone 16 Pro Max", precio: 50000, foto: "img/estuche16promax.jpeg" },
      { nombre: "Estuche iPhone 16 Pro", precio: 50000, foto: "img/estuche16pro.jpeg" },
      { nombre: "Estuche iPhone 16 Plus", precio: 50000, foto: "img/estuche16plus.jpeg" },
      { nombre: "Estuche iPhone 16", precio: 50000, foto: "img/estuche16.jpeg" },
      { nombre: "Estuche iPhone 15 Pro Max", precio: 50000, foto: "img/estuche15promax.jpeg" },
      { nombre: "Estuche iPhone 15 Pro", precio: 50000, foto: "img/estuche15pro.jpeg" },
      { nombre: "Estuche iPhone 15 Plus", precio: 50000, foto: "img/estuche15plus.jpeg" },
      { nombre: "Estuche iPhone 15", precio: 50000, foto: "img/estuche15.jpeg" },
      { nombre: "Estuche iPhone 14 Pro Max", precio: 45000, foto: "img/estuche14promax.jpeg" },
      { nombre: "Estuche iPhone 14 Pro", precio: 45000, foto: "img/estuche14pro.jpeg" },
      { nombre: "Estuche iPhone 14 Plus", precio: 45000, foto: "img/estuche14plus.jpeg" },
      { nombre: "Estuche iPhone 14", precio: 45000, foto: "img/estuche14.jpeg" },
      { nombre: "Estuche iPhone 13 Pro Max", precio: 30000, foto: "img/estuche13promax.jpeg" },
      { nombre: "Estuche iPhone 13 Pro", precio: 30000, foto: "img/estuche13pro.jpeg" },
      { nombre: "Estuche iPhone 13", precio: 30000, foto: "img/estuche13.jpeg" },
      { nombre: "Estuche iPhone 13 Mini", precio: 30000, foto: "img/estuche13mini.jpeg" },
      { nombre: "Estuche iPhone 12 Pro Max", precio: 30000, foto: "img/estuche12promax.jpeg" },
      { nombre: "Estuche iPhone 12 Pro", precio: 30000, foto: "img/estuche12pro.jpeg" },
      { nombre: "Estuche iPhone 12", precio: 30000, foto: "img/estuche12.jpeg" },
      { nombre: "Estuche iPhone 12 Mini", precio: 30000, foto: "img/estuche12mini.jpeg" },
      { nombre: "Estuche iPhone 11 Pro Max", precio: 30000, foto: "img/estuche11promax.jpeg" },
      { nombre: "Estuche iPhone 11 Pro", precio: 30000, foto: "img/estuche11pro.jpeg" },
      { nombre: "Estuche iPhone 11", precio: 30000, foto: "img/estuche11.jpeg" }
    ]
  },
  accesorios: {
    titulo: "Accesorios",
    sub: "Vidrios, cables y cargadores.",
    productos: [
      { nombre: "Vidrio templado", precio: 30000, desc: "Protección total para la pantalla.", foto: "img/vidriotemplado.jpeg" },
      { nombre: "Vidrio de privacidad", precio: 40000, desc: "Evita miradas laterales.", foto: "img/vidrioprivacidad.jpeg" },
      { nombre: "Cable USB-C a Lightning", precio: 50000, desc: "1 metro, carga y datos.", foto: "img/cablelightning.jpeg" },
      { nombre: "Cable USB-C a USB-C", precio: 45000, desc: "1 metro, carga rápida.", foto: "img/cableusbc.jpeg" },
      { nombre: "Cargador 20W", precio: 190000, desc: "Carga rápida USB-C.", foto: "img/cargador20w.jpeg" },
      { nombre: "Cargador inalámbrico", precio: 250000, desc: "Base compatible con MagSafe.", foto: "img/cargadorinalambrico.jpeg" },
      { nombre: "Cargador de auto", precio: 90000, desc: "Dos puertos, carga rápida.", foto: "img/cargadorauto.jpeg" },
      { nombre: "Power bank 10000 mAh", precio: 120000, desc: "Carga tu iPhone varias veces.", foto: "img/powerbank.jpeg" }
    ]
  }
};

const ICONO_FOTO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>';
const _i = (d) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
const ICONOS = {
  almacenamiento: _i('<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>'),
  ram: _i('<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>'),
  bateria: _i('<rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2M6 11v2"/>'),
  color: _i('<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor"/>'),
  camara: _i('<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><circle cx="12" cy="13" r="3.5"/>'),
  pantalla: _i('<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10.5 18.5h3"/>'),
  compatible: _i('<rect x="6" y="2" width="12" height="20" rx="3"/><path d="m9.5 12 2 2 3-4"/>'),
  material: _i('<path d="m12 2 10 5-10 5L2 7Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>'),
  otro: _i('<circle cx="12" cy="12" r="2.5" fill="currentColor"/>')
};
const inicio = document.getElementById("inicio");
const catalogo = document.getElementById("catalogo");

document.getElementById("wa-home").href =
  "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hola Wunder Electronics, quiero hacer un pedido");

let claveActual = "";
const fmt = (n) => typeof n === "number" ? MONEDA + " " + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") : n;
function linkPedir(p, gb) {
  const precio = fmt(gb ? p.opciones[gb] : p.precio);
  const texto = "Hola, me interesa: " + p.nombre + (gb ? " " + gb : "") + " (" + precio + ")";
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto);
}

function mostrarCatalogo(clave) {
  claveActual = clave;
  const c = CATALOGOS[clave];
  document.getElementById("cat-titulo").textContent = c.titulo;
  document.getElementById("cat-sub").textContent = c.sub;
  document.getElementById("productos").innerHTML = c.productos.map((p, i) => {
    const gbs = p.opciones ? Object.keys(p.opciones) : [];
    const gb = gbs[0];
    const foto = p.foto || "img/" + clave + (i + 1) + ".png";
    const etiq = p.etiqueta ? '<span class="etiqueta" style="background:' + (p.etiquetaColor || ETIQUETA_COLOR) + '">' + p.etiqueta + '</span>' : '';
    const specs = p.specs ? '<ul class="specs">' + Object.entries(p.specs).map(([k, v]) =>
      '<li class="spec" title="' + k + '">' + (ICONOS[k] || ICONOS.otro) + '<span>' + v + '</span></li>').join('') + '</ul>' : '';
    const cap = gbs.length ? '<div class="capacidad"><div class="cap-titulo">' + ICONOS[c.selectorIcono || "almacenamiento"] + '<span>' + (c.selectorTitulo || "Capacidad") + '</span></div><div class="chips' + (gbs.some(g => g.length > 7) ? ' largo' : '') + '">' +
      gbs.map((g, j) => '<button type="button" class="chip' + (j === 0 ? ' activo' : '') + '" data-gb="' + g + '">' + g + '</button>').join('') + '</div></div>' : '';
    const desc = p.desc ? '<p>' + p.desc + '</p>' : '';
    return '<article class="prod" data-i="' + i + '">' +
      '<div class="foto">' + ICONO_FOTO + '<img src="' + foto + '" alt="' + p.nombre + '" loading="lazy" onerror="this.remove()">' + etiq + '</div>' +
      '<div class="info"><h3>' + p.nombre + '</h3>' + desc + specs + cap + '<span class="precio">' + fmt(gb ? p.opciones[gb] : p.precio) + '</span>' +
      '<a class="pedir" href="' + linkPedir(p, gb) + '" target="_blank" rel="noopener">Pedir</a></div></article>';
  }).join("");
}

document.getElementById("productos").addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  const art = chip.closest(".prod");
  const p = CATALOGOS[claveActual].productos[art.dataset.i];
  const gb = chip.dataset.gb;
  art.querySelectorAll(".chip").forEach(c => c.classList.toggle("activo", c === chip));
  art.querySelector(".precio").textContent = fmt(p.opciones[gb]);
  art.querySelector(".pedir").href = linkPedir(p, gb);
});

function ir(clave) {
  const hay = !!clave && Object.prototype.hasOwnProperty.call(CATALOGOS, clave);
  if (hay) mostrarCatalogo(clave);
  inicio.hidden = hay;
  catalogo.hidden = !hay;
  window.scrollTo(0, 0);
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    ir(a.getAttribute("href").slice(1));
  });
});
ir("");
