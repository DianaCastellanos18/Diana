let url = "https://dummyjson.com/products";

// se crean las variables
let productos = [];
let productosFiltrados = [];
let precio_minimo = 0;
let carrito = [];

//función para consultar las preguntas
async function consultaProductos() {
  let respuesta = await fetch(url); //cogemos url del api
  let productosJSON = await respuesta.json(); //lo recojo con json y lo instroduzco en una variable
  console.log("Ejecutando");
  console.log(productosJSON.products);

  if (productosJSON.products && productosJSON.products.length > 0) {
    ///si hay productos, los mostramos
    productos = productosJSON.products;

    llenarFiltros();
  }
}

function llenarFiltros() {
  let categorias = [];
  let marcas = [];

  // Recorremos los productos,y añadimos las categorias y las marcas
  productos.forEach((producto) => {
    if (!categorias.includes(producto.category)) {
      categorias.push(producto.category);
    }
    if (!marcas.includes(producto.brand)) {
      marcas.push(producto.brand);
    }
  });

  // Obtener los elementos para las categorías y marcas
  let CategoriaSelecionada = document.getElementById("categoria");
  let MarcaSelecionada = document.getElementById("marca");

  CategoriaSelecionada.innerHTML = "";
  MarcaSelecionada.innerHTML = "";

  //Llenar las categorías y las marcas con las opciones que tiene
  categorias.forEach((categoria) => {
    let optionCategoria = document.createElement("option");
    optionCategoria.value = categoria;
    optionCategoria.textContent = categoria;
    CategoriaSelecionada.appendChild(optionCategoria);
  });

  marcas.forEach((marca) => {
    let optionMarca = document.createElement("option");
    optionMarca.value = marca;
    optionMarca.textContent = marca;
    MarcaSelecionada.appendChild(optionMarca);
  });
}

//Función donde mostrar el resultado de la busqueda

function ResultadoBusqueda() {
  let resultados = document.getElementById("productos");

  resultados.innerHTML = "";

  let precio_minimo = parseInt(document.getElementById("precio_minimo").value);
  let CategoriaSelecionada = document.getElementById("categoria").value;
  let MarcaSelecionada = document.getElementById("marca").value;

  // se filtran las caracteristicas de cada uno de los productos
  let productosFiltrados = productos.filter((producto) => {
    return (
      producto.price >= precio_minimo &&
      (CategoriaSelecionada === "" ||
        producto.category === CategoriaSelecionada) &&
      (MarcaSelecionada === "" || producto.brand === MarcaSelecionada)
    );
  });

  if (productosFiltrados.length == 0) {
    Swal.fire({
      title: "No se encontraron productos",
      text: "No existe un producto con esos filtros.",
      icon: "warning",
    });
  } else {
    productosFiltrados.forEach((producto) => {
      let imagenUrl =
        producto.images && producto.images.length > 0
          ? producto.images[0]
          : "ruta/a/imagen/predeterminada.jpg";
      let ContenidoProducto = document.createElement("div");
      ContenidoProducto.classList.add("producto");

      ContenidoProducto.innerHTML = `
      <img src="${imagenUrl}" >
      <h3>${producto.title}</h3>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: ${producto.category}</p>
      <button class="botonCarrito">Añadir al carrito</button>
      
    `;
      let botonCarrito = ContenidoProducto.querySelector("button");
      botonCarrito.onclick = () => añadirCarrito(producto);

      resultados.appendChild(ContenidoProducto);
    });
    Swal.fire({
      title: "Producto buscado",
      text: "Los productos han sido filtrados correctamente.",
      icon: "success",
    });
  }
}

// Boton donde al hacer click indica si se encuentra el producto
let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  ResultadoBusqueda();
  if (productosFiltrados.length > 0) {
    Swal.fire({
      title: "Producto buscado",
      text: "Ell producto se ha encontrado correctamente",
      icon: "success",
    });
  }
});

//función donde se añade al carrito los productos
function añadirCarrito(producto) {
  carrito.push(producto);
  console.log(producto);
  actualizarCarrito();
}

//función para actualizar el carrito e ir listando los productos que se "añaden al carrito"
function actualizarCarrito() {
  let listaProductos = document.getElementById("listaProductosc");
  listaProductos.innerHTML = "";

  carrito.forEach((producto) => {
    let item = document.createElement("li");
    item.textContent = `${producto.title} , ${producto.price}`;
    listaProductos.appendChild(item);
  });

  let botonCompra = document.getElementById("botonCompra");
  //se crea una variable con el total de la compra
  let totalCompra = 0;
  carrito.forEach((producto) => {
    totalCompra += producto.price;
  });
  botonCompra.addEventListener("click", () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: `Vas a realizar una compra con valor de $${totalCompra}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Acepto",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Comprado",
          text: "Has realizado la compra correctamente",
          icon: "success",
        });
        //si se acepta se elimina la lista
        carrito = [];
        actualizarCarrito();
      }
    });
  });
}

consultaProductos();
