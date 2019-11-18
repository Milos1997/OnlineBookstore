import { knjige } from './knjige.js';

$(document).ready(() => {
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    const bookId = getUrlVars().id;
    const knjiga = knjige.find(k => k.id === bookId);

    console.log(knjiga);
    const idSlikaKnjige = document.getElementById("slikaKnjige");
    const idOpisKnjige = document.getElementById("opisKnjige");
    const idSpecifikacija = document.getElementById("specifikacija");

    idSlikaKnjige.innerHTML += `
        <img id="slikaK" src="${knjiga.slika}">
        <p class="nameCard">${knjiga.naziv}</p>
        <p class="writeCard">${knjiga.pisac}</p>
        <p class="zanr">Žanr: ${knjiga.zanr}<br>Godina izdanja: ${knjiga.godina}</p>
        <p class="cena">Cena: ${knjiga.cena}</p>
        <button id="JSbtn" type="button" class="btn btn-primary" 
        onclick='alert("Hvala Vam što kupujete kod nas!");'>Kupite</button>
        `;

    idOpisKnjige.innerHTML += `
        <h3 id="oKnjizi">O knjizi<hr></h3>
        <p>${knjiga.opis}</p><hr>
    `;

    idSpecifikacija.innerHTML += `
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Specifikacija</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Naziv</th>
        <td>${knjiga.naziv}</td>
      </tr>
      <tr>
        <th scope="row">Autor</th>
        <td>${knjiga.pisac}</td>
      </tr>
      <tr>
        <th scope="row">Žanr</th>
        <td>${knjiga.zanr}</td>
      </tr>
      <tr>
        <th scope="row">Cena</th>
        <td>${knjiga.cena}</td>
      </tr>
      <tr>
        <th scope="row">Godina izdanja</th>
        <td>${knjiga.godina}</td>
      </tr>
    </tbody>
  </table>
    `;
});