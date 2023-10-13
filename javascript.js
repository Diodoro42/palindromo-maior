let inputPrimeiroNum = document.querySelector("#inputNum1-id")
let inputSegundoNum = document.querySelector("#inputNum2-id")
let primeiroNumUsuario = parseFloat(inputPrimeiroNum.value)
let segundoNumUsuario = inputSegundoNum.value
let btnVerificar = document.querySelector("#btn-verificar")

function verificarPalindromoPrimeiro(){

    for(i = 0; i < primeiroNumUsuario.length; i++){
        if(primeiroNumUsuario[i] !== primeiroNumUsuario[primeiroNumUsuario.length - 1 - i]){
            return false
        } else {
            return true
        }

    }
}

function verificarPalindromoSegundo(){

    for(i = 0; i < segundoNumUsuario.length; i++){
        if(segundoNumUsuario[i] !== segundoNumUsuario[segundoNumUsuario.length - 1 - i]){
            return false
        } else {
            return true
        }

    } 
}

inputPrimeiroNum.addEventListener("keyup", function(event){
    
    if(event.keyCode === 13){

            primeiroNumUsuario = inputPrimeiroNum.value

            if(primeiroNumUsuario.length != 4){
                alert("Corrija os dados, você não digitou um numero palíndromo de 4 digitos")
                
            } else{
                verificarPalindromoPrimeiro()
            if(verificarPalindromoPrimeiro() === false){
                alert("Corrija os dados, o valor digitado não é um número palíndromo")
                
            } else {
                alert("Valor salvo, digite agora o próximo número")
                }
            }
    }
        
})

inputSegundoNum.addEventListener("keyup", function(event){
    
    if(event.keyCode === 13){

        segundoNumUsuario = inputSegundoNum.value

        if(segundoNumUsuario.length != 4){
            alert('Corrija os dados, você não digitou um numero palíndromo de 4 digitos')
        } else {
            
            verificarPalindromoSegundo()
            if(verificarPalindromoSegundo() === false){
                alert("Corrija os dados, o valor digitado não é um número palíndromo.")
                
            } else {
                alert("Valor salvo, agora clique no botão para verificar qual dos dois é maior.")
            }
        }

        
    }
})

btnVerificar.addEventListener('click',function(){

    console.log(primeiroNumUsuario)
    console.log(segundoNumUsuario)

    if(primeiroNumUsuario == 0 || segundoNumUsuario == 0){
        alert("Digite primeiro os 2 número palíndromos nas duas caixas de texto, atente-se para apertar a tecla enter após ter digitado")
    }

    if(primeiroNumUsuario == segundoNumUsuario){
        alert("Não existe número maior, os dois números são iguais.")
    }

    if(primeiroNumUsuario > segundoNumUsuario){
        alert(`O primeiro numero digitado (${primeiroNumUsuario}), é maior!`)
    }

    if(segundoNumUsuario > primeiroNumUsuario){
        alert(`O segundo número digitado (${segundoNumUsuario}), é maior!`)
    }
    inputPrimeiroNum.value = ''
    inputSegundoNum.value = ''
    
})

