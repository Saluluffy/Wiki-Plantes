
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
            let vase = document.createElement("img");
            let vaseParent = document.getElementById("content-02");
            vase.id = "content-vase";
            vase.src = "img/vase__02.svg"
            vaseParent.appendChild(vase);
        }, 1000
    );
};

function fonction_03() {
    setTimeout(
        function () {
        let step01 = document.createElement("p");
        let stepParent = document.getElementById("content-01");
        step01.innerText = "Cliquez sur l'arrosoir pour hydrater le terreau";
        step01.id = "content-step-01";
        stepParent.appendChild(step01);

        let step02 = document.createElement("p");
        step02.innerText = "Arroser le terreau va permettre à la plante de se développer en profondeur. De plus, elle sera moins sensible aux manques d'eau passagers.";
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
        window.location = 'page4.html'
    }
})