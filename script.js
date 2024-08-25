console.log('*')

// Ex. 1 (temperatura)
let temperature = 15;
if(temperature < 0){
  console.warn('Afară e îngheț !');
}
  else if (temperature >= 0 && temperature <=10){
    console.warn('Afară este frig.');
  }
  else if(temperature >= 11 && temperature <= 25){
    console.log('Afară temperatura este moderată.');
  }
  else{
    console.log('Afară este cald.');
}
console.log('*');

//Ex. Zile sapt.
let day = 3;
if (day ==1){
  console.log('Luni');
}
  else if (day ==2){
    console.log('Marți');
  }
  else if (day ==3){
    console.log('Miercuri');
  }
  else if (day ==4){
    console.log('Joi');
  }
  else if (day ==5){
    console.log('Vineri');
  }
  else if (day ==6){
    console.log('Sîmbătă');
  }
  else if (day ==7){
    console.log('Dumincă');
  }
  else if (day<=0){
    console.error('Ați indrodus număr negativ.');
  }
  else{
    console.warn('Saptamina este formata doar din 7 zile');
  }
  console.log('*');

//Ex.3 Par-impar
let number = 8;
if(number%2 == 0){
  console.log('Numarul este par.');
}
  else{
    console.log('Numarul este impar.');
  }
console.log('*');

//Ex.4 Reducere

let purchaseAmount = 90, 
reducere =0.1,
impozit= 0.05,
impozitCaseStandart=purchaseAmount*impozit,
caseReducere=purchaseAmount-(purchaseAmount*reducere),
impozitCaseReduceresum=caseReducere*impozit;

if(purchaseAmount>=100){
  console.log('Total spre plată: '+ (caseReducere+impozitCaseReduceresum));
}
  else{
    console.log('Total spre plată: '+ (purchaseAmount+impozitCaseStandart));
  }
console.log('*');

//Ex.5 Password
let password = "OrangeDigital";

let literaMare = false;
let literaMica = false;
let cifra = false;

for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= 'A' && char <= 'Z') {
        literaMare = true;
    } else if (char >= 'a' && char <= 'z') {
        literaMica = true;
    } else if (char >= '0' && char <= '9') {
        cifra = true;
    }
}
if (password.length >= 12 && literaMare && literaMica && cifra) {
    console.log("Parolă foarte sigură");
} else if (password.length >= 8 && literaMare && literaMica) {
    console.log("Parolă sigură");
} else if (password.length >= 6 && literaMare || literaMica) {
    console.log("Parolă slabă");
} else {
    console.warn("Parolă nesigură");
}
console.log('*');

//Ex.6 Nr Prim/Compus
let numar = 5332;
let divizor = 2;  

let estePrim = (numar > 1) && 
                  (numar === divizor || 
                    (numar % divizor !== 0 && 
                      (divizor * divizor > numar || numar % (divizor + 1) !== 0)
                    )
                  );
if(estePrim=false){
  console.log(`${numar} este un număr prim.`)
}
else{
  console.warn(`${numar} nu este număr prim.`)
}
console.log('*');

//Ex.7 Triunghi
let laturaA = 3, laturaB=4, laturaC=5;
if(laturaA + laturaB > laturaC && 
    laturaA + laturaC > laturaB && 
    laturaB + laturaC > laturaA){
  console.log('Cerințele corespund pentru a forma un triunghi.')
}
else{
  console.warn('Cerințele nu sunt corespunzatoare unui triunghi')
}
if(
  laturaA ** 2 + laturaB ** 2 == laturaC ** 2 ||
  laturaA ** 2 + laturaC ** 2 == laturaB ** 2 ||
  laturaB ** 2 + laturaC ** 2 == laturaA ** 2){
  console.log('Triunghilui este dreptunghic.(Conf. teoremei lui Pitagora)');
} 
else {
  console.warn('Este un triunghi neregulat.');
}

