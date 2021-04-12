
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
            pot.src = "img/vase__03.svg"
            potParent.appendChild(pot);

            let plante = document.createElement("img");
            let planteParent = document.getElementById("content-03");
            plante.id = "content-plante";
            plante.style.cursor = "pointer";
            plante.src = "img/plante.svg"
            planteParent.appendChild(plante);
        }, 1000
    );
};

function fonction_03() {
    setTimeout(
        function () {
        let step01 = document.createElement("p");
        let stepParent = document.getElementById("content-01");
        step01.innerText = "Cliquez sur la plante pour la rapprocher du vase";
        step01.id = "content-step-01";
        stepParent.appendChild(step01);

        let step02 = document.createElement("p");
        step02.innerText = "Lorsque vous rempotez votre plante, centrez-la et assurez-vous qu'elle soit bien verticale. Regardez-la de face tout en faisant tourner le pot pour vérifier qu'elle n'est pas inclinée dans un sens ou dans l'autre.";
        step02.id = "content-step-02";
        stepParent.appendChild(step02);
        }, 1000
    );
};

/* Evénement 2 */

document.addEventListener('click', function (e) {
    let plante = document.getElementById("content-plante");
    if(e.target && e.target.id === "content-plante") {
        plante.style.animation = "move 2s ease-in-out forwards";
        fonction_04();
    }
})

/* Fonctions relatives à l'événement 2 */

function fonction_04() {
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
            step02.innerText = "Cliquez sur le vase pour rempoter la plante"
            step02.style.animation = "add 2s ease-in-out";

            let pot = document.getElementById("content-pot");
            pot.style.cursor = "pointer";
        }, 4000
    );
}


/* Evénement 3 */

document.addEventListener('click', function (e) {
    if(e.target && e.target.id === "content-pot") {
        fonction_05();
    }
})

function fonction_05() {
    setTimeout(
        function () {
            let plante = document.getElementById("content-plante");
            plante.style.visibility = "hidden";
        }, 1000
    );
    setTimeout(
        function () {
            let vase = document.getElementById("content-pot");
            vase.style.animation = "add 2s ease-in-out";
            vase.src = "img/vase__04.svg";
        }, 2000
    );
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

document.addEventListener('click', function (e) {
    if(e.target && e.target.id === "n-btn") {
        window.location = 'page7.html'
    }
})

