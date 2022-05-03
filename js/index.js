const iniciarCalculo = document.querySelector('.iniciarCalculo');
const calculoIMC = document.querySelector('.calculoIMC');
const resultadoIMC = document.querySelector('.resultadoIMC');

function go(currentStep, nextStep){
   
    let dispNone, dispBlock;
    
    if(currentStep == 1){
        dispNone = iniciarCalculo;
    }else if(currentStep == 2){
        dispNone = calculoIMC;
    }else{
        dispNone = resultadoIMC;
    }

    dispNone.style.display = 'none';

    if(nextStep == 1){
        dispBlock = iniciarCalculo;
    }else if(nextStep == 2){
        dispBlock = calculoIMC;
    }else{
        dispBlock = resultadoIMC;
    }

    dispBlock.style.display = 'block';
}


function validacaoCalculo(){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    peso.style.border = 'none';
    altura.style.border = 'none';

    if(!peso.value || !altura.value){
        if(!peso.value && !altura.value){
            // console.log('Peso e Altura não informados!');
            peso.style.border = '2px solid red';
            altura.style.border = '2px solid red';
        }else if(!peso.value){
            // console.log('Peso não informado!');
            peso.style.border = '2px solid red';
        }else{
        //    console.log('Altura não informada!'); 
           altura.style.border = '2px solid red';
        } 
    }else{
        // console.log('Válido! Calcular o IMC');
        let imc = peso.value / (altura.value * altura.value);
        console.log(imc);

        const resultado = document.getElementById('resultado');
        const IMC = document.getElementById('IMC');

        if(imc < 18.5){
            console.log('Classificação: Magreza | Obesidade (Grau): 0');
            resultado.innerHTML = 'Classificação: Magreza | Obesidade (Grau): 0';
            resultado.style.color = 'yellow';
            IMC.innerHTML = imc;
        }else if(imc >= 18.5 && imc < 25){
            console.log('Classificação: Normal | Obesidade (Grau): 0');
            resultado.innerHTML = 'Classificação: Normal | Obesidade (Grau): 0';
            resultado.style.color = 'green';
            IMC.innerHTML = imc;
        }else if(imc >= 25 && imc < 30){
            console.log('Classificação: Sobrepeso | Obesidade (Grau): I');
            resultado.innerHTML = 'Classificação: Sobrepeso | Obesidade (Grau): I';
            resultado.style.color = 'yellow';
            IMC.innerHTML = imc;
        }else if(imc >= 30 && imc < 40){
            console.log('Classificação: Obesidade| Obesidade (Grau): II');
            resultado.innerHTML = 'Classificação: Obesidade| Obesidade (Grau): II';
            resultado.style.color = 'red';
            IMC.innerHTML = imc;
        }else{
            console.log('Classificação: Obesidade Grave | Obesidade (Grau): III');
            resultado.innerHTML = 'Classificação: Obesidade Grave | Obesidade (Grau): III';
            resultado.style.color = 'red';
            IMC.innerHTML = imc;
        }
        go(2,3);

    }
}