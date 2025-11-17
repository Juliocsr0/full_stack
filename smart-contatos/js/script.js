const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email")
const inputTel = document.getElementById("telefone")

function btnCadastrar(event) {
  // alert('Você clicou no botão de cadastrar');
  event.preventDefault();
  console.log(inputNome.value);
  console.log(inputEmail.value);
  console.log(inputTel.value);
}
