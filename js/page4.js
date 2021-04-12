
/* Evénement 1 */

let event_01 = document.getElementById("c-btn");
let content_div01 = document.getElementById("content-02");

event_01.addEventListener("click", function () {
    content_div01.classList.add("content-delete");
    fonction_01();
    fonction_02();
    fonction_03();
});

/* Fonctions liées à l'événement 1 */

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
        step01.innerText = "Cliquez sur le vase pour tasser la terre";
        step01.id = "content-step-01";
        stepParent.appendChild(step01);

        let step02 = document.createElement("p");
        step02.innerText = "Tasser en douceur la terre à la main permet d'obtenir une surface aplanie qui permettra d'accueillir au mieux la plante.";
        step02.id = "content-step-02";
        stepParent.appendChild(step02);

        let vase = document.getElementById('content-vase');
        vase.style.cursor = "pointer";
        }, 1000
    );
};

/* Evénement 2 */

document.addEventListener('click', function (e) {
    if(e.target && e.target.id === "content-vase") {
        fonction_04();
    }
})

function fonction_04() {
    let vase = document.getElementById("content-vase");
    vase.src = "img/vase__03.svg"
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
        window.location = 'page5.html'
    }
})