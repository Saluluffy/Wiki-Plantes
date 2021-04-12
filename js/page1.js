
/* Evénement 1 */

let event_01 = document.getElementById("c-btn");
let content_div01 = document.getElementById("content-02");

event_01.addEventListener("click", function () {
    content_div01.classList.add("content-delete");
    fonction_01();
    fonction_02();
    fonction_03();
});

/* Fonctions relatives à l'événement 1 */

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
        step01.innerText = "Cliquez sur l'arrosoir pour hydrater la plante";
        step01.id = "content-step-01";
        stepParent.appendChild(step01);

        let step02 = document.createElement("p");
        step02.innerText = "Dans l'idéal, il faut arroser la plante quelques heures avant de la rempoter. De cette façon, même si elle perd une racine ou deux au cours du procédé, elle restera en bonne santé.";
        step02.id = "content-step-02";
        stepParent.appendChild(step02);

        let arrosoir = document.getElementById('img-03');
        arrosoir.style.cursor = "pointer";
        }, 1000
    );
};

/* Evénement 2 */

let event_02 = document.getElementById("img-03");

event_02.addEventListener("click", function () {
    event_02.classList.add("content-delete");
    fonction_04();
    fonction_05();
    fonction_06();
});

/* Fonctions relatives à l'événement 2 */

function fonction_04() {
    setTimeout(
        function () {
            event_02.style.visibility = "hidden";
        }, 900
    );
};

function fonction_05() {
    setTimeout(
        function () {
            let arrosoir = document.createElement("img");
            let arrosoirParent = document.getElementById("content-03");
            arrosoir.id = "content-arrosoir";
            arrosoir.src = "img/illustration__02.svg"
            arrosoirParent.appendChild(arrosoir);
        }, 1000
    );
};

function fonction_06() {
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
        }, 3000
    );
}

/* Evénement 3 */

document.addEventListener('click', function (e) {
    if(e.target && e.target.id === "n-btn") {
        window.location = 'page2.html'
    }
})
