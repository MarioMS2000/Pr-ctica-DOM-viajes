/*Luego en JS:

creas un array con los viajes

recorres el array y pintas las cards

creas un array con ciudades

recorres el array y añades option al select */

//creas un array con los viajes
const data = [
    {
        title: "Viaje 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies. Sed lobortis dignissim lorem, pharetra.",
        url_img: "./assets/viajes/viajes-1.jpg"
    },
    {
        title: "Viaje 2",
        description: "Mauris felis libero, suscipit sed pretium fermentum, aliquet a mauris. Nam justo mi, ultricies nec sem id, efficitur convallis arcu. Praesent suscipit augue nec velit egestas.",
        url_img: "./assets/viajes/viajes-2.jpg"
    },
    {
        title: "Viaje 3",
        description: "Phasellus dignissim turpis id hendrerit mollis. Nulla iaculis tempor vehicula. Quisque lectus purus, auctor at ultrices ac, laoreet in metus. Sed dui odio.",
        url_img: "./assets/viajes/viajes-3.jpg"
    }
];

//creas un array con ciudades
const cities = [
    "Madrid",
    "Barcelona",
    "Valencia",
    "Seville",
    "Bilbao",
    "Granada",
    "Malaga",
    "Palma de Mallorca",
    "Alicante",
    "Zaragoza"
];

// recogemos los elementos del HTML mediante su id y los guardamos en variables para usarlos en JS
const cardsContainer = document.getElementById("cards-container");
const destinosSelect = document.getElementById("destinos-select");

// recorremos el array de viajes y generamos las cards dinámicamente
//Forma moderna
data.forEach((viaje) => {
    cardsContainer.innerHTML += `
        <article class="card">
            <img src="${viaje.url_img}" alt="${viaje.title}">
            <div class="card-content">
                <h2>${viaje.title}</h2>
                <p>${viaje.description}</p>
            </div>
        </article>
    `;
});

//Forma clásica
/*data.forEach((viaje) => {

    // creamos la etiqueta <article></article>
    const card = document.createElement("article");

    // añadimos la clase "card" -> <article class="card"></article>
    card.classList.add("card");

    // añadimos el contenido HTML dentro del article
    card.innerHTML = `
        <img src="${viaje.url_img}" alt="${viaje.title}"/>
        <div class="card-content">
            <h3>${viaje.title}</h3>
            <p>${viaje.description}</p>
        </div>
    `;

    // añadimos la card al contenedor del HTML para que aparezca en la página
    cardsContainer.appendChild(card);
});*/


// recorremos el array de ciudades y creamos las opciones del select

//Forma moderna
cities.forEach((ciudad) =>{
    destinosSelect.innerHTML += `<option value="${ciudad}">${ciudad}</option>`;
});

//Forma clasica
/*cities.forEach((ciudad) => {

    // creamos la etiqueta <option></option>
    const option = document.createElement("option");

    // añadimos el valor al atributo value -> <option value="Madrid"></option>
    option.value = ciudad;

    // añadimos el texto visible -> <option value="Madrid">Madrid</option>
    option.textContent = ciudad;

    // añadimos la opción al select para que se vea en la web
    destinosSelect.appendChild(option);
});*/