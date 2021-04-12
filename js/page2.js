
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
            vase.src = "img/vase__01.svg"
            vaseParent.appendChild(vase);
        }, 1000
    );
};

function fonction_03() {
    setTimeout(
        function () {
        let step01 = document.createElement("p");
        let stepParent = document.getElementById("content-01");
        step01.innerText = "Cliquez sur la pelle pour la remplir de terreau";
        step01.id = "content-step-01";
        stepParent.appendChild(step01);

        let step02 = document.createElement("p");
        step02.innerHTML = "Le terrrau permet un bon développement du système racinaire, favorise un bon ancrage de la plante, limite l’asphyxie du sol et donc la pourriture des racines.";
        step02.id = "content-step-02";
        stepParent.appendChild(step02);

        let pelle = document.getElementById('img-02');
        pelle.style.cursor = "pointer";
        }, 1000
    );
};

/* Evénement 2 */

let event_02 = document.getElementById("img-02");
let bool = true;

event_02.addEventListener("click", function () {
    if (bool == true) {
        fonction_04();
        fonction_05();
        bool = false;
    } else {
        fonction_06();
        fonction_07();
    }
});

/* Fonctions relatives à l'événement 2 */

function fonction_04() {
    let pelle = document.getElementById('img-02');
    pelle.style.animation = "pelle 2s ease-in-out forwards";

    setTimeout(
        function () {
            let pelle_remplie = document.getElementById("img-02")
            pelle_remplie.id = "pelle-remplie";
            pelle_remplie.src = "img/pelle.svg"
        }, 2000
    );
}

function fonction_05() {
    setTimeout(
        function () {
            let step01 = document.getElementById("content-step-01");
            let check01 = document.createElement("span");
            check01.id = "check-01";
            check01 = document.createTextNode(" ✔");
            step01.appendChild(check01);
        }, 2000
    );
    setTimeout(
        function () {
            let step01 = document.getElementById("content-step-01")
            step01.style.animation = "delete 1s ease-in-out";
        }, 3000
    );
    setTimeout(
        function () {
            let step02 = document.getElementById("content-step-01")
            step02.innerText = "Cliquez sur la pelle pour la rapprocher du vase"
            step02.style.animation = "add 2s ease-in-out";
        }, 4000
    );
}

function fonction_06() {
    let pelle_remplie = document.getElementById("pelle-remplie")
    pelle_remplie.style.animation = "delete-pelle 1s ease-in-out forwards";
        setTimeout(
            function () {
                pelle_remplie.style.visibility = "hidden";
                pelle_remplie.src = "img/illustration__03.svg"
                pelle_remplie.style.animation = null;
                pelle_remplie.id = "img-02";
            }, 2000
        );
};

function fonction_07() {
    setTimeout(
        function () {
            let pelle = document.createElement("img");
            let pelleParent = document.getElementById("content-03");
            pelle.id = "content-pelle";
            pelle.style.cursor = "pointer";
            pelle.src = "img/pelle.svg"
            pelleParent.appendChild(pelle);
        }, 1000
    );
    setTimeout(
        function () {
            let step02 = document.getElementById("content-step-01");
            let check02 = document.createElement("span");
            check02.id = "check-02";
            check02 = document.createTextNode(" ✔");
            step02.appendChild(check02);
        }, 2000
    );
    setTimeout(
        function () {
            let step02 = document.getElementById("content-step-01")
            step02.style.animation = "delete 2s ease-in-out";
        }, 3000
    );
    setTimeout(
        function () {
            let step03 = document.getElementById("content-step-01")
            step03.innerText = "Cliquez sur la pelle pour remplir le vase"
            step03.style.animation = "add 2s ease-in-out";
        }, 4000
    );
};

/* Evénement 3 */

document.addEventListener('click', function (e) {
    if(e.target && e.target.id === "content-pelle") {
        fonction_08();
    }
})

/* Fonctions liées à l'événement 3 */

function fonction_08() {
    let pelle = document.getElementById("content-pelle");
    let vase = document.getElementById("content-vase");
    pelle.src = "img/illustration__03.svg"
    vase.src = "img/vase__02.svg"
    setTimeout(
        function () {
            let step03 = document.getElementById("content-step-01");
            let check03 = document.createElement("span");
            check03.id = "check-03";
            check03.style.animation = "add 2s ease-in-out";
            check03 = document.createTextNode(" ✔");
            step03.appendChild(check03);

            let btnNext = document.createElement("button");
            let btnParent = document.getElementById("content-01");
            btnNext.id = "n-btn";
            btnNext.textContent += "Passez à l'étape suivante";
            btnParent.appendChild(btnNext);
        }, 1000
    );
}

/* Evénement 4 */

document.addEventListener('click', function (e) {
    if(e.target && e.target.id === "n-btn") {
        window.location = 'page3.html'
    }
})