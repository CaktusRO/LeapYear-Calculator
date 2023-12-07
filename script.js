let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let raspuns = document.querySelector("#raspuns");
let numar;

submit.addEventListener("click", function verificaBisect() {
    numar = Number(input.value);
    if (numar % 4 === 0) {
        if (numar % 100 !== 0 || numar % 400 === 0) {
            raspuns.innerHTML = "Este an bisect!";
        } else {
            raspuns.innerHTML = "Nu este an bisect!";
        }
    } else {
        raspuns.innerHTML = "Nu este an bisect!";
    }
})