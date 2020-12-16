$(document).ready(function () {
  //console.log('dentro funcion');  //solo visula
 
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://catalogo-dcw.firebaseio.com/.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText); //solo visual
      let datos_cat = JSON.parse(this.responseText);
      //solo visula
      //console.log(datos_cat);

      //inicio
      let Cards = document.querySelector('#Cards');
      Cards.innerHTML = '';

      for (let item of datos_cat) {       

        //Np => numero de productos
        Np = item.id;
        Cards.innerHTML +=
          `                   
          <div id="princi-${item.id}" class="col mb-4 id_producto flipInY" filtro="${item.filtro}">
          <div class="card">
            <!-- Card image -->
            <div class="view overlay zoom">
              <img class="card-img-top" src="${item.fotoportada}" alt="Card image cap">
              <a onclick="A(${item.id});">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <!-- Card content -->
            <div class="card-body">
        
              <!-- Title -->
              <h2 class="card-title t2">${item.nombre}</h2>
              <hr>
              <!-- Text -->
        
              <p class="font-weight-bold mb-0 text-right pr-1"><span class="${item.promo} float-left">${item.precio}</span>
                ${item.precioPromo}</p>
            </div>
        
            <!-- Card footer -->
            <div class="container rounded-bottom text-center pt-0">
              <div class="row">
                <div class="col-5 stylish-color text-white pt-2">
                  <a onclick="A(${item.id});" class="text-reset" data-toggle="modal" data-target="#centralModalLGInfoDemo">
                    <h3 class="font-weight-bold ta">VER <i class=" pl-1 fas fa-plus"></h3></i>
                  </a>
                </div>
                <div class="col-7 elegant-color-dark text-white pt-2">
                  <a class="text-reset" href="${item.urlComp}" target="_blank">
                    <h3 class="font-weight-bold ta">COMPRAR <i class="float-right fas fa-tag"></i></h3>
                  </a>
                </div>
              </div>
            </div>
        
          </div>
        </div>
                       
        <div id="vermas-${item.id}" class="col mb-4 id_producto zoomIn invisible d-none pt-5" filtro="${item.filtro}">
          <div class="container">
            <button type="button" onclick="B(${item.id});" class="close pt-1" aria-label="Close">
              <span aria-hidden="true"><i class="fas fa-window-close"></i></span>
            </button>
            <!-- Title -->
              <h1 class="card-title">${item.nombre}</h1>
            <br>
            <div class="row">
              <div class="col-12 col-md-6">
              
              <div style="padding: 100% 0 0 0; width: 100%; position: relative;">  <iframe src="${item.foto360}" frameborder="0" scrolling="no" style="background-color: transparent; border: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allowfullscreen></iframe></div>
              
              <!-- Gif
              <img src="${item.foto360}" class="img-fluid" alt="Funny image">
              -->
              </div>
        
              <div class="col-12 col-md-6 pt-3">
                <ul class="list-group">
                  <li class="list-group-item"><i class="fas fa-code mr-4"></i>CODIGO PRODUCTO:<p
                      class="d-inline text-monospace"> ${item.codigo}</p>
                  </li>
                  <li class="list-group-item"><i class="fas fa-ruler-combined mr-4"></i>${item.medidas} <p
                      class="d-inline text-monospace">(cm)</p>
                  </li>
                  <li class="list-group-item"><i class="fas fa-weight mr-4"></i>${item.peso} <p
                      class="d-inline text-monospace">(kg)</p>
                  </li>
                  <li class="list-group-item"><i class="fas fa-hammer mr-4"></i>Materiales:<p
                  class="d-inline text-monospace"> ${item.materiales}</p> 
                  </li>
                  <li class="list-group-item"><i class="fas fa-palette mr-4"></i>Colores:<p
                  class="d-inline text-monospace"> ${item.colores}</p> 
                  </li>
                  <li class="list-group-item">
                  <p class="font-weight-bold mb-0 text-right pr-1"><span
                        class="${item.promo} float-left">${item.precio}</span> ${item.precioPromo}<span
                        class="d-inline text-monospace font-weight-bold minT">(MXN)</span></p>
                  </li>
                  <li class="list-group-item">
                    <h3 class="font-weight-bold">
                      <a class="text-reset" href="${item.urlM}" target="_blank">${item.manual}</a>
                      <!--WhatsApp-->
                      <a class="text-reset float-right font-weight-normal pt-0" href="https://bit.ly/WhatsApp-DCW"
                        target="_blank"><i class="fab fa-whatsapp-square" style="font-size: 2.5rem;color: #25D366;"></i></a>
                    </h3>
                  </li>
                </ul>
                <div class="col-12 btn-group pb-3 pt-2" role="group" aria-label="Basic example">
                  <button type="button" onclick="B(${item.id});" class="btn stylish-color text-white font-weight-bold"><i
                      class="fas fa-angle-double-left pr-2"></i>Atras</button>
                  <button type="button" class="btn elegant-color-dark text-white font-weight-bold"><a class="text-reset"
                      href="${item.urlComp}" target="_blank">Comprar <i class="ml-1 mt-1 fas fa-tag"></i></a></button>
                </div>
              </div>
            </div>
            <div class="container">
              <h2>Descripción:</h2>
              <p>${item.descripcion}</p>
            </div>
            </br>
            <div class="container">
              <h4>${item.nota}</h4>
              <em>${item.txtnota}</em>
            </div>
          </div>
        `
      }
    }
  }
});



//funcion que oculta todos los productos
function OTP() {
  document.getElementById("Cards").classList.remove("row-cols-1", "row-cols-md-3", "row-cols-lg-4");
  for (var NpA = 0; NpA <= Np; NpA++) {
    document.getElementById("princi-" + NpA).classList.add("invisible", "d-none");
  }
  //  tt = id de titulo "Catalogo" y btns = id de botones de categorias PARA OCULTAR
  document.getElementById("tt").classList.add("invisible", "d-none");
  document.getElementById("btns").classList.add("invisible", "d-none");
  document.getElementById("tx").classList.add("invisible", "d-none");
}

//funcion que muestra todos los productos 
function MTP() {
  document.getElementById("Cards").classList.add("row-cols-1", "row-cols-md-3", "row-cols-lg-4");
  for (var NpA = 0; NpA <= Np; NpA++) {
    document.getElementById("princi-" + NpA).classList.remove("invisible", "d-none");
  }
  //  tt = id de titulo "Catalogo" y btns = id de botones de categorias PARA MOSTRAR
  document.getElementById("tt").classList.remove("invisible", "d-none");
  document.getElementById("btns").classList.remove("invisible", "d-none");
  document.getElementById("tx").classList.remove("invisible", "d-none");
}

//funcion que muestra producto selecionado y oculta los demas
function A(N) {
  document.getElementById("vermas-" + N).classList.remove("invisible", "d-none");
  OTP();
}

//funcion que oculta producto selecionado y muestra los demas
function B(N) {
  document.getElementById("vermas-" + N).classList.add("invisible", "d-none");
  MTP();
}