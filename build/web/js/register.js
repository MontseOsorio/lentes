/* global validarCmapo, parentElement */

const formRegister=document.querySelector(".form-register");
const inputUser=document.querySelector(".form-register input[type='text']");
const inputEmail=document.querySelector(".form-register input[type='email']");
const inputPass=document.querySelector(".form-register input[type='password']");
var yaSeCreo = true;

const userNameRegex=/^[a-zA-Z0-9\_\-]{4,16}$/;
const emailRegex=/^[a-zA-Z0-9_.+-]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegex=/^.{4,12}$/;

const estadoValidacionCampos={
    userName:false,
    userEmail:false,
    userPassword:false,
};

document.addEventListener("DOMContentLoaded",()=>{
formRegister.addEventListener("submit", e => {
    e.preventDefault();
    enviarFormulario();
});

//acceder
inputUser.addEventListener("input",() =>{
  validarCampo(userNameRegex,inputUser,"El usuario debe ser de 4 a 16 digitos y no puede contener guiones bajos");  
});
inputEmail.addEventListener("input",() =>{
  validarCampo(emailRegex,inputEmail,"El correo debe contener un @,letras, números, puntos, guiones y guíon bajo."); 

});
inputPass.addEventListener("input",() =>{
  validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 4 a 12 dígitos"); 

});

});

function validarCampo(regularExpresion,campo,mensaje){
    const validarCampo=regularExpresion.test(campo.value);
    console.log("ALERTA"+validarCampo);
    console.log("regex"+regularExpresion);
    if (validarCampo){
      eliminarAlerta(campo.parentElement.parentElement);
      estadoValidacionCampos[campo.name]=true;
      campo.parentElement.classList.remove("error");
      return;
    }
    
     estadoValidacionCampos[campo.name]=false;
       mostrarAlerta(campo.parentElement.parentElement,mensaje);
       campo.parentElement.classList.add("error");
       
    }
   

function mostrarAlerta(referencia,mensaje){
    eliminarAlerta(referencia);
    const alertaDiv=document.createElement("div");
    alertaDiv.classList.add("alerta");
    alertaDiv.textContent=mensaje;
    referencia.appendChild(alertaDiv);
    
}
function eliminarAlerta(referencia){
    const alerta=referencia.querySelector(".alerta");
    if (alerta){
        alerta.remove();
    }
}
function enviarFormulario(){
    //aqui se va avalidar el envio del formulario
    if (estadoValidacionCampos.userName && estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword){
        alertaExito.classList.add("alertaExito");
        alertaError.classList.remove("alertaError");
        formRegister.reset();
        return ;
    }
    
}








