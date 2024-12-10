// Importa las imágenes
import placeholderImage from './cupcakedelight.jpg';
import placeholderImage1 from './chocolateheaven.jpg';
import placeholderImage2 from './candyparadise.jpg';
import placeholderImage3 from './macaron.jpg';
import placeholderImage4 from './ice cream.jpg';
import cupcake from './cupcake.png';

export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpia el contenido

    // Contenedor principal exclusivo del menú
    const container = document.createElement('div');
    container.classList.add('menu-container'); // Clase exclusiva

    // Título del menú
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('menu-title-container'); // Clase exclusiva

    // Imagen de la izquierda
    const cupcakeLeft = document.createElement('img');
    cupcakeLeft.src = cupcake;
    cupcakeLeft.alt = 'Cupcake';
    cupcakeLeft.classList.add('menu-title-icon'); // Clase exclusiva

    // Título principal
    const title = document.createElement('h1');
    title.textContent = "Menu";
    title.classList.add('menu-title-text'); // Clase exclusiva

    // Imagen de la derecha
    const cupcakeRight = document.createElement('img');
    cupcakeRight.src = cupcake;
    cupcakeRight.alt = 'Cupcake';
    cupcakeRight.classList.add('menu-title-icon'); // Clase exclusiva

    // Construye el título
    titleContainer.appendChild(cupcakeLeft);
    titleContainer.appendChild(title);
    titleContainer.appendChild(cupcakeRight);
    container.appendChild(titleContainer);

    // Elementos del menú con imágenes
    const menuItems = [
        {
            name: "Cupcake Delight",
            description: "A soft and fluffy cupcake topped with rich buttercream and colorful sprinkles.",
            price: "$3.00",
            image: placeholderImage,
        },
        {
            name: "Chocolate Heaven",
            description: "A decadent chocolate brownie with melted chocolate chips inside, served warm.",
            price: "$4.50",
            image: placeholderImage1,
        },
        {
            name: "Candy Paradise",
            description: "A mix of assorted candies, including gummies, chocolates, and lollipops.",
            price: "$5.00",
            image: placeholderImage2,
        },
        {
            name: "Macaron Medley",
            description: "A selection of French macarons in various flavors like raspberry, pistachio, and chocolate.",
            price: "$7.00",
            image: placeholderImage3,
        },
        {
            name: "Ice Cream Bliss",
            description: "Two scoops of creamy ice cream in your choice of flavors, served with a waffle cone.",
            price: "$4.00",
            image: placeholderImage4,
        }
    ];

    menuItems.forEach(item => {
        const itemBox = document.createElement('div');
        itemBox.classList.add('menu-item-box'); // Clase exclusiva

        const textContainer = document.createElement('div');
        textContainer.classList.add('menu-item-text'); // Clase exclusiva

        const itemTitle = document.createElement('h2');
        itemTitle.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const priceAndImageContainer = document.createElement('div');
        priceAndImageContainer.classList.add('price-and-image-container'); // Clase exclusiva

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        itemPrice.classList.add('menu-item-price');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.classList.add('menu-item-image');

        priceAndImageContainer.appendChild(itemPrice);
        priceAndImageContainer.appendChild(itemImage);

        textContainer.appendChild(itemTitle);
        textContainer.appendChild(itemDescription);
        textContainer.appendChild(priceAndImageContainer);

        itemBox.appendChild(textContainer);
        container.appendChild(itemBox);
    });

    content.appendChild(container);
}
