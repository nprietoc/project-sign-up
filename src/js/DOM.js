// const cambioInput = document.querySelectorAll('input')[0].placeholder = 'Error'

const enviar = () => {
  const cambioInput = document.querySelectorAll(".input");
  console.log(cambioInput);

  cambioInput.forEach((element) => {
    if (element.value != "") {
      // let validacion =
    } else {
      element.placeholder = "";
      element.classList.add("is-invalid");
    }
  });
};
