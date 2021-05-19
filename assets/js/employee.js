const databaseClinicas = [
  { id: 1, nombre: "Clinica 12", descripcion: "Direccion 1" },
  { id: 2, nombre: "Clinica 2", descripcion: "Direccion 1" },
  { id: 3, nombre: "Clinica 3", descripcion: "Direccion 1" },
  { id: 4, nombre: "Clinica 3", descripcion: "Direccion 1" },
  { id: 5, nombre: "Clinica 3", descripcion: "Direccion 1" },
  { id: 6, nombre: "Clinica 3", descripcion: "Direccion 1" },
  { id: 6, nombre: "Clinica 3", descripcion: "Direccion 1" },
  { id: 6, nombre: "Clinica 3", descripcion: "Direccion 1" },
];

const databaseEquipos = [
  { id: 1, nombre: "Producto 12", estado: "Funcionado" },
  {
    id: 2,
    nombre: "Producto 2",
    estado: "No funcionado",
  },
  { id: 3, nombre: "Producto 3", estado: "Funcionado" },
];

/* Functions*/

const registerAction = () => {
  let modalHTML = `
        <div class="modal-container" >
        <div class="modal-title"> <h3>Registro acción </h3> <div class="closeBtnModal" id="closeBtnModal" >X</div> </div>

        <form class="formulario">
            <div class="form-group">
                <label for="fecha">Fecha</label>
                <input type="date" class="form-control" id="fecha" >

            </div>
            <div class="form-group">
                <label for="tipo">Tipo de Mantenimiento</label>
                <select  class="form-control" id="tipo" >
                    <option value="corr" >Correctivo</option>
                    <option value="prev" >Preventivo</option>
                </select>
            </div>

            <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea  class="form-control" id="descripcion" >
                   
                </textarea>
            </div>

            <div class="form-group" >
            <div class="send">
            <button type="submit" class="btn btn-primary send" >Registrar </button>
            </div>
            </div>
        </form>

        </div>
    `;

  let $modalDiv = document.createElement("div");
  $modalDiv.classList.add("customModal");
  $modalDiv.innerHTML = modalHTML;
  console.log($modalDiv);
  document.body.appendChild($modalDiv);
  document.body.style.overflow = "hidden";

  //onclick event
  $modalDiv.querySelector("#closeBtnModal").onclick = () => {
    document.body.removeChild($modalDiv);
    document.body.style.overflow = "auto";
  };
};

const getIdFromTable =($htmlRow)=>{
  $tr  = $htmlRow.path.filter(el => el.localName==='tr')[0].children
  ID = ""
  for (let item of $tr){
    if(item.localName ==='th'){
      ID= item.innerHTML
    }
  }

  return ID;
  
}

const showEquip = (evt)=>{

  ID = getIdFromTable(evt);
  
  console.log(ID)

}
const showInfo = (evt) => {

  ID = getIdFromTable(evt);

  console.log(ID)

  let modalHTML = `
    <div class="modal-container" >
    <div class="modal-title"> <h3>Información Clinica </h3> <div class="closeBtnModal" id="closeBtnModal" >X</div> </div>
    <table class="table table-striped">
    <thead>
      <tr>

        <th scope="col">Característica</th>
        <th scope="col">Detalle</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Nombre</th>
        <td>El nombre</td>
      </tr>
      <tr>
      <th scope="row">Direccion</th>
      <td>Calle 20</td>
    </tr>
    </tbody>
  </table>
    </div>
`;

  let $modalDiv = document.createElement("div");
  $modalDiv.classList.add("customModal");
  $modalDiv.innerHTML = modalHTML;
  document.body.appendChild($modalDiv);
  document.body.style.overflow = "hidden";

  //onclick event
  $modalDiv.querySelector("#closeBtnModal").onclick = () => {
    document.body.removeChild($modalDiv);
    document.body.style.overflow = "auto";
  };
};

/*TABLAS */
$tablaClinicas = document.getElementById("tablaClinicas");
$tablaEquipos = document.getElementById("tablaEquipos");

/* hACIENDO TABLAS*/
/* CLINICAS*/


const drawClinicaRows = () =>{
htmlClinicas = "";
databaseClinicas.forEach((el) => {
  htmlClinicas += `
    <tr >
                <th scope="row">${el.id}</th>
                <td > ${el.nombre}</td>
                <td> <button class="btn btn-primary" name="btnInfo" ><i class="fas fa-info"></i></button></td>
                <td> <button name="btnEqui" class="btn btn-primary"><i class="fas fa-toolbox"></i></button></td>
    </tr>
    `;

});

$tablaClinicas.innerHTML = htmlClinicas;
document.getElementsByName('btnInfo').forEach(btn=>{
  btn.addEventListener('click',showInfo)
})
document.getElementsByName('btnEqui').forEach(btn=>{
  btn.addEventListener('click',showEquip)
})

}

/* EQUIPOS*/
const drawEquiposRows = () =>{
htmlEquipos = "";
databaseEquipos.forEach((el) => {
  htmlEquipos += `
        <tr>
                    <th scope="row">${el.id}</th>
                    <th > ${el.nombre}</th>
                    <th >${el.estado}</th>
                    <th> <button onclick="registerAction()" class="btn btn-primary"><i class="fas fa-align-justify"></i></button></th>
                    
        </tr>
        
        `;
});
$tablaEquipos.innerHTML = htmlEquipos;
}

drawClinicaRows()
drawEquiposRows()