//Variables
let genero, peso, altura, calculoImc, mensaje, pesoAnterior, pesoActual

const resIMC = document.getElementById("p1")
const compImc = document.getElementById("p2")
const contIMC = document.getElementById("containerResultadosIMC")
const titulo = document.getElementById("titleResultados")
const buttonImc = document.getElementById("imc")
const formImc = document.getElementById("formCalculadoraIMC")
const select = document.getElementById("generos")
const inputPeso = document.getElementById("inputPeso")
const inputAltura = document.getElementById("inputAltura")
const contFormIMC = document.getElementById("containerFormIMC")
const radiosImc = document.getElementsByName("genero")
const compare = document.getElementById("compararPeso")

//Eventos
buttonImc.addEventListener('click', () => { // Al hacer click en el botón despliega el formulario
    document.getElementById("formCalculadoraIMC").reset()
    contFormIMC.style.display = "block"
    contTMB.style.display = "none"
    contFormTMB.style.display = "none"
    contAlimentos.style.display = "none"
    contReg.style.display = "none"
})

inputPeso.addEventListener('input', () => { // Ingresa el peso y se guarda en la propiedad
    peso = inputPeso.value
});

inputAltura.addEventListener('input', () => { // Ingresa la altura y se guarda en la propiedad
    altura = inputAltura.value
});

formImc.addEventListener('submit', (e) => { // Al hacer click en el botón de submit muestra los resultados
    e.preventDefault()
    compImc.style.display = "none"

    for (let radio of radiosImc) {
        if (radio.checked) {
            genero = radio.value
        }
    }
    resultadoImc(genero, peso, altura)
})

compare.addEventListener("click", () => { // Al hacer click en Comparar con último peso muestra los valores antiguo y actual
    compImc.innerHTML = ""
    compImc.innerHTML += `<p> Último peso registrado: <b> ${pesoAnterior} </b> </p>
                           <p> Peso resgistrado hoy: <b> ${peso} </b> </p>`
    comparePeso()
})

//Funciones
//Calcula el valor del IMC
const calcularIMC = (peso, altura) => (peso / Math.pow(altura / 100, 2))

//Devuelve la interpretación de IMC
function resultadoImc(genero, peso, altura) {
    contIMC.style.display = "block"
    titulo.style.display = "block"
    contReg.style.display = "none"

    switch (genero) {
        case "Hombre":
            calculoImc = calcularIMC(peso, altura)
            interpretacionImcH(calculoImc)
            break

        case "Mujer":
            calculoImc = calcularIMC(peso, altura)
            interpretacionImcM(calculoImc)
            break
    }
    guardarPeso()
    document.getElementById("formCalculadoraIMC").reset()
}

//Interpretación de IMC para hombres
function interpretacionImcH(calculoImc) {

    if (calculoImc <= 20) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="low"> 
                                        <i class="fa-solid fa-face-grimace"></i><br>
                                        <b> Bajo peso </b> 
                                    </p>
                            </div>`
    }
    else if (20 < calculoImc && calculoImc <= 25) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="normal"> 
                                        <i class="fa-solid fa-face-laugh-wink"></i><br>
                                        <b> Peso normal </b> 
                                    </p>
                            </div>`    }
    else if (25 < calculoImc && calculoImc <= 30) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="low-alert"> 
                                        <i class="fa-solid fa-face-grimace"></i><br>
                                        <b> Obesidad leve </b> 
                                    </p>
                            </div>`
    }
    else if (30 < calculoImc && calculoImc <= 40) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="mid-alert"> 
                                        <i class="fa-solid fa-face-frown"></i><br>
                                        <b> Obesidad severa </b> 
                                    </p>
                            </div>`
    }
    else if (40 < calculoImc) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="alert"> 
                                        <i class="fa-solid fa-face-sad-tear"></i><br>
                                        <b> Obesidad muy severa </b> 
                                    </p>
                            </div>`
    }
}

//Interpretación de IMC para mujeres
function interpretacionImcM(calculoImc) {
    if (calculoImc <= 20) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="low"> 
                                        <i class="fa-solid fa-face-grimace"></i><br>
                                        <b> Bajo peso </b> 
                                    </p>
                            </div>`
    }
    else if (20 < calculoImc && calculoImc <= 24) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="normal"> 
                                        <i class="fa-solid fa-face-laugh-wink"></i><br>
                                        <b> Peso normal </b> 
                                    </p>
                            </div>`
    }
    else if (24 < calculoImc && calculoImc <= 29) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="low-alert"> 
                                        <i class="fa-solid fa-face-grimace"></i><br>
                                        <b> Obesidad leve </b> 
                                    </p>
                            </div>`
    }
    else if (29 < calculoImc && calculoImc <= 37) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="mid-alert"> 
                                        <i class="fa-solid fa-face-frown"></i><br>
                                        <b> Obesidad severa </b> 
                                    </p>
                            </div>`
    }
    else if (37 < calculoImc) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="alert"> 
                                        <i class="fa-solid fa-face-sad-tear"></i><br>
                                        <b> Obesidad muy severa </b> 
                                    </p>
                            </div>`
    }
}

//Guarda el último peso en el local storage
function guardarPeso() {
    if (localStorage.getItem("peso")) {
        pesoAnterior = localStorage.getItem("peso")
        localStorage.setItem("peso", peso)
    } else {
        localStorage.setItem("peso", peso)
    }
    pesoActual = localStorage.getItem("peso")
    pesoAnterior ?? (pesoAnterior = 0)
    pesoAnterior == 0 ? (compare.style.display = "none") : (compare.style.display = "block")
}

//Compara el valor del último peso con el actual
function comparePeso() {
    compImc.style.display = "block"
    if (pesoAnterior < pesoActual) {
        compImc.innerHTML += `  <div>
                                    <p> <i class="fa-solid fa-arrow-trend-up"></i> </p>
                                    <p> Aumentaste ${pesoActual - pesoAnterior} Kg</p>
                                 </div> `
    }
    else if (pesoAnterior > pesoActual) {
        compImc.innerHTML += `  <div>
                                    <p> <i class="fa-solid fa-arrow-trend-down"></i></p>
                                    <p> Bajaste ${pesoAnterior - pesoActual} Kg</p> 
                                </div>`
    }
    else {
        compImc.innerHTML += `  <div>
                                    <p><i class="fa-solid fa-scale-balanced"></i></p>
                                    <p> Mantuviste tu peso</p>
                                 </div>`
    }
}