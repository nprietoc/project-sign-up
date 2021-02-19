// const cambioInput = document.querySelectorAll('input')[0].placeholder = 'Error'

const enviar = () => {
  const cambioInput = document.querySelectorAll(".input");
  //  const nameInput = document.getElementById('idName');
  console.log(cambioInput);
  var patron = /^[a-z]{3,16}$/;
  var patronEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var patronPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

  cambioInput.forEach((element) => {
    if (element.value != "") {
      if (element.id == "idName") {
        if (patron.test(element.value)) {
          element.classList.add("is-valid");
          document.getElementById("spN").classList.add("hideProp");
        } else {
          element.classList.add("is-invalid");
        }
      } if (element.id == "idLast") {
        if (patron.test(element.value)) {
          element.classList.add("is-valid");
          document.getElementById("spL").classList.add("hideProp");
        } else {
          element.classList.add("is-invalid");
        }
      } if (element.id == "idEmail") {
        if (patronEmail.test(element.value)) {
          element.classList.add("is-valid");
          document.getElementById("spE").classList.add("hideProp");
        } else {
          element.classList.add("is-invalid");
        }
      } if (element.id == "idPassword") {
        if (patronPassword.test(element.value)) {
          element.classList.add("is-valid");
          document.getElementById("spP").classList.add("hideProp");
        } else {
          element.classList.add("is-invalid");
        }
      }
    } else {
      element.placeholder = element.id == "idEmail" ? "email@example.com" : "";
      element.classList.add("is-invalid");
      element.classList.add("id-email");
      document.getElementById("spN").innerHTML = "First Name cannot be empty";
      document.getElementById("spL").innerHTML = "Last Name cannot be empty";
      document.getElementById("spE").innerHTML = "Looks like this is not an email";
      document.getElementById("spP").innerHTML = "Password cannot be empty";
    }
  });
};

// const nameInput = document.getElementById('idName')
// const lastName = document.getElementById('idLast')
// const email = document.getElementById('idEmail')
// const Password = document.getElementById('idPassword')

// const enviar = () => {
//   if ( nameInput.value != "" ) {
//     return nameInput.classList.add("is-valid");
//   } else {
//     nameInput.classList.add("is-invalid");
//     nameInput.placeholder =  "" ;
//     document.getElementById('spN').innerHTML = "First Name cannot be empty";
//   }
// }
