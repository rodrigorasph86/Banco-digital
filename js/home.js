function entrar(){

   let saldo = parseFloat(prompt("Login efetuado com SUCESSO!"+
   "\n\nPara a ativacao da sua conta  precimaos de um deposito inicial." +
   "\nQual o valor do seu ivestimento inicial?"))

   let opcao = ""

  
   do {
    opcao = prompt(
      "Parabéns, sua conta foi liberada! Escolha uma das opcoes! \n" +
      "\n1. Depositar" + 
      "\n2. Tranferir" +
      "\n3. Saldo" +
      "\n4. Sair"
    )
    switch (opcao) {
      case "1":
           saldo += parseFloat(prompt("Informe o valor a ser depositado"))
           break;
      case "2":
        valorTranferencia = parseFloat(prompt("Informe o valor a ser Transeferido:"))
        if(valorTranferencia < saldo){
         saldo =  saldo - valorTranferencia
        }else{
          alert("Seu saldo é inferior ao solicitado\n " + "No momento você tem disponível: " + saldo)
        }
          
        break;
      case "3":
        alert("Seu saldo é "+ saldo);
        break
      case "4":
        alert("Saindo")
        break  
      default:/*  */
         alert("Opcao invalida")
        break;
    }
    
  } while (opcao !== "4"); 

  
 }

 function abrirConta(){
  
  const cliente = prompt("-- ABRA SUA CONTA --\nFicamos muito felizes no seu intesse! Siga as instrucoes." +
 "\n\nDigite seu nome completo:")
  const dia = parseInt(prompt("Digite qual o dia do seu aniversario: "))
  const mes = parseInt(prompt("Digite o mês do seu aniversário: "))
  const  ano  = parseInt(prompt("Agora digite o ano do seu nascimento: "))
  let idade = 2023 - ano
  if (idade > 18){
    alert("Legal, " + cliente + "!" + "\nVocê ja tem idade para abrir uma conta em nosso banco! " + "\n" +
    "\nSiga os proximos passos...")
  }else{
    alert("Que pena! Você ainda nao tem idade suciente para abrir a conta")
  }
  const cpf = parseFloat(prompt("Digite seu CPF: "))
  const senha = parseInt(prompt("Digite uma senha com: 6 digitos XXXXXX"))


  alert(cliente + " seu CPF: " + cpf + " foi APROVADO! Acesse sua conta com CPF e SENHA!")
}

