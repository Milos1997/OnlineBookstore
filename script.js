const knjige = [
    {"naziv": "Mundo Libre", "pisac": "Marko Krstic", "zanr": "Novi naslovi", "slika": "img/mundoLibre.jpg"},
    {"naziv": "DrugiAjnštajn", "pisac": "Mari Benedikt", "zanr": "Novi naslovi", "slika": "img/drugiAjnstajn.jpg"},
    {"naziv": "Manastir", "pisac": "Milomir Đukanović", "zanr": "Novi naslovi", "slika": "img/manastir.jpg"},
    {"naziv": "Ubisvet", "pisac": "Siniša Soćanin", "zanr": "Novi naslovi", "slika": "img/ubisvet.jpg"},
    {"naziv": "Imenik klasične starine", "pisac": "Vladeta Janković", "zanr": "Novi naslovi", "slika": "img/imenikKlasicne.jpg"},
    {"naziv": "Brit-Mari je bila tu", "pisac": "Fredrik Bakman", "zanr": "Novi naslovi", "slika": "img/britMari.jpg"},
    {"naziv": "U senci masline", "pisac": "Lusinda Rajli", "zanr": "Novi naslovi", "slika": "img/uSenciMasline.jpg"},
    {"naziv": "Teodorin prsten", "pisac": "Vanja Bulić", "zanr": "Novi naslovi", "slika": "img/teodorinPrsten.jpg"},
    {"naziv": "Ženski razgovori", "pisac": "Dušan Radović", "zanr": "Top Lista", "slika": "img/zenskiRazgovori.jpg"},
    {"naziv": "Devojka koja je čitala u metrou", "pisac": "Kristin Fere-Fleri", "zanr": "Top Lista", "slika": "img/devojka.jpg"},
    {"naziv": "Jedna nit", "pisac": "Trejsi Ševalije", "zanr": "Top Lista", "slika": "img/jednaNit.jpg"},
    {"naziv": "Jedna od Nas", "pisac": "Osne Sejerštad", "zanr": "Top Lista", "slika": "img/cetiriKise.jpg"},
    {"naziv": "Voleti nekog poput tebe", "pisac": "Havijer Bosk", "zanr": "Top Lista", "slika": "img/voletiNekog.jpg"},
    {"naziv": "Upitnik je pola srca", "pisac": "Sofija Lundberj", "zanr": "Top Lista", "slika": "img/upitnikJePolaSrca.jpg"},
    {"naziv": "Unutrašnjost", "pisac": "Tea Obreht", "zanr": "Top Lista", "slika": "img/unutrasnjost.jpg"},
    {"naziv": "Nestvarno a stvarno", "pisac": "Živojin Petrović", "zanr": "Top Lista", "slika": "img/nestvarnoAStvarno.jpg"},
    {"naziv": "Priče o rečima", "pisac": "Vuk Stefanović Karadžić", "zanr": "Akcioni", "slika": "img/priceORecima.jpg"},
    {"naziv": "Idiot - I tom", "pisac": "Fjodor Mihailovič Dostojevski", "zanr": "Akcioni", "slika": "img/idiot.jpg"},
    {"naziv": "Obećao si mi", "pisac": "Mirjana Bobić", "zanr": "Akcioni", "slika": "img/obecaoSiMi.jpg"},
    {"naziv": "Svaštara", "pisac": "Dušan Radović", "zanr": "Akcioni", "slika": "img/svastara.jpg"},
    {"naziv": "Zvona starog Tokija", "pisac": "Ana Šerman", "zanr": "Akcioni", "slika": "img/zvonaStarogTokija.jpg"},
    {"naziv": "Zašto spavamo", "pisac": "Metju Voker", "zanr": "Akcioni", "slika": "img/zastoSpavamo.jpg"},
    {"naziv": "Biblija", "pisac": "Nenad Racković", "zanr": "Akcioni", "slika": "img/biblija.jpg"},
    {"naziv": "Prodavnica Tajni", "pisac": "Dino Bucati", "zanr": "Akcioni", "slika": "img/prodavnicaTajni.jpg"},
    {"naziv": "Neispričane priče", "pisac": "Rajko Grlić", "zanr": "Akcioni", "slika": "img/neispricane.jpg"},
    {"naziv": "Knjiga od peska", "pisac": "Horhe Luis Borhes", "zanr": "Avanturistički", "slika": "img/knjigaOdPeska.jpg"},
    {"naziv": "Forenzika Itake", "pisac": "Vule Žurić", "zanr": "Avanturistički", "slika": "img/forenzika.jpg"},
    {"naziv": "Atlas opisan nebom", "pisac": "Goran Petrović", "zanr": "Avanturistički", "slika": "img/atlas.jpg"},
    {"naziv": "Sve u svemu", "pisac": "Ivana Dimić", "zanr": "Avanturistički", "slika": "img/sveUSvemu.jpg"},
    {"naziv": "Netipičan tip", "pisac": "Tom Henks", "zanr": "Avanturistički", "slika": "img/netipicanTip.jpg"},
    {"naziv": "Alef", "pisac": "Horhe Luis Borhes", "zanr": "Avanturistički", "slika": "img/alef.jpg"},
    {"naziv": "Iznenada neko pokuca na vrata", "pisac": "Etgar Keret", "zanr": "Avanturistički", "slika": "img/iznenada.jpg"},
    {"naziv": "Tamo je ovde", "pisac": "Maja Lalević Piščević", "zanr": "Avanturistički", "slika": "img/tamoJeOvde.jpg"},
    {"naziv": "Deseti decembar", "pisac": "Džordž Sonders", "zanr": "Avanturistički", "slika": "img/desetiDecembar.jpg"},
    {"naziv": "Preživljavanje", "pisac": "Dragoslav Mihailović", "zanr": "Avanturistički", "slika": "img/prezivljavanje.jpg"},
    {"naziv": "Unutrašnje dvorište", "pisac": "Goran Petrović", "zanr": "Avanturistički", "slika": "img/unutrasnje.jpg"}
    
];


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