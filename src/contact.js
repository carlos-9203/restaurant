export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpia el contenido

    // Contenedor principal
    const container = document.createElement('div');
    container.classList.add('info-container');

    // Título de Contacto
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('custom-title-container');
    const title = document.createElement('h1');
    title.textContent = "Contact Us";
    title.classList.add('custom-title-text');
    titleContainer.appendChild(title);
    container.appendChild(titleContainer);

    // Contactos
    const contacts = [
        {
            name: "Owner",
            role: "Sweet Shop Owner",
            phone: "555-123-4567",
            email: "owner@sweettemptation.com",
        },
        {
            name: "Alice",
            role: "Staff Member",
            phone: "555-234-5678",
            email: "alice@sweettemptation.com",
        },
        {
            name: "Bob",
            role: "Staff Member",
            phone: "555-345-6789",
            email: "bob@sweettemptation.com",
        },
    ];

    contacts.forEach(contact => {
        const contactBox = document.createElement('div');
        contactBox.classList.add('custom-info-box');

        const contactName = document.createElement('h2');
        contactName.textContent = contact.name;

        const contactRole = document.createElement('p');
        contactRole.textContent = contact.role;

        const contactPhone = document.createElement('p');
        contactPhone.textContent = contact.phone;

        const contactEmail = document.createElement('p');
        contactEmail.textContent = contact.email;

        contactBox.appendChild(contactName);
        contactBox.appendChild(contactRole);
        contactBox.appendChild(contactPhone);
        contactBox.appendChild(contactEmail);
        container.appendChild(contactBox);
    });

    // Agrega el contenedor principal al contenido
    content.appendChild(container);
}
