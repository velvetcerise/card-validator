const form = document.querySelector("form");

const name = element => {
    let Nval = element.value;
    if(Nval.length <= 30){
        element.className = "validos";
        return true;
    }else{
        element.className = "invalido";  
    }
    console.log("name");
}

//Caducidad tarjeta
const cvv = element =>{
    let cvvVal = parseInt(element.value);
    if(cvvVal > 100){
        element.className = "validos";
        return true;
    }else{
        element.className = "invalido";
        return false
    }
}

//Validación año
const year = element =>{
    let yearVal = parseInt(element.value);
    if(yearVal >= 18 && yearVal <= 25){
        element.className = "validos";
        return true;
    }else{
        element.className = "invalido";
        return false
    }
}

//Validación mes
const month= element =>{
    let monthVal = parseInt(element.value);
    if(monthVal <= 12){
        element.className = "valido";
        return true;
    }else{
        element.className = "invalido";
        return false
    }
}


//Validación algoritmo lunh
const lunh = element => {
    let total = 0;
    let cardNumberVal = Array.from(element.value);
    let numberArray = cardNumberVal.map(num => { return Number(num); }).reverse();
    //iterar para obtener mis numeros pares
    numberArray.forEach((first, index) =>{
      if (index % 2 != 0) { 
        let even = first * 2;
        if (even > 9) { 
            even = even.toString();
            let evenFirst = Number(even[0]);
            let evenTwo = Number(even[1]);
            let sumEvens =  evenFirst + evenTwo; //Agregarlos a la suma
            total = total + sumEvens; 
            } else {
                total = total + even;
                }
            } else { 
        total = total + first;
        }
    });


  if (total % 10 === 0) { 
    element.className = 'valido'
    return true;
    } else {
    element.className = 'invalido'
    }
  }



const validateCardDetails = element => {

    let cardArray = Array.from(form);
    //escribe tu código aqui
  //Obteniendo inputs por separado
    let cardNumb = cardArray[0];
    let cardMonth = cardArray[1];
    let cardExpYear = cardArray[2];
    let cardCvv = cardArray[3];
    let cardName = cardArray[4];

   if(lunh(cardNumb) && name(cardName) && cvv(cardCvv) && month(cardMonth)  && year(cardExpYear)){
       return true;
        }else{
        return false;
        } 
  }


form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válidados");
  } else {
    console.log("datos inválidos");
  }
});

