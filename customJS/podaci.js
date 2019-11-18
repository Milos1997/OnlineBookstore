import { knjige } from './knjige.js';
console.log(knjige);

const idKartice = document.querySelector("#kartice");

function prikazKnjiga() {
    for (let k of knjige) {
        idKartice.innerHTML += `
            <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                <p id="nameCard">${k.naziv}</p>
                <p id="writeCard">${k.pisac}</p>
            </div>
        `;
    }
}
prikazKnjiga();



/*Filtriranje*/
const idSveKnjige = document.querySelector("#sveKnjige");
const idNoviN = document.querySelector("#noviN");
const idTopLista = document.querySelector("#topLista");
const idAkcioni = document.querySelector("#akcioni");
const idAvanturisticki = document.querySelector("#avanturisticki");
const idDomaci = document.querySelector("#domaci");
const idFilozofija = document.querySelector("#filozofija");
const idIstorija = document.querySelector("#istorija");
const idEnglish = document.querySelector("#english");

idSveKnjige.addEventListener("click", function() {
    idKartice.innerHTML = "";
    for (let k of knjige) {
        idKartice.innerHTML += `
            <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                <p id="nameCard">${k.naziv}</p>
                <p id="writeCard">${k.pisac}</p>
            </div>
        `;
    }
});

idNoviN.addEventListener("click", function() {
    idKartice.innerHTML = "";
    for (let k of knjige) {
        if (k.zanr == "Novi naslovi") {
            idKartice.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idTopLista.addEventListener("click", function() {
    idKartice.innerHTML = "";
    for (let k of knjige) {
        if (k.zanr == "Top Lista") {
            idKartice.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});


idFilozofija.addEventListener("click", function() {
    idKartice.innerHTML = "";
    for (let k of knjige) {
        if (k.zanr == "Filozofija") {
            idKartice.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idAkcioni.addEventListener("click", function() {
    idKartice.innerHTML = "";
    for (let k of knjige) {
        if (k.zanr == "Akcioni") {
            idKartice.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idAvanturisticki.addEventListener("click", function() {
    idKartice.innerHTML = "";
    for (let k of knjige) {
        if (k.zanr == "Avanturistički") {
            idKartice.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idDomaci.addEventListener("click", function() {
    idKartice.innerHTML = "";
    for (let k of knjige) {
        if (k.zanr == "domaći pisci") {
            idKartice.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idIstorija.addEventListener("click", function() {
    idKartice.innerHTML = "";
    for (let k of knjige) {
        if (k.zanr == "Istorija") {
            idKartice.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});

idEnglish.addEventListener("click", function() {
    idKartice.innerHTML = "";
    for (let k of knjige) {
        if (k.zanr == "English") {
            idKartice.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `;
        }
    }
});