let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


const generadorAleatorio = (max) => {

    return Math.floor(Math.random() * max);

}

let generadorWho = generadorAleatorio(who.length);
let generadorAction = generadorAleatorio(action.length);
let generadorWhat = generadorAleatorio(what.length);
let generadorWhen = generadorAleatorio(when.length);

let excusaAleatoria = who[generadorWho] + " " + action[generadorAction] + " " + what[generadorWhat] + " " + when[generadorWhen];


document.getElementById("excusa").textContent = excusaAleatoria;

