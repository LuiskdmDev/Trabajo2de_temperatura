
console.log("Programa para calcular con temperatura")

const gradosCelcius = parseInt(prompt("Ingrese una temperatura para poder estimarla en otra unidad de medida"))


function calculoF(grados){
  let resultadosF = (grados * 9/5) + 32
  return resultadosF
}

function calculoK (grados){
  let resultadoK = grados + 273.15
  return resultadoK
}

let finalF = calculoF(gradosCelcius)
let finalK = calculoK(gradosCelcius)

let unidad = prompt("Ingrese la letra de la unidad que desea convertir:\n" + 
  "a) Grados Farenheit\n" + 
  "b) Grados Kelvin\n" + 
  "c) En ambas\n").toLowerCase()

if (unidad === "a"){
  console.log("Tu temperatura en grados Farenheit es" + finalF)
  alert("Tu temperatura en grados Farenheit es" + finalF)
} else if (unidad === "b"){
  console.log("Tu temperatura en grados Farenheit es" + finalK)
  alert("Tu temperatura en grados Farenheit es" + finalK)
} else if (unidad ==="c"){
  console.log("Tu temperatura en grados Kelvin es" + finalK)
  alert("Tu temperatura en grados Farenheit es: " + finalF + "y en grados Kelvin es: " + finalK)
}else {
  alert("No pusiste una alternativa valida")
}
