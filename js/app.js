const form = document.querySelector("form");
let array = Array.from(form)
//console.log(array); Obtenemos los elementos de form como array


form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)===true) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
    alert('Los datos son inválidos');
  }
});

/*getting value*/


function validateCardDetails(element) {
  //escribe tu código aqui

 
   const valueName = document.getElementById('name').value;
   const valueCard = document.getElementById('cn').value;
   const valueExp = document.getElementById('exp').value;
   const valueCvv = document.getElementById('cvv').value;
    
    console.log(valueCard);
    console.log(valueExp);
    console.log(valueCvv);

  let total = array.map((getArr) => {
    //arrojando nuevo array con los datos del input
    return getArr.value;
  });
 console.log(total);
}  
  /*var valueCard = total.filter()*/

  //validando Fecha de expedición


  /*
function checkLuhn(input) {
  var sum = 0;
  var numdigits = input.length;
  var parity = numdigits % 2;
  for(var i=0; i < numdigits; i++) {
      var digit = parseInt(input.charAt(i))
      if(i % 2 == parity) digit *= 2;
      if(digit > 9) digit -= 9;
      sum += digit;
  }
  return (sum % 10) == 0;
};
function detectCard(input) {
  var typeTest = 'u',
      ltest1 = 16,
      ltest2 = 16;
  if(/^4/.test(input)){
      typeTest = 'v';
      ltest1 = 13;
  } else if (/^5[1-5]/.test(input)){
      typeTest = 'm';
  } else if (/^3[4-7]/.test(input)){
      typeTest = 'a';
      ltest1 = 15;
 ltest2 = 15;
} else if(/^6(011|4[4-9]|5)/.test(input)){
      typeTest = 'd';
  }
  return [typeTest,ltest1,ltest2];
}


$('input.cc').keyup(function(){
  var val = this.value,
   val = val.replace(/[^0-9]/g, ''),
      detected = detectCard(val),
      errorClass = '',
     luhnCheck = checkLuhn(val),
      valueCheck = (val.length == detected[1] || val.length == detected[2]);
console.log(valueCheck);
  if(luhnCheck && valueCheck) {
      errorClass = 'verified';
  } else if(valueCheck || val.length > detected[2]) {
      errorClass = 'error';
}

  $(this).attr('class', 'cc ' + detected[0] + ' ' + errorClass);
});

*/