import { knjige } from './knjige.js';
console.log(knjige);

const idDecijeKnjige = document.querySelector("#decijeKnjige");

function prikazDrugi() {
    for (let k of knjige) {
        if (k.zanr == "Top Lista" || k.zanr == "English") {
            idDecijeKnjige.innerHTML += `
                    <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                        <a href="opisKnjige.html?id=${k.id}"><img id="slikaK" src="${k.slika}"></a>
                        <p id="nameCard">${k.naziv}</p>
                        <p id="writeCard">${k.pisac}</p>
                    </div>
                `;
        }
    }
}
prikazDrugi();