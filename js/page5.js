
/* Evénement 1 */

let event_01 = document.getElementById("c-btn");
let content_div01 = document.getElementById("content-02");

event_01.addEventListener("click", function () {
    content_div01.classList.add("content-delete");
    fonction_01();
    fonction_02();
    fonction_03();
});

function fonction_01() {
    setTimeout(
        function () {
            content_div01.innerHTML = "";
        }, 900
    );
};

function fonction_02() {
    setTimeout(
        function () {
            let pot = document.createElement("img");
            let potParent = document.getElementById("content-02");
            pot.id = "content-pot";
            pot.src = "img/pot__01.svg"
            potParent.appendChild(pot);
        }, 1000
    );
};

function fonction_03() {
    setTimeout(
        function () {
        let step01 = document.createElement("p");
        let stepParent = document.getElementById("content-01");
        step01.innerText = "Cliquez sur le pot pour dépotez la plante";
        step01.id = "content-step-01";
        stepParent.appendChild(step01);

        let step02 = document.createElement("p");
        step02.innerText = "Dépoter la plante est une étape très délicate, ses racines ne doivent pas se casser. Pour réussir au mieux, aérez la motte de terre et démêlez les racines en y passant délicatement vos doigts.";
        step02.id = "content-step-02";
        stepParent.appendChild(step02);

        let pot = document.getElementById('content-pot');
        pot.style.cursor = "pointer";
        }, 1000
    );
};

/* Evénement 2 */

let pot = document.getElementById("content-pot")
document.addEventListener('click', function (e) {
    if(e.target && e.target.id === "content-pot") {
        fonction_04();
    }
})

/* Fonctions liées à l'événement 2 */

function fonction_04() {
    let pot = document.getElementById("content-pot");
    pot.src = "img/plante.svg"
    setTimeout(
        function () {
            let step01 = document.getElementById("content-step-01");
            let check01 = document.createElement("span");
            check01.id = "check-01";
            check01 = document.createTextNode(" ✔");
            step01.appendChild(check01);

            let btnNext = document.createElement("button");
            let btnParent = document.getElementById("content-01");
            btnNext.id = "n-btn";
            btnNext.textContent += "Passez à l'étape suivante";
            btnParent.appendChild(btnNext);
        }, 1000
    );
};

document.addEventListener('click', function (e) {
    if(e.target && e.target.id === "n-btn") {
        window.location = 'page6.html'
    }
})