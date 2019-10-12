const knjige = [
    {"naziv": "Mundo Libre", "pisac": "Marko Krstic", "zanr": "Novi naslovi", "slika": "../img/mundoLibre.jpg"},
    {"naziv": "DrugiAjnštajn", "pisac": "Mari Benedikt", "zanr": "Novi naslovi", "slika": "../img/drugiAjnstajn.jpg"},
    {"naziv": "Manastir", "pisac": "Milomir Đukanović", "zanr": "Novi naslovi", "slika": "../img/manastir.jpg"},
    {"naziv": "Ubisvet", "pisac": "Siniša Soćanin", "zanr": "Novi naslovi", "slika": "../img/ubisvet.jpg"},
    {"naziv": "Imenik klasične starine", "pisac": "Vladeta Janković", "zanr": "Novi naslovi", "slika": "../img/imenikKlasicne.jpg"},
    {"naziv": "Brit-Mari je bila tu", "pisac": "Fredrik Bakman", "zanr": "Novi naslovi", "slika": "../img/britMari.jpg"},
    {"naziv": "U senci masline", "pisac": "Lusinda Rajli", "zanr": "Novi naslovi", "slika": "../img/uSenciMasline.jpg"},
    {"naziv": "Teodorin prsten", "pisac": "Vanja Bulić", "zanr": "Novi naslovi", "slika": "../img/teodorinPrsten.jpg"},
    {"naziv": "Ženski razgovori", "pisac": "Dušan Radović", "zanr": "Novi naslovi", "slika": "../img/zenskiRazgovori.jpg"},
    {"naziv": "Devojka koja je čitala u metrou", "pisac": "Kristin Fere-Fleri", "zanr": "Novi naslovi", "slika": "../img/devojka.jpg"},
    {"naziv": "Jedna nit", "pisac": "Trejsi Ševalije", "zanr": "Novi naslovi", "slika": "../img/jednaNit.jpg"},
    {"naziv": "Jedna od Nas", "pisac": "Osne Sejerštad", "zanr": "Novi naslovi", "slika": "../img/cetiriKise.jpg"},
    {"naziv": "Voleti nekog poput tebe", "pisac": "Havijer Bosk", "zanr": "Novi naslovi", "slika": "../img/voletiNekog.jpg"},
    {"naziv": "Upitnik je pola srca", "pisac": "Sofija Lundberj", "zanr": "Novi naslovi", "slika": "../img/upitnikJePolaSrca.jpg"},
    {"naziv": "Unutrašnjost", "pisac": "Tea Obreht", "zanr": "Novi naslovi", "slika": "../img/unutrasnjost.jpg"},
    {"naziv": "Nestvarno a stvarno", "pisac": "Živojin Petrović", "zanr": "Novi naslovi", "slika": "../img/nestvarnoAStvarno.jpg"},
    {"naziv": "Priče o rečima", "pisac": "Vuk Stefanović Karadžić", "zanr": "Novi naslovi", "slika": "../img/priceORecima.jpg"},
    {"naziv": "Idiot - I tom", "pisac": "Fjodor Mihailovič Dostojevski", "zanr": "Novi naslovi", "slika": "../img/idiot.jpg"},
    {"naziv": "Obećao si mi", "pisac": "Mirjana Bobić", "zanr": "Novi naslovi", "slika": "../img/obecaoSiMi.jpg"},
    {"naziv": "Svaštara", "pisac": "Dušan Radović", "zanr": "Novi naslovi", "slika": "../img/svastara.jpg"},
    {"naziv": "Zvona starog Tokija", "pisac": "Ana Šerman", "zanr": "Novi naslovi", "slika": "../img/zvonaStarogTokija.jpg"},
    {"naziv": "Zašto spavamo", "pisac": "Metju Voker", "zanr": "Novi naslovi", "slika": "../img/zastoSpavamo.jpg"},
    {"naziv": "Biblija", "pisac": "Nenad Racković", "zanr": "Novi naslovi", "slika": "../img/biblija.jpg"},
    {"naziv": "Prodavnica Tajni", "pisac": "Dino Bucati", "zanr": "Novi naslovi", "slika": "../img/prodavnicaTajni.jpg"},
    {"naziv": "Neispričane priče", "pisac": "Rajko Grlić", "zanr": "Novi naslovi", "slika": "../img/neispricane.jpg"},
    {"naziv": "Knjiga od peska", "pisac": "Horhe Luis Borhes", "zanr": "Novi naslovi", "slika": "../img/knjigaOdPeska.jpg"},
    {"naziv": "Forenzika Itake", "pisac": "Vule Žurić", "zanr": "Novi naslovi", "slika": "../img/forenzika.jpg"},
    {"naziv": "Atlas opisan nebom", "pisac": "Goran Petrović", "zanr": "Novi naslovi", "slika": "../img/atlas.jpg"},
    {"naziv": "Sve u svemu", "pisac": "Ivana Dimić", "zanr": "Novi naslovi", "slika": "../img/sveUSvemu.jpg"},
    {"naziv": "Netipičan tip", "pisac": "Tom Henks", "zanr": "Novi naslovi", "slika": "../img/netipicanTip.jpg"},
    {"naziv": "Alef", "pisac": "Horhe Luis Borhes", "zanr": "Novi naslovi", "slika": "../img/alef.jpg"},
    {"naziv": "Iznenada neko pokuca na vrata", "pisac": "Etgar Keret", "zanr": "Novi naslovi", "slika": "../img/iznenada.jpg"},
    {"naziv": "Tamo je ovde", "pisac": "Maja Lalević Piščević", "zanr": "Novi naslovi", "slika": "../img/tamoJeOvde.jpg"},
    {"naziv": "Deseti decembar", "pisac": "Džordž Sonders", "zanr": "Novi naslovi", "slika": "../img/desetiDecembar.jpg"},
    {"naziv": "Preživljavanje", "pisac": "Dragoslav Mihailović", "zanr": "Novi naslovi", "slika": "../img/prezivljavanje.jpg"},
    {"naziv": "Unutrašnje dvorište", "pisac": "Goran Petrović", "zanr": "Novi naslovi", "slika": "../img/unutrasnje.jpg"}
    
];

//document.getElementById("kartice").innerHTML =  `
//<h1 class="knjigaNaslov">Knjige (${knjige.length} ukupno)</h1>
//`

    const idKartice = document.querySelector("#kartice");

    function prikaz(){
        for(let k of knjige){
            idKartice.innerHTML += `
                <div data-aos="fade-up" id="card" class="col-lg-2 col-md-4 col-sm-6">
                    <img id="slikaK" src="${k.slika}">
                    <p id="nameCard">${k.naziv}</p>
                    <p id="writeCard">${k.pisac}</p>
                </div>
            `
        }
    } prikaz()
