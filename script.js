const WHATSAPP = "595000000000";
const ETIQUETA_TEXTO = "#2b1600";
const ETIQUETA_COLOR = "#f08a24";  
const MONEDA = "Gs.";              
const NUEVO = { etiqueta: "Nuevo", etiquetaColor: "#238a4a" };
const SEMI  = { etiqueta: "Seminuevo" };
const DISPONIBLE = { estado: "Disponible" };
const PEDIDO     = { estado: "Bajo pedido" };
const ESTADOS = {
  "Disponible":  { fondo: "#238a4a", texto: "#ffffff" },
  "Bajo pedido": { fondo: "#f2c230", texto: "#3a2d00" }
};

const CATALOGOS = {
  iphones: {
    titulo: "iPhones",
    sub: "Elige la capacidad y mira el precio al instante.",
    productos: [
      { nombre: "iPhone XR", ...SEMI, ...PEDIDO, specs: { ram: "3 GB" }, opciones: { "64 GB": 650000, "128 GB": 850000 }, foto: "img/iphones/iphonexr.jpeg" },
      { nombre: "iPhone 11", ...SEMI, ...DISPONIBLE, specs: { ram: "4 GB" }, opciones: { "64 GB": 980000, "128 GB": 1090000 }, foto: "img/iphones/iphone11.jpeg" },
      { nombre: "iPhone 11 Pro", ...SEMI, ...PEDIDO, specs: { ram: "4 GB" }, opciones: { "64 GB": 1130000, "256 GB": 1470000 }, foto: "img/iphones/iphone11pro.jpeg" },
      { nombre: "iPhone 11 Pro Max", ...SEMI, ...PEDIDO, specs: { ram: "4 GB" }, opciones: { "256 GB": 1240000 }, foto: "img/iphones/iphone11promax.jpeg" },
      { nombre: "iPhone 12", ...SEMI, ...PEDIDO, specs: { ram: "4 GB" }, opciones: { "64 GB": 1550000, "128 GB": 1670000, "256 GB": 1900000 }, foto: "img/iphones/iphone12.jpeg" },
      { nombre: "iPhone 12 Mini", ...SEMI, ...PEDIDO, specs: { ram: "4 GB" }, opciones: { "64 GB": 1610000, "128 GB": 1720000, "256 GB": 1950000 }, foto: "img/iphones/iphone12mini.jpeg" },
      { nombre: "iPhone 12 Pro", ...SEMI, ...PEDIDO, specs: { ram: "6 GB" }, opciones: { "128 GB": 1670000, "256 GB": 1900000 }, foto: "img/iphones/iphone12pro.jpeg" },
      { nombre: "iPhone 12 Pro Max", ...SEMI, ...PEDIDO, specs: { ram: "6 GB" }, opciones: { "128 GB": 1720000, "256 GB": 1950000 }, foto: "img/iphones/iphone12promax.jpeg" },
      { nombre: "iPhone 13", ...SEMI, ...PEDIDO, specs: { ram: "4 GB" }, opciones: { "128 GB": 1760000, "256 GB": 1990000 }, foto: "img/iphones/iphone13.jpeg" },
      { nombre: "iPhone 13 Mini", ...SEMI, ...PEDIDO, specs: { ram: "4 GB" }, opciones: { "128 GB": 1760000, "256 GB": 1990000 }, foto: "img/iphones/iphone13mini.jpeg" },
      { nombre: "iPhone 13 Pro", ...SEMI, ...PEDIDO, specs: { ram: "6 GB" }, opciones: { "128 GB": 1820000, "256 GB": 2050000 }, foto: "img/iphones/iphone13pro.jpeg" },
      { nombre: "iPhone 13 Pro Max", ...SEMI, ...PEDIDO, specs: { ram: "6 GB" }, opciones: { "128 GB": 1870000, "256 GB": 2100000 }, foto: "img/iphones/iphone13promax.jpeg" },
      { nombre: "iPhone 14", ...SEMI, ...PEDIDO, specs: { ram: "6 GB" }, opciones: { "128 GB": 2070000, "256 GB": 2300000 }, foto: "img/iphones/iphone14.jpeg" },
      { nombre: "iPhone 14 Plus", ...SEMI, ...PEDIDO, specs: { ram: "6 GB" }, opciones: { "128 GB": 2140000, "256 GB": 2370000 }, foto: "img/iphones/iphone14plus.jpeg" },
      { nombre: "iPhone 14 Pro", ...SEMI, ...PEDIDO, specs: { ram: "6 GB" }, opciones: { "128 GB": 2180000, "256 GB": 2410000 }, foto: "img/iphones/iphone14pro.jpeg" },
      { nombre: "iPhone 14 Pro Max", ...SEMI, ...PEDIDO, specs: { ram: "6 GB" }, opciones: { "128 GB": 2400000, "256 GB": 2630000 }, foto: "img/iphones/iphone14promax.jpeg" },
      { nombre: "iPhone 15", ...SEMI, ...PEDIDO, specs: { ram: "6 GB" }, opciones: { "128 GB": 2600000, "256 GB": 2830000 }, foto: "img/iphones/iphone15.jpeg" },
      { nombre: "iPhone 15 Plus", ...SEMI, ...PEDIDO, specs: { ram: "6 GB" }, opciones: { "256 GB": 2760000 }, foto: "img/iphones/iphone15plus.jpeg" },
      { nombre: "iPhone 15 Pro", ...SEMI, ...PEDIDO, specs: { ram: "8 GB" }, opciones: { "256 GB": 3360000, "512 GB": 3940000 }, foto: "img/iphones/iphone15pro.jpeg" },
      { nombre: "iPhone 15 Pro Max", ...SEMI, ...PEDIDO, specs: { ram: "8 GB" }, opciones: { "256 GB": 3680000, "512 GB": 4260000 }, foto: "img/iphones/iphone15promax.jpeg" },
      { nombre: "iPhone 16", ...SEMI, ...PEDIDO, specs: { ram: "8 GB" }, opciones: { "128 GB": 3460000, "256 GB": 3680000 }, foto: "img/iphones/iphone16.jpeg" },
      { nombre: "iPhone 16 Plus", ...SEMI, ...PEDIDO, specs: { ram: "8 GB" }, opciones: { "256 GB": 3570000 }, foto: "img/iphones/iphone16plus.jpeg" },
      { nombre: "iPhone 16 Pro", ...SEMI, ...PEDIDO, specs: { ram: "8 GB" }, opciones: { "256 GB": 4120000, "512 GB": 4690000 }, foto: "img/iphones/iphone16pro.jpeg" },
      { nombre: "iPhone 16 Pro Max", ...SEMI, ...PEDIDO, specs: { ram: "8 GB" }, opciones: { "256 GB": 4560000, "512 GB": 5130000 }, foto: "img/iphones/iphone16promax.jpeg" },
      { nombre: "iPhone 17 Air", ...NUEVO, ...PEDIDO, specs: { ram: "12 GB" }, opciones: { "256 GB": 6620000, "512 GB": 7650000 }, foto: "img/iphones/iphone17air.jpeg" },
      { nombre: "iPhone 17", ...NUEVO, ...PEDIDO, specs: { ram: "8 GB" }, opciones: { "256 GB": 7180000, "512 GB": 8210000 }, foto: "img/iphones/iphone17.jpeg" },
      { nombre: "iPhone 17 Pro", ...NUEVO, ...PEDIDO, specs: { ram: "12 GB" }, opciones: { "256 GB": 7720000, "512 GB": 8750000, "1 TB": 10130000 }, foto: "img/iphones/iphone17pro.jpeg" },
      { nombre: "iPhone 17 Pro Max", ...NUEVO, ...PEDIDO, specs: { ram: "12 GB" }, opciones: { "256 GB": 8200000, "512 GB": 9230000, "1 TB": 10610000 }, foto: "img/iphones/iphone17promax.jpeg" }
    ]
  },
  estuches: {
    titulo: "Estuches",
    sub: "Elige el tipo de estuche para tu modelo.",
    productos: [
      { nombre: "Estuche iPhone XR", precio: 25000, foto: "img/estuches/estuchexr.jpeg" },
      { nombre: "Estuche iPhone 11", precio: 25000, foto: "img/estuches/estuche11.jpeg" },
      { nombre: "Estuche iPhone 11 Pro", precio: 25000, foto: "img/estuches/estuche11pro.jpeg" },
      { nombre: "Estuche iPhone 11 Pro Max", precio: 25000, foto: "img/estuches/estuche11promax.jpeg" },
      { nombre: "Estuche iPhone 12", precio: 25000, foto: "img/estuches/estuche12.jpeg" },
      { nombre: "Estuche iPhone 12 Mini", precio: 25000, foto: "img/estuches/estuche12mini.jpeg" },
      { nombre: "Estuche iPhone 12 Pro", precio: 25000, foto: "img/estuches/estuche12pro.jpeg" },
      { nombre: "Estuche iPhone 12 Pro Max", precio: 25000, foto: "img/estuches/estuche12promax.jpeg" },
      { nombre: "Estuche iPhone 13", precio: 30000, foto: "img/estuches/estuche13.jpeg" },
      { nombre: "Estuche iPhone 13 Mini", precio: 30000, foto: "img/estuches/estuche13mini.jpeg" },
      { nombre: "Estuche iPhone 13 Pro", precio: 30000, foto: "img/estuches/estuche13pro.jpeg" },
      { nombre: "Estuche iPhone 13 Pro Max", precio: 30000, foto: "img/estuches/estuche13promax.jpeg" },
      { nombre: "Estuche iPhone 14", precio: 30000, foto: "img/estuches/estuche14.jpeg" },
      { nombre: "Estuche iPhone 14 Plus", precio: 30000, foto: "img/estuches/estuche14plus.jpeg" },
      { nombre: "Estuche iPhone 14 Pro", precio: 30000, foto: "img/estuches/estuche14pro.jpeg" },
      { nombre: "Estuche iPhone 14 Pro Max", precio: 30000, foto: "img/estuches/estuche14promax.jpeg" },
      { nombre: "Estuche iPhone 15", precio: 35000, foto: "img/estuches/estuche15.jpeg" },
      { nombre: "Estuche iPhone 15 Plus", precio: 35000, foto: "img/estuches/estuche15plus.jpeg" },
      { nombre: "Estuche iPhone 15 Pro", precio: 35000, foto: "img/estuches/estuche15pro.jpeg" },
      { nombre: "Estuche iPhone 15 Pro Max", precio: 35000, foto: "img/estuches/estuche15promax.jpeg" },
      { nombre: "Estuche iPhone 16", precio: 35000, foto: "img/estuches/estuche16.jpeg" },
      { nombre: "Estuche iPhone 16 Plus", precio: 35000, foto: "img/estuches/estuche16plus.jpeg" },
      { nombre: "Estuche iPhone 16 Pro", precio: 35000, foto: "img/estuches/estuche16pro.jpeg" },
      { nombre: "Estuche iPhone 16 Pro Max", precio: 35000, foto: "img/estuches/estuche16promax.jpeg" },
      { nombre: "Estuche iPhone 17 Air", precio: 40000, foto: "img/estuches/estuche17air.jpeg" },
      { nombre: "Estuche iPhone 17", precio: 40000, foto: "img/estuches/estuche17.jpeg" },
      { nombre: "Estuche iPhone 17 Pro", precio: 40000, foto: "img/estuches/estuche17pro.jpeg" },
      { nombre: "Estuche iPhone 17 Pro Max", precio: 40000, foto: "img/estuches/estuche17promax.jpeg" }
    ]
  },
  accesorios: {
    titulo: "Accesorios",
    sub: "Vidrios, cables y cargadores.",
    productos: [
      { nombre: "Vidrio templado", precio: 20000, desc: "Protección total para la pantalla.", foto: "img/accesorios/vidriotemplado.jpeg" },
      { nombre: "Vidrio de privacidad", precio: 30000, desc: "Evita miradas laterales.", foto: "img/accesorios/vidrioprivacidad.jpeg" },
      { nombre: "Cable USB-C a Lightning", precio: 35000, desc: "1 metro, carga y datos.", foto: "img/accesorios/cablelightning.jpeg" },
      { nombre: "Cable USB-C a USB-C", precio: 40000, desc: "1 metro, carga rápida.", foto: "img/accesorios/cableusbc.jpeg" },
      { nombre: "Cargador 20W", precio: 60000, desc: "Carga rápida USB-C.", foto: "img/accesorios/cargador20w.jpeg" },
      { nombre: "Cargador inalámbrico", precio: 90000, desc: "Base compatible con MagSafe.", foto: "img/accesorios/cargadorinalambrico.jpeg" },
      { nombre: "Cargador de auto", precio: 50000, desc: "Dos puertos, carga rápida.", foto: "img/accesorios/cargadorauto.jpeg" },
      { nombre: "Power bank 10000 mAh", precio: 120000, desc: "Carga tu iPhone varias veces.", foto: "img/accesorios/powerbank.jpeg" }
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
const waHome = document.getElementById("wa-home");
if (waHome) waHome.href =
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
    const etiq = p.etiqueta ? '<span class="etiqueta" style="background:' + (p.etiquetaColor || ETIQUETA_COLOR) + ';color:' + (p.etiquetaTexto || (p.etiquetaColor ? '#fff' : ETIQUETA_TEXTO)) + '">' + p.etiqueta + '</span>' : '';
    const specs = p.specs ? '<ul class="specs">' + Object.entries(p.specs).map(([k, v]) =>
      '<li class="spec" title="' + k + '">' + (ICONOS[k] || ICONOS.otro) + '<span>' + v + '</span></li>').join('') + '</ul>' : '';
    const cap = gbs.length ? '<div class="capacidad"><div class="cap-titulo">' + ICONOS[c.selectorIcono || "almacenamiento"] + '<span>' + (c.selectorTitulo || "Capacidad") + '</span></div><div class="chips' + (gbs.some(g => g.length > 7) ? ' largo' : '') + '">' +
      gbs.map((g, j) => '<button type="button" class="chip' + (j === 0 ? ' activo' : '') + '" aria-pressed="' + (j === 0) + '" data-gb="' + g + '">' + g + '</button>').join('') + '</div></div>' : '';
    const estado = p.estado ? '<span class="estado" style="background:' + ((ESTADOS[p.estado] || {}).fondo || "#667") + ';color:' + ((ESTADOS[p.estado] || {}).texto || "#fff") + '">' + p.estado + '</span>' : '';
    const desc = p.desc ? '<p>' + p.desc + '</p>' : '';
    return '<article class="prod" data-i="' + i + '">' +
      '<div class="foto">' + ICONO_FOTO + '<img src="' + foto + '" alt="' + p.nombre + '" loading="lazy" onerror="this.remove()">' + etiq + estado + '</div>' +
      '<div class="info"><h3>' + p.nombre + '</h3>' + desc + specs + cap + '<span class="precio">' + fmt(gb ? p.opciones[gb] : p.precio) + '</span>' +
      '<a class="pedir" href="' + linkPedir(p, gb) + '" target="_blank" rel="noopener">Pedir</a></div></article>';
  }).join("");
}

const lista = document.getElementById("productos");
if (lista) lista.addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  const art = chip.closest(".prod");
  const p = CATALOGOS[claveActual].productos[art.dataset.i];
  const gb = chip.dataset.gb;
  art.querySelectorAll(".chip").forEach(c => {
    c.classList.toggle("activo", c === chip);
    c.setAttribute("aria-pressed", c === chip);
  });
  art.querySelector(".precio").textContent = fmt(p.opciones[gb]);
  art.querySelector(".pedir").href = linkPedir(p, gb);
});

const pagina = document.body.dataset.pagina;
if (pagina && CATALOGOS[pagina]) mostrarCatalogo(pagina);
