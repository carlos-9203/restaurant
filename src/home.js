import cupcake from './cupcake.png';
import sweetsImage from './sweets.png'; // Importa la imagen de los dulces

export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpia el contenido

    // Contenedor principal
    const container = document.createElement('div');
    container.classList.add('info-container');

    // Contenedor del título
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('custom-title-container');

    // Imagen de la izquierda
    const cupcakeLeft = document.createElement('img');
    cupcakeLeft.src = cupcake;
    cupcakeLeft.alt = 'Cupcake';
    cupcakeLeft.classList.add('title-icon');

    // Título principal
    const title = document.createElement('h1');
    title.textContent = "Sweet Temptation";
    title.classList.add('custom-title-text');

    // Imagen de la derecha
    const cupcakeRight = document.createElement('img');
    cupcakeRight.src = cupcake;
    cupcakeRight.alt = 'Cupcake';
    cupcakeRight.classList.add('title-icon');

    // Construye el título
    titleContainer.appendChild(cupcakeLeft);
    titleContainer.appendChild(title);
    titleContainer.appendChild(cupcakeRight);

    // Agrega el título al contenedor principal
    container.appendChild(titleContainer);

    // Sección About Us
    const descriptionSection = document.createElement('div');
    descriptionSection.classList.add('custom-info-box', 'about-us-box'); // Añadimos clase específica

    const sweetsIconContainer = document.createElement('div');
    sweetsIconContainer.classList.add('about-us-icon-container'); // Contenedor específico para la imagen

    const sweetsIcon = document.createElement('img');
    sweetsIcon.src = sweetsImage;
    sweetsIcon.alt = "Sweets";
    sweetsIcon.classList.add('about-us-image'); // Clase para el estilo de la imagen

    sweetsIconContainer.appendChild(sweetsIcon);

    const descriptionTitle = document.createElement('h2');
    descriptionTitle.textContent = "About Us";

    const descriptionText = document.createElement('p');
    descriptionText.textContent =
        "Sweet Temptation is the perfect place to enjoy the most delicious sweets, prepared with love to sweeten your days.";

    descriptionSection.appendChild(sweetsIconContainer); // Añade el contenedor de la imagen
    descriptionSection.appendChild(descriptionTitle);
    descriptionSection.appendChild(descriptionText);
    container.appendChild(descriptionSection);

    // Sección de horarios
    const hoursSection = document.createElement('div');
    hoursSection.classList.add('custom-info-box');
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = "Timetables";
    const hoursText1 = document.createElement('p');
    hoursText1.textContent = `Monday to Friday: 10am - 8pm`;
    const hoursText2 = document.createElement('p');
    hoursText2.textContent = `Saturday and Sunday: 12pm - 9pm`;
    hoursSection.appendChild(hoursTitle);
    hoursSection.appendChild(hoursText1);
    hoursSection.appendChild(hoursText2);
    container.appendChild(hoursSection);

    // Sección de ubicación
    const locationSection = document.createElement('div');
    locationSection.classList.add('custom-info-box');
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = "Location";
    const locationText = document.createElement('p');
    locationText.textContent = "Sweet Street #123, Caramel City";
    locationSection.appendChild(locationTitle);
    locationSection.appendChild(locationText);
    container.appendChild(locationSection);

    // Agrega el contenedor principal al contenido
    content.appendChild(container);
}
