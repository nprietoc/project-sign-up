// const cambioInput = document.querySelectorAll('input')[0].placeholder = 'Error'

function ocultar(){
  document.getElementById('hideName').style.display = "none";
}

const enviar = () => {
  const cambioInput = document.querySelectorAll(".input");
  console.log(cambioInput);

  cambioInput.forEach((element) => {
    if (element.value != "") {
      // let validacion =
    } else {
      element.placeholder = element.id=="idEmail" ? "email@example.com" : "" ;           
      element.classList.add("is-invalid");  
      element.classList.add("id-email");    
    }
  });
};
