import React from "react";

const IMC = ({ peso, altura }) => {

    const imc = calcularIMC()

    function calcularIMC() {
        return peso / (altura * altura)
    }

    function situacao() {
        if (imc < 18) {
            return (
                <div>
                    <h1>Abaixo do peso!</h1>
                </div>)
        }
      
        if (imc >= 18 && imc < 25) {
            return (
                <div>
                    <h1>Peso Normal!</h1>
                </div>)
        }
      
       if (imc >= 25 && imc < 30) {
            return (
                <div>
                    <h1>Excesso de Peso!</h1>
                </div>)
        }
      
      if (imc >= 30 && imc < 35) {
            return (
                <div>
                    <h1>Obesidade classe 1!</h1>
                </div>)
        }
      
      if (imc >= 35 && imc < 40) {
            return (
                <div>
                    <h1>Obesidade classe 2!</h1>
                </div>)
        }
      
        return (
            <div>
                    <h1>Obesidade classe 3!</h1>
            </div>
        )
    }

    //retornar o jsx com o valor do imc e situação
    return (
        <div>
            O seu IMC é {imc.toFixed(2)}
            <br />
            A sua situação é: {situacao()}
        </div>
    )
}

export default IMC