const number = Number(prompt("Type a number: "));
const titleNumber = document.getElementById("title-number");
const text = document.getElementById("text");

titleNumber.innerHTML = number;
text.innerHTML = `<p>Seu numero + 2 eh: ${number + 2}</p>`;
text.innerHTML += `<p>Raiz quadrada: ${number ** 2}</p>`;
text.innerHTML += `<p> ${number} é inteiro: ${Number.isInteger(number)}</p>`;
text.innerHTML += `<p> Eh NaN: ${Number.isNaN(number)}</p>`;
text.innerHTML += `<p> Arredondando para baixo: ${Math.floor(number)} </p>`;
text.innerHTML += `<p> Arredondando para cima: ${Math.ceil(number)} </p>`;
text.innerHTML += `<p> Com duas casas decimais: ${number.toFixed(2)} </p>`;