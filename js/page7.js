
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
            let plante = document.createElement("img");
            let planteParent = document.getElementById("content-06");
            plante.id = "content-plante";
            plante.src = "img/vase__04.svg"
            planteParent.appendChild(plante);
        }, 1000
    );
};

function fonction_03() {
    setTimeout(
        function () {
        let step01 = document.createElement("p");
        let stepParent = document.getElementById("content-04");
        step01.innerText = "Cliquez sur le vase pour le mettre au soleil";
        step01.id = "content-step-01";
        stepParent.appendChild(step01);

        let step02 = document.createElement("p");
        step02.innerText = "La plupart des plantes ont besoin d’un minimum de lumière pour que puisse s’accomplir le processus de photosynthèse qui leur permet de vivre et de se développer. C'est d'ailleurs grâce à cela que leur feuillage est aussi bien coloré.";
        step02.id = "content-step-02";
        stepParent.appendChild(step02);

        let plante = document.getElementById('content-plante');
        plante.style.cursor = "pointer";
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

/* Fonction liée à l'événement 2 */

function fonction_04() {
    setTimeout(
        function () {
            let step01 = document.getElementById("content-step-01");
            let check01 = document.createElement("span");
            check01.id = "check-01";
            check01 = document.createTextNode(" ✔");
            step01.appendChild(check01);

            let btnNext = document.createElement("button");
            let btnParent = document.getElementById("content-04");
            btnNext.id = "n-btn";
            btnNext.textContent += "Terminez le tutoriel";
            btnParent.appendChild(btnNext);
        }, 900
    );
};

/* Evénement 3 */

document.addEventListener('click', function (e) {
    if(e.target && e.target.id === "n-btn") {
        let step01 = document.getElementById("content-step-01");
        let step02 = document.getElementById("content-step-02");
        let check01 = document.getElementById("check-01");
        let btn = document.getElementById("n-btn");
        step01.style.visibility = "hidden";
        step02.style.visibility = "hidden";
        btn.style.visibility = "hidden";
       
        setTimeout(
            function () {
                let messageParent = document.getElementById("content-02");
                messageParent.classList.remove("content-delete");
                let message = document.createElement("h1");
                message.innerText = "Merci d'avoir suivi ce tutoriel !";
                message.id = "c-h1";
                messageParent.style.animation = "add 2s ease-in-out forwards"
                messageParent.appendChild(message);
            }, 1000
        );
    }
})


