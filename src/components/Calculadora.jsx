import React from "react"

function calculadora(props){
    
    const {op,x,y} = props

    function soma(){
        return x + y
    }

    function subtracao(){
        return x - y
    }

    function multiplicacao(){
        return x * y
    }

    function divisao(){
        return x / y
    }
  
    if (op === "SOMA")
        return (
            <div>
                A soma é {soma()}
            </div>
        )

    if (op === "SUB")
        return (
            <div>
                A subtração é {subtracao()}
            </div>
        )

    if (op === "MULTI")
        return (
            <div>
                A multiplação é {multiplicacao()}
            </div>
        )
  
    return (
        <div>
            A divisão é {divisao()}
        </div>
    )
}

export default calculadora