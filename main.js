const fom = document.querySelector("form")

const name1 = document.querySelector("input[name=name1]")
const name2 = document.querySelector("input[name=name2]")
const age = document.querySelector("input[name=age]")
const email = document.querySelector("input[name=email]")
const PESEL = document.querySelector("input[name=PESEL]")
const sex = document.querySelector("select[name=sex]")
const phone = document.querySelector("input[name=phone]")
const class0 = document.querySelector("input[name=class]")
const title = document.querySelector("input[name=title]")
const publisher = document.querySelector("input[name=publisher]")
const ISBN = document.querySelector("input[name=ISBN]")
const reg = document.querySelector("input[name=reg]")
const others = document.querySelector("textarea[name=others]")

const comms = document.querySelector("#comms");

let baza = []


function isPESEL(PESEL)
{
    if(PESEL.length != 11)
        return false;

    let wagi = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let cyfry = PESEL.split('');
    console.log(cyfry)
    let suma = 0;
    let iloczyn = 0;
    for(let i = 0; i < wagi.length; i++)
    {
         iloczyn = String((wagi[i] * cyfry[i]));
         iloczyn = parseInt(iloczyn[iloczyn.length - 1]);
         suma += parseInt(iloczyn);
    }
    suma = String(suma)
    let kontrolna = (10 - parseInt(suma[suma.length - 1]));


    if(parseInt(kontrolna) != parseInt(PESEL[10]))
        return false;

    return true;
}

fom.addEventListener("submit", (e)=>{
    comms.style.color = "red";
    comms.innerHTML = "";
    e.preventDefault();
    let nm1 = name1.value;
    let nm2 = name2.value;
    let ag = age.value;
    let mail = email.value;
    let PES = PESEL.value;
    let sexo = sex.value;
    let tel = phone.value;
    let cla = class0.value;
    let tytle = title.value;
    let pub = publisher.value;
    let id = ISBN.value;
    let regi = reg.value;
    let othe = others.value;

    let err = false;

    if((isNaN(ag) || ag < 1 || ag.length > 2) && ag != "")
    {
        comms.innerHTML += "Niew??a??ciwa warto???? w polu wiek.<br>";
        err = true;
    }

    if(tel.length != 9)
    {
        comms.innerHTML += "Numer telefonu ma niew??a??ciw?? d??ugo????.<br>";
        err = true;
    }

    if(!isPESEL(PES))
    {
        comms.innerHTML += "Z??y PESEL<br>";
        err = true;
    }

    if(err)
        return 0;

    const data = {
        firstName: nm1,
        lastName: nm2,
        age : ag,
        email: mail,
        PESEL: PES,
        sex: sexo,
        phone: tel,
        class: cla,
        title: tytle,
        publisher: pub,
        ISBN: id,
        reg: regi,
        oth: othe
    }

    baza.push(data);
    comms.style.color = "green";
    comms.innerHTML = "Wys??ano formularz! :)";
})