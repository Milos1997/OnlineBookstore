import { knjige } from './knjige.js';
console.log(knjige);

const idKartice = document.querySelector("#kartice");
const idKartice2 = document.querySelector("#kartice2");

function prikazKnjiga() {
    for (let k of knjige) {
        idKartice.innerHTML += `
            <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                <img id="slikaK" src="${k.slika}">
                <p id="nameCard">${k.naziv}</p>
                <p id="writeCard">${k.pisac}</p>
            </div>
        `;
    }
}
prikazKnjiga();


idKartice.addEventListener("click", function() {
    window.location = 'opisKnjige.html';
});

/*zanrovi*/
const idNoviN = document.querySelector("#noviN");
const idTopLista = document.querySelector("#topLista");
const idAkcioni = document.querySelector("#akcioni");
const idAvanturisticki = document.querySelector("#avanturisticki");
const idDomaci = document.querySelector("#domaci");
const idFilozofija = document.querySelector("#filozofija");
const idIstorija = document.querySelector("#istorija");
const idEnglish = document.querySelector("#english");

idNoviN.addEventListener("click", function() {
    for (let k of knjige) {
        if (k.zanr == "Novi naslovi") {
            idKartice.innerHTML += ``;
            idKartice2.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <img id="slikaK" src="${k.slika}">
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idTopLista.addEventListener("click", function() {
    for (let k of knjige) {
        if (k.zanr == "Top Lista") {
            idKartice.innerHTML += ``;
            idKartice2.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <img id="slikaK" src="${k.slika}">
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idFilozofija.addEventListener("click", function() {
    for (let k of knjige) {
        if (k.zanr == "Filozofija") {
            idKartice.innerHTML += ``;
            idKartice2.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <img id="slikaK" src="${k.slika}">
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idAkcioni.addEventListener("click", function() {
    for (let k of knjige) {
        if (k.zanr == "Akcioni") {
            idKartice.innerHTML += ``;
            idKartice2.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <img id="slikaK" src="${k.slika}">
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idAvanturisticki.addEventListener("click", function() {
    for (let k of knjige) {
        if (k.zanr == "Avanturistički") {
            idKartice.innerHTML += ``;
            idKartice2.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <img id="slikaK" src="${k.slika}">
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idDomaci.addEventListener("click", function() {
    for (let k of knjige) {
        if (k.zanr == "Domaći pisci") {
            idKartice.innerHTML += ``;
            idKartice2.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <img id="slikaK" src="${k.slika}">
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});


idKartice2.addEventListener("click", function() {
    window.location = 'opisKnjige.html';
});