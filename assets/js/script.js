class Caracter {
    constructor(title, lieu, pouvoir, identity, equipe, picture,logo) {
        this.title = title;
        this.lieu = lieu;
        this.pouvoir = pouvoir;
        this.identity = identity;
        this.equipe = equipe;
        this.picture = picture;
        this.logo = logo;
    }
}


let professor = new Caracter('professor','New York', 'Telepathy', 'Charles Francis Xavier', 'X-Men','Professor.png','Marvel_Logo.svg.png');
let flash = new Caracter('flash','Central City', 'super-speed', 'Barry Allen', 'Justice League','flash.jpg','dc-logo.jpg'); //dc
let hawkeye = new Caracter('hawkeye','Waverly-Iowa', 'kill', 'Clint Barton', 'Avengers','hawkeye.jpg','Marvel_Logo.svg.png');
let robin = new Caracter('robin','Gotham City', 'Gadgets', 'Tim Drake', 'Young Justice','robin.jpg','dc-logo.jpg'); //dc 
let humanTorch = new Caracter('humanTorch','New York', 'Fire Control', 'Johnny Storm', 'Fantastic Four','human-torch.jpg','Marvel_Logo.svg.png');
let greenArrow = new Caracter('greenArrow','Waverly-Iowa', 'Agility', 'Oliver Queen', 'Justice Leagu','green-arrow.jpg','dc-logo.jpg');//dc 

let mychars = [
    professor,flash,hawkeye,robin,humanTorch,greenArrow
];

let stats = document.getElementById('stats');

for(let element of mychars) {
    
stats.innerHTML += `
<!-- Card 1 -->
<div class="col-md-4">
    <div class="card mb-4 ml-4">
        <div class="card-body text-center ">
            <img src="assets/images/${element.logo}" alt="Logo" class="mb-3" style="max-width: 120px;height:60px;"> <!-- Logo -->
            <h5 class="card-title">${element.title}</h5> <!-- Card title -->
            <img src="assets/images/${element.picture}" alt="Card Image" class="card-img-top mb-3"> <!-- Card image -->
            <ul class="list-group text-left text-dark">
                <li class="list-group-item text-dark">Lieu : ${element.lieu}</li> <!-- Item 1 -->
                <li class="list-group-item text-dark">Super Pouvoir : ${element.pouvoir}</li> <!-- Item 2 -->
                <li class="list-group-item text-dark"> Identitée : ${element.identity}</li> <!-- Item 3 -->
                <li class="list-group-item text-dark">Equipe : ${element.equipe}</li> <!-- Item 4 -->
            </ul>
        </div>
    </div>
</div>


`;}