// Escriba un algoritmo que tome del usuario un número, el cual represente el
// número de segundos que un objeto se ha mantenido en caida libre en el
// planeta tierra en el vacio perfecto. El algoritmo debe devolver la
// distancia recorrida en metros de dicho objeto

const { read, readNumber, print } = require('../helpers')

Caidalibre = (tiempo) => {
  return tiempo * 9.8
}

const main = async () => {
  print('Problema aún no resuelto')
}

module.exports = main
