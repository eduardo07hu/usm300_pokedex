
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

//definir un arreglo  
const pokemones = [];  
const cargarTabla = ()=>{

  //1. obtener una referencia a la tabla
  let tbody = document.querySelector("#tbody-tabla");
  //eliminar el contenido del tbody
  tbody.innerHTML = "";
  //2. recorrer la lista de pokemones
  for (let i=0; i< pokemones.length; ++i){
    let p = pokemones[i];
    //3. por cada pokemon generar una fila de la tabla (tr)
    let tr = document.createElement("tr");
    //4. por cada atributo generar un td de la tabla
    let tdNRO = document.createElement("td");
    let tdNombre = document.createElement("td");
    let tdTipo = document.createElement("td");
    let tdDescripcion = document.createElement("td");
    let tdAcciones = document.createElement("td");
    //definir lo que va en la tabla
    tdNRO.innerText = i + 1;
    tdNombre.innerText = p.nombre;
    let tipo = document.createElement("i");
    if(p.tipo == "1"){
      tipo.classList.add("fas", "fa-leaf", "text-success", "fa-3x");
    }else if(p.tipo == "2"){
      tipo.classList.add("fas", "fa-fire", "text-danger", "fa-3x");
    }else if(p.tipo == "3"){
      tipo.classList.add("fas", "fa-bolt", "text-warning", "fa-3x");
    }else if (p.tipo == "4"){
      tipo.classList.add("fas", "fa-tint", "text-primary", "fa-3x");
    }else{
      tipo.classList.add("fas", "fa-bullseye", "text-info", "fa-3x");
    }
    tdTipo.classList.add("text-center");
    tdTipo.appendChild(tipo);

    tdDescripcion.innerHTML = p.descripcion;
    //5. agregar los td al tr
    tr.appendChild(tdNRO);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdAcciones);
    //6. agregar el tr a la tabla
    tbody.appendChild(tr);
  }

};
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#tipo-select").value;
    let legendario = document.querySelector("#legendario-si").checked;
    let descripcion = tinymce.get("descripcion-txt").getContent ();

    //crea objeto
    let pokemon = {};
    //crea atributos del objeto
    pokemon.nombre = nombre;
    pokemon.tipo = tipo;
    pokemon.legendario = legendario;
    pokemon.descripcion = descripcion;

    pokemones.push(pokemon);
    cargarTabla();
    Swal.fire("resultado exitoso", "pokemon registrado", "info");

});