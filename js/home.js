function entrar(){

   saldo = ""//parseFloat(prompt("Informe seu valor de investimento inicial: "))
  let opcao = ""

  do {
    opcao = prompt(
      "E muito bom ter voce no nosso time! " +
      "\n1. Depositar" + 
      "\n2. Tranferir" +
      "\n3. Saldo" +
      "\n4. Sair"
    )
    switch (opcao) {
      case "1":
        saldo += parseFloat(prompt("Informe o valor de deposito: "))
        break;
      case "2":
        saldo -= parseFloat(prompt("Informe o valor a ser removido:"))
        break;
      case "3":
        alert("Seu saldo é "+ saldo);
        break
      case "4":
        alert("Saindo")
        break  
      default:
        alert("Opcao invalida")
        break;
    }
    
  } while (opcao !== "4");

}

function abrirConta(){
  
}