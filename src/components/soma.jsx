

function Somar(){
    

    const valor1 = parseInt(document.getElementById('numero1').value)
    const valor2 = parseInt(document.getElementById('numero2').value) 
    const soma = valor1 + valor2

    console.log("O valor da soma é:",soma)
    document.getElementById('resultado').innerHTML = soma
    document.getElementById('numero1').value=''
    document.getElementById('numero2').value=''
    

    return 
    
}




export default Somar