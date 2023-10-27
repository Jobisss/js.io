function calcular(){
    let escala1 = document.getElementById("select1")
    console.log(escala1.value)
    let escala2 = document.getElementById("select2")
    console.log(escala2)
    console.log(escala2.value)
    let numero = parseInt(document.getElementById("number").value)

    switch(escala1.value){
        case "celcius":
            switch(escala2.value){
                case "celcius":
                    console.log(escala1.value, escala2.value)
                    document.getElementById("p").innerHTML = `Mesmo resultado`
                break;
                case "kelvin":
                    console.log("teste")
                    resultado = numero + 273
                    if(typeof(numero) == "number"){
                        console.log(`O resltado é ${resultado} Kelvin`)
                        document.getElementById("p").innerHTML = `Resultado é: ${resultado} Kelvin`
                    }else{
                        console.log("não é um numero")
                    }
                break;
                case "fahrenheit":
                    resultado = (numero * (9/5) + 35)
                    if(typeof(numero) == "number"){
                        console.log(`O resltado é ${resultado} Fahrenheit`)
                        document.getElementById("p").innerHTML = `Resultado é: ${resultado} Fahrenheit`

                    }else{
                        console.log("não é um numero")
                    }
                break;
                case "jobisnos":
                    resultado = numero*2 - 100
                    if(typeof(numero) == "number"){
                        console.log(`O resltado é ${resultado} Jobisnos`)
                        document.getElementById("p").innerHTML = `Resultado é: ${resultado} Jobisnos`

                    }else{
                        console.log("não é um numero")
                    }
                break;
                default: 
                console.log("erro")
                break;
            }    
        break;
        case "kelvin":
            switch(escala2.value){
                case "kelvin":
                    document.getElementById("p").innerHTML = `Mesma medida.`    
                break;
                case "celcius":
                    resultado = numero - 273
                    console.log(numero)
                    if(isNaN(numero) === true){
                        console.log("não é um numero")
                    }else{
                        document.getElementById("p").innerHTML = `Resultado : ${resultado} Celcius`
                    }
                break;
                case "fahrenheit":
                    resultado = (((numero - 273.15) * 9/5) + 32)
                    resultado = Math.round(resultado)
                    if(isNaN(resultado) === true){
                        console.log("não é um numero")
                    }else{
                        document.getElementById("p").innerHTML = `Resultado : ${resultado} Fahrenheit`
                    }   
                break;
                case "jobisnos":
                    resultado = numero*22 - 100
                    if(isNaN(numero) === true){
                        console.log("não é um numero")
                    }else{
                        document.getElementById("p").innerHTML = `Resultado : ${resultado} jobisnos`
                    } 
                break;
            }
        break;
        case "fahrenheit":
            switch(escala2.value){
                case "fahrenheit":
                    document.getElementById("p").innerHTML = `Mesma medida.`    
                break;
                case "celcius":
                    resultado = (numero - 32) / 1.8
                    console.log(numero)
                    if(isNaN(numero) === true){
                        document.getElementById("p").innerHTML = `Não é número.`
                    }else{
                        document.getElementById("p").innerHTML = `Resultado : ${resultado} Celcius`
                    }
                break;
                case "kelvin":
                    resultado = (numero-32)*5/9  + 273.15
                    resultado = Math.round(resultado)
                    if(isNaN(resultado) === true){
                        console.log("não é um numero")
                    }else{
                        document.getElementById("p").innerHTML = `Resultado : ${resultado} Kelvin`
                    }   
                break;
                case "jobisnos":
                    resultado = numero*9.45 - 1500
                    resultado = Math.round(resultado)
                    if(isNaN(numero) === true){
                        console.log("não é um numero")
                    }else{
                        document.getElementById("p").innerHTML = `Resultado : ${resultado} jobisnos`
                    } 
                break;
            }
        break;
        case "jobisnos":
            switch(escala2.value){
                case "fahrenheit":
                    resultado = numero*12.435 - 150
                    resultado = Math.round(resultado)
                    if(isNaN(numero) === true){
                        console.log("não é um numero")
                    }else{
                        document.getElementById("p").innerHTML = `Resultado : ${resultado} Fahrenheit`
                    }  
                break;
                case "celcius":
                    resultado = (numero - 312) / 2.8
                    resultado = Math.round(resultado)
                    if(isNaN(numero) === true){
                        document.getElementById("p").innerHTML = `Não é número.`
                    }else{
                        document.getElementById("p").innerHTML = `Resultado : ${resultado} Celcius`
                    }
                break;
                case "kelvin":
                    resultado = (numero-65)/2.1  + 273.15
                    resultado = Math.round(resultado)
                    if(isNaN(resultado) === true){
                        console.log("não é um numero")
                    }else{
                        document.getElementById("p").innerHTML = `Resultado : ${resultado} Kelvin`
                    }   
                break;
                case "jobisnos":
                    document.getElementById("p").innerHTML = `Mesma medida.`
                break;
            }
        break;
        default:
            console.log("não esta tanto certo")
        break
    }
}