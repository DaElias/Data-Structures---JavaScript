// * var, let, const
var nombre = "David";
let activo = false;
const edad = 22;
pais = undefined;

{
  let activo = true;
  var nombre = "Julian";
  console.log("    ",activo);
}

console.log(activo);
console.log(nombre);

// * Veracidad
/*
 * 1 : true
 * 0 : false
 * "hola" : true
 * "" : false
 * null : false
 *  undefined : false
 *  undefined : false
 *  NaN : false
 *  {name: "Juan" } : true
 *  true : true
 *  false : false
 *  !false : true....xD
 */

/**
 * *  1 == "1" : true
 * *  1 === "1" : false
 * *
 * *
 */
if (NaN) {
  console.log(true);
} else {
  console.log(false);
}
