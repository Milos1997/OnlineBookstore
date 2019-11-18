import { knjige } from './knjige.js';
console.log(knjige);

const idAkcije = document.querySelector("#akcije");

function prikazAkcija() {
    for (let k of knjige) {
        if (k.zanr == "Top Lista") {
            idAkcije.innerHTML += `
                    <div id="card2" class="row">
                        <a href="opisKnjige.html?id=${k.id}"><img id="slikaK2" src="${k.slika}"></a>
                        <p id="nameCard2">${k.naziv}<br><span id="writeCard2">${k.pisac}</span>
                        <br><a href="opisKnjige.html?id=${k.id}">
                            <button type="button" class="btn btn-primary">Detaljnije</button></p></a>
                    </div>
                `;
        }
    }
}
prikazAkcija();