import { knjige } from './knjige.js';
console.log(knjige);

const idPrviRed = document.querySelector("#prviRed");
const idDrugiRed = document.querySelector("#drugiRed");
const idTreciRed = document.querySelector("#treciRed");

function prikazKnjiga() {
    for (let k of knjige) {
        if (k.zanr == "Novi naslovi") {
            idPrviRed.innerHTML += `
                    <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                        <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                        <p id="nameCard">${k.naziv}</p>
                        <p id="writeCard">${k.pisac}</p>
                    </div>
                `;
        } else if (k.zanr == "Top Lista") {
            idDrugiRed.innerHTML += `
                    <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                        <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                        <p id="nameCard">${k.naziv}</p>
                        <p id="writeCard">${k.pisac}</p>
                    </div>
                `;
        } else if (k.zanr == "English") {
            idTreciRed.innerHTML += `
                    <div data-aos="fade-up" id="card" class="col-lg-3 col-md-6 col-sm-6">
                        <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                        <p id="nameCard">${k.naziv}</p>
                        <p id="writeCard">${k.pisac}</p>
                    </div>
                `;
        }
    }
}
prikazKnjiga();