/* 
 * Definición de la clase Producto, que incluye propiedades de SKU, nombre y precio, 
 * con sus respectivos métodos getter y setter utilizando Object.defineProperties.

function Producto(sku, nombre, precio) {
    // Propiedades privadas
    let _sku = sku;
    let _nombre = nombre;
    let _precio = precio;

    // Definición de las propiedades con getters y setters
    Object.defineProperties(this, {
        sku: {
            get: function() {
                return _sku; // Retorna el SKU
            },
            set: function(nuevo_sku) {
                _sku = nuevo_sku; // Establece un nuevo SKU
            }
        },
        nombre: {
            get: function() {
                return _nombre; // Retorna el nombre del producto
            },
            set: function(nuevo_nombre) {
                _nombre = nuevo_nombre; // Establece un nuevo nombre
            }
        },
        precio: {
            get: function() {
                return _precio; // Retorna el precio del producto
            },
            set: function(nuevo_precio) {
                _precio = nuevo_precio; // Establece un nuevo precio
            }
        }
    });
}

// Instanciación de productos utilizando la clase Producto
let producto1 = new Producto("0001", "Leche", 1000);
let producto2 = new Producto("0002", "Pan de molde", 2000);
let producto3 = new Producto("0003", "Queso", 1200);
let producto4 = new Producto("0004", "Mermelada", 890);
let producto5 = new Producto("0005", "Azúcar", 1300);
 */

// Arreglo de productos con objetos que contienen SKU, nombre, precio, marca e imagen
const productos = [
    { sku: '0001', nombre: 'Calzoncillos Mario Bros Oficial PE', precio: 1000, marca: 'Alejandro Bonela', img: 'assets/img/Profe.jpg', categoria:'Vestuario' },
    { sku: '0002', nombre: 'Kit de Licencias de monopatín A4', precio: 2000, marca: 'Ignacio Cardenas', img: 'assets/img/Luis.jpg', categoria:'Ocio' },
    { sku: '0003', nombre: 'Docena de completos con longaniza sellados al vacio', precio: 12680, marca: 'Hacienda Tia Sara', img: 'assets/img/Sara.jpg', categoria:'Alimentos' },
    { sku: '0004', nombre: 'Workshop: remodelación de interiores con luces Led', precio: 1890, marca: 'Pineiros Group', img: 'assets/img/Brian.JFIF', categoria:'Servicio' },
    { sku: '0005', nombre: 'Como soñar preguntas, detener el tiempo y hacerlas despierto', precio: 1300, marca: 'Ludwing Morát', img: 'assets/img/Ludwing.jpg', categoria:'Libros' },
    { sku: '0006', nombre: "The Bonilla's Deathnote", precio: 1500, marca: 'Alejandro Bonela', img: 'assets/img/Profe2.JFIF', categoria:'Juguetes' },
    { sku: '0007', nombre: 'Jabones tristes con piedra pome', precio: 1400, marca: 'Consuelo Soap Company', img: 'assets/img/Consuelo.avif', categoria:'Higiene' },
    { sku: '0008', nombre: 'Microfono Las mil y una voz', precio: 1800, marca: 'Luis Adaro', img: 'assets/img/Adaro.png', categoria:'Juguetes' },
    { sku: '0009', nombre: 'Usted diga No', precio: 1900, marca: 'Herny', img: 'assets/img/Hernan.jpg', categoria:'Libros' },
    { sku: '0010', nombre: 'Piensan que soy una estafa', precio: 400, marca: 'Valentina Sandoval', img: 'assets/img/Valentina.jfif', categoria:'Libros' },
    { sku: '0011', nombre: 'Starter cosplay 31 minutos', precio: 10000, marca: 'Valentina Sandoval', img: 'assets/img/Vale2.png', categoria:'Vestuario' },
    { sku: '0012', nombre: 'Como desaparecer sin ser visto', precio: 40000, marca: "Esniel Lucena", img: 'assets/img/Esniel.jfif', categoria:'Libros' },
    { sku: '0013', nombre: 'Webinar: Como entrar y salir VIVO de Barrio Meiggs, pero con menos cosas', precio: 0, marca: "Ludwing Morát", img: 'assets/img/Lud2.jfif', categoria:'Ticket' },
    { sku: '0014', nombre: 'Como volver en 5 minutos', precio: 2990, marca: "Consuelo Soap Company", img: 'assets/img/Consuelo3.jfif', categoria:'Libros' },
    { sku: '0015', nombre: 'Convención masónica Dr. Simi', precio: 2990, marca: "Consuelo Soap Company", img: 'assets/img/Consu4.jfif', categoria:'Ticket' },
    { sku: '0016', nombre: 'Charla TED "Como inspirar a peces sintientes"', precio: 224990, marca: "Luis Adaro", img: 'assets/img/Luis2.jpg', categoria:'Ticket' },
    { sku: '0017', nombre: 'Como detectar grandes mentiras en codigos Front End', precio: 4990, marca: "Claudia Heredia", img: 'assets/img/Claudia.jpg', categoria:'Libros'},
    { sku: '0018', nombre: 'VCD: Web Fundamentals en Japones - Batusai Bonilla', precio: 5600, marca: "Marcelo Dokken", img: 'assets/img/ProfeJapan.png', categoria:'Video' },
    { sku: '0019', nombre: 'Seminario: Crea tu propio emprendimiento junto a tu esposa en 3 simples pasos', precio: 5600, marca: "Pineiros Group", img: 'assets/img/Brian2.jpg', categoria:'Ticket' },
    { sku: '0020', nombre: 'Como crear un paraiso fiscal despues de dejar el E-Learning', precio: 9440, marca: "Esniel Lucena", img: 'assets/img/Esniel2.jpg', categoria:'Libros'},
    { sku: '0021', nombre: 'Pa los amigos abrazos, pa los jiles balazos', precio: 5600, marca: "McDonal Trompo", img: 'assets/img/Trump.jpg', categoria:'Libros' },
    { sku: '0022', nombre: 'Fundamentos básicos para iniciarte en el Crochet de títeres', precio: 1600, marca: "Valentina Sandoval", img: 'assets/img/Vale3.jpg', categoria:'Ticket' },
    { sku: '0023', nombre: 'Como superar y avanzar en la vida despues de saber que tenias error de capa 8 - Parte 1', precio: 24600, marca: "Marcelo Dokken", img: 'assets/img/Marcelo2.jpg', categoria:'Video' },
    { sku: '0024', nombre: 'Tecnicas de como afrontar un ForEach con determinación', precio: 15600, marca: "Luis Adaro", img: 'assets/img/Luis3.jpeg', categoria:'Libros' },
    { sku: '0025', nombre: 'Secretos de como desfalcar un curso de E-learning', precio: 1000, marca: "Francisca Zamorano", img: 'assets/img/Francisca.jpg', categoria:'AudioLibro' },
    { sku: '0026', nombre: 'Parrilla solar con chimichurri para ver al Colo', precio: 55600, marca: "Itala Food & Grill", img: 'assets/img/Itala.png', categoria:'Parrilla' },
    { sku: '0027', nombre: '¡Amor mio, Bootstrap me insultó!', precio: 29600, marca: "Marcelo Dokken", img: 'assets/img/Marcelo6.jpg', categoria:'Libros'},
];

// Arreglo de carrito de compras, inicialmente vacío
let carrito = [];

// Generación de tarjetas de productos dinámicamente en el HTML
for (let i = 0; i < productos.length; i++) {
    let tarjeta = `
        <div class="tarjetaproducto">
            <div class="sku">
                <h6 id="${productos[i].sku}">sku: ${productos[i].sku}</h6>
                <h6>Categoria: ${productos[i].categoria}</h6>
            </div>
            <div class="imagen">
                <img class="imgProducto" src="${productos[i].img}" alt="">
            </div>
            <div class="titulo">
                <h4>${productos[i].nombre}</h4>
            </div>
            <div class="marca">
                <h6>Proveedor: ${productos[i].marca}</h6>
            </div>
            <div class="precio">
                <h2>$${productos[i].precio} Rupias</h2>
            </div>
            <button onclick='agregarProductoCarrito(${i})' class="boton" id="btnAgregar">
                Agregar
            </button>
            <div class="cantidad">
                <button onclick='restarUno(${i})' type="button" id="btnRestar"> 
                    <i class="fa-solid fa-circle-minus"></i>
                </button>
                <div id="numerocantidad_${i}">
                    0
                </div>
                <button onclick='sumarUno(${i})' type="button" id="btnSumar">
                    <i class="fa-solid fa-circle-plus"></i>
                </button>
            </div>
        </div>`;
    
    // Agregar las tarjetas generadas al contenedor en el HTML
    document.getElementById('datos').innerHTML += tarjeta;
}

// Función para agregar productos al carrito
function agregarProductoCarrito(index) {
    // Clonar el producto seleccionado
    let myProduct = { ...productos[index] };
    myProduct.cantidad = parseInt(document.querySelector("#numerocantidad_" + index).innerHTML);


    // Validar que la cantidad no sea 0
    if (myProduct.cantidad == 0) {
        alert("Falta cantidad");
    } else {
        // Buscar el producto en el carrito
        let product = carrito.find(function(element) {
            return element.sku == myProduct.sku;
        });

        // Si el producto ya está en el carrito, aumentar su cantidad
        if (product) {
            carrito.forEach(itemCard => {
                if (itemCard.sku == product.sku) {
                    itemCard.cantidad += parseInt(document.querySelector("#numerocantidad_" + index).innerHTML);
                    alert("Encontramos la vaina");
                    document.getElementById("card" + itemCard.sku).innerHTML = itemCard.cantidad;
                }
            });
        } else {
            // Si el producto no está en el carrito, agregarlo
            carrito.push(myProduct);
            let informacion2 = `
                <div class="SKU">${myProduct.sku}</div>
                <div class="nameProduct">${myProduct.nombre}</div>
                <div class="Quantity" id="card${myProduct.sku}">${myProduct.cantidad}</div>
                <div class="Total">${myProduct.precio}</div>
                <button id="iconEliminar" onclick="eliminarProducto('${myProduct.sku}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>`;
            
            // Agregar el producto al contenedor del carrito
            document.getElementById('informacion2').innerHTML += informacion2;

        }

        alert("Le hiciste wena");
        document.querySelector("#numerocantidad_" + index).innerHTML = "0"; // Resetear la cantidad

        totalsCantidad(); // Actualizar cantidad total
        sumarUnoBasket(); // Actualizar el número total de productos en el carrito
        totals(); // Calcular el total
    }

    console.log(carrito); // Mostrar el estado del carrito
}

// Función para calcular el total de los productos en el carrito
function totals() {
    let total = carrito.reduce((total3, myProduct) => {
        return total3 + myProduct.precio * myProduct.cantidad;
    }, 0);
    document.getElementById('total2').innerHTML = "Total: $" + Number(total).toLocaleString("es-CL");
}

// Función para calcular la cantidad total de productos en el carrito
function totalsCantidad() {
    let total = carrito.reduce((totalCantidad, myProduct) => {
        return totalCantidad + myProduct.cantidad;
    }, 0);
    document.querySelector("#Iconplus2").innerHTML = total;
    console.log(total);
}

// Función para eliminar un producto del carrito
function eliminarProducto(productSKU) {
    // Filtrar el producto para eliminarlo del carrito
    carrito = carrito.filter(function(product) {
        return product.sku !== productSKU;
    });
    
    actualizarCarrito(); // Actualizar la vista del carrito
    totals(); // Recalcular el total
    totalsCantidad(); // Recalcular la cantidad total
    aplicarDescuento();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const carritoContainer = document.getElementById('informacion2');
    carritoContainer.innerHTML = ''; // Limpiar el contenido previo

    // Recorrer el carrito y mostrar los productos actuales
    carrito.forEach(function(Product) {
        let informacion2 = `
                <div class="SKU">${Product.sku}</div>
                <div class="nameProduct">${Product.nombre}</div>
                <div class="Quantity" id="card${Product.sku}">${Product.cantidad}</div>
                <div class="Total">$${Product.precio * Product.cantidad}</div>
                <button class="eliminar-btn" id="iconEliminar" onclick="eliminarProducto('${Product.sku}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>`;
        
        carritoContainer.innerHTML += informacion2;

    });
}

// Función para sumar uno a la cantidad de productos en el carrito
function sumarUnoBasket() {
    let contadorBasket = parseInt(document.querySelector("#Iconplus2").innerHTML);
    contadorBasket = contadorBasket + 1;
}

// Función para sumar uno a la cantidad de un producto
function sumarUno(index) {
    let contador = parseInt(document.querySelector("#numerocantidad_" + index).innerHTML);
    contador = contador + 1;
    document.querySelector("#numerocantidad_" + index).innerHTML = contador;
}

// Función para restar uno a la cantidad de un producto
function restarUno(index) {
    let contador = parseInt(document.querySelector("#numerocantidad_" + index).innerHTML);
    contador = contador - 1;
    
    // Asegurar que no haya cantidades negativas
    if (contador >= 0) {
        document.querySelector("#numerocantidad_" + index).innerHTML = contador;
    } else {
        document.querySelector("#numerocantidad_" + index).innerHTML = "0";
    }
}


/* -------- */

// Obtener los elementos para controlar el modal
const modalCarrito = document.getElementById("modalCarrito");
const iconPlus = document.getElementById("Iconplus");
const cerrarModal = document.getElementById("cerrarModal");

// Mostrar el modal al hacer clic en el ícono del carrito
iconPlus.onclick = function() {
    modalCarrito.style.display = "block";
}

// Cerrar el modal al hacer clic en el botón de cierre
cerrarModal.onclick = function() {
    modalCarrito.style.display = "none";
}

/* ---------------------- */

// Selecciona todos los elementos con la clase .tarjetaproducto
const elementosRevelar = document.querySelectorAll('.tarjetaproducto');

function revelarElementos() {
    elementosRevelar.forEach((elemento, index) => {
        const posicion = elemento.getBoundingClientRect().top;
        const altoVentana = window.innerHeight;

        // Si el elemento entra en el viewport, agrega la clase para revelarlo
        if (posicion < altoVentana - 250) {
            // Aplica un delay incremental a cada elemento
            elemento.style.transitionDelay = `${index * 0.1}s`;
            elemento.classList.add('tarjetaproducto-activo');
        }
    });
}

// Selecciona todos los elementos con la clase .filtros
const elementosRevelar2 = document.querySelectorAll('.filtros');

function revelarElementos2() {
    elementosRevelar2.forEach((elemento2, index2) => {
        const posicion2 = elemento2.getBoundingClientRect().top;
        const altoVentana2 = window.innerHeight;

        // Si el elemento entra en el viewport, agrega la clase para revelarlo
        if (posicion2 < altoVentana2 - 250) {
            // Aplica un delay incremental a cada elemento
            elemento2.style.transitionDelay = `${index2 * 0.5}s`;
            elemento2.classList.add('filtros-activo');
        }
    });
}
// Llama a la función en cada desplazamiento
window.addEventListener('scroll', revelarElementos);
window.addEventListener('scroll', revelarElementos2);

// Llama a la función inmediatamente para los elementos visibles al cargar
revelarElementos();
revelarElementos2();

/* ------------------------- */


/* ------------------------- */

function Checkboxes(options) {
    const container = document.getElementById("checkboxContainer");
    container.innerHTML = ""; // Limpiamos el contenido del contenedor

    const container2 = document.getElementById("checkboxContainer2");
    container2.innerHTML = ""; // Limpiamos el contenido del contenedor
    
    // Crear un Set para almacenar marcas únicas
    const marcasUnicas = new Set();
    const categoriasUnicas = new Set();
    
    // Agregar cada marca al Set (solo se almacenarán marcas únicas)
    options.forEach(option => {
        marcasUnicas.add(option.marca);
    });

    // Agregar cada categroia al Set (solo se almacenarán categorias únicas)
    options.forEach(option2 => {
        categoriasUnicas.add(option2.categoria);
    });

    // Iterar sobre el Set, que ya contiene solo marcas únicas
    marcasUnicas.forEach(marca => {
        // Crear un checkbox para cada marca única
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `option-${marca}`; // ID basado en la marca
        checkbox.value = marca; // Valor del checkbox es la marca
        
        // Crear una etiqueta para el checkbox
        const label = document.createElement("label");
        label.htmlFor = `option-${marca}`;
        label.textContent = marca; // Mostrar el nombre de la marca
        
        // Agregar checkbox y etiqueta al contenedor
        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(document.createElement("br")); // Salto de línea
    });

    categoriasUnicas.forEach(categoria => {
        // Crear un checkbox para cada marca única
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `option-${categoria}`; // ID basado en la marca
        checkbox.value = categoria; // Valor del checkbox es la marca
        
        // Crear una etiqueta para el checkbox
        const label = document.createElement("label");
        label.htmlFor = `option-${categoria}`;
        label.textContent = categoria; // Mostrar el nombre de la marca
        
        // Agregar checkbox y etiqueta al contenedor
        container2.appendChild(checkbox);
        container2.appendChild(label);
        container2.appendChild(document.createElement("br")); // Salto de línea
    });
}

// Llamar a la función Checkboxes con el array de productos
Checkboxes(productos);

function aplicarDescuento() {
    // Obtener el valor del input de código de descuento
    const codigo = document.getElementById("codigoDescuento").value;
    
    // Comprobar si el código es "Mangaña"
    if (codigo === "Mangaña") {
        // Calcular el total con descuento
        let totalSinDescuento = carrito.reduce((total3, myProduct) => {
            return total3 + myProduct.precio * myProduct.cantidad;
        }, 0);
        
        // Aplicar el 80% de descuento
        let totalConDescuento = totalSinDescuento * 0.2; // 20% del precio original

        // Actualizar el HTML con el nuevo total
        document.getElementById('totalConDescuento').innerHTML = 
            "Total con descuento: $" + Number(totalConDescuento).toLocaleString("es-CL");
            document.getElementById('ahorro2').innerHTML = "Ganaste un descuento de 80%";
            document.getElementById("codigoDescuento").value = "";
    } else {
        alert("Código de descuento incorrecto.");
    }
}