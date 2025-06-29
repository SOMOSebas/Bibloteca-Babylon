// Datos de los libros recomendados del mes
const recomendaciones = [
    {
        titulo: 'El Nombre de la Rosa',
        autor: 'Umberto Eco',
        cita: '"Los libros siempre hablan de otros libros y cada historia cuenta una historia que ya se ha contado."',
        razon: 'Una obra maestra que combina el misterio medieval con la filosofía y la búsqueda del conocimiento. Su narrativa intrincada y su ambientación monástica nos transportan a un mundo donde los libros eran verdaderos tesoros.',
        imagen: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=150&h=200&fit=crop',
        genero: 'Novela Histórica',
        año: 1980
    },
    {
        titulo: 'Fahrenheit 451',
        autor: 'Ray Bradbury',
        cita: '"No hace falta quemar libros para destruir una cultura. Basta con conseguir que la gente deje de leerlos."',
        razon: 'Una profética reflexión sobre el valor de la literatura y el peligro de una sociedad que renuncia al pensamiento crítico. Su mensaje sobre la importancia de preservar el conocimiento resuena con especial fuerza en nuestra era digital.',
        imagen: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=150&h=200&fit=crop',
        genero: 'Ciencia Ficción',
        año: 1953
    },
    {
        titulo: 'La Sombra del Viento',
        autor: 'Carlos Ruiz Zafón',
        cita: '"Pocos lugares hay más propicios a la felicidad que una biblioteca."',
        razon: 'Un homenaje a los libros y a la lectura envuelto en un misterio gótico por las calles de Barcelona. La novela nos recuerda por qué amamos los libros y por qué son fundamentales para nuestra humanidad.',
        imagen: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=200&fit=crop',
        genero: 'Misterio',
        año: 2001
    },
    {
        titulo: 'El Señor de los Anillos',
        autor: 'J.R.R. Tolkien',
        cita: '"Un libro no puede ser juzgado por su cubierta, pero sí por su contenido."',
        razon: 'La epopeya fantástica por excelencia que ha definido el género. Una obra que explora temas universales como la amistad, el coraje y la lucha contra la oscuridad, todo ello en un mundo imaginario de increíble riqueza.',
        imagen: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=150&h=200&fit=crop',
        genero: 'Fantasía',
        año: 1954
    }
];

// Citas del mes
const citasMensuales = [
    {
        texto: '"En los antiguos libros yace la sabiduría de los siglos, esperando ser descubierta por aquellos que se atreven a buscarla."',
        autor: 'Los Guardianes de Babylon',
        fecha: 'Inscrito en el año 2024'
    },
    {
        texto: '"Cada libro es una puerta a un nuevo mundo, cada página un paso en el camino del conocimiento."',
        autor: 'Sabiduría Ancestral',
        fecha: 'Del Grimorio Eterno'
    },
    {
        texto: '"Los libros son los amigos más silenciosos y constantes; los consejeros más accesibles y sabios."',
        autor: 'Charles W. Eliot',
        fecha: 'Reflexiones Literarias'
    }
];

// Elementos del DOM
const recommendedBooksContainer = document.querySelector('.recommended-books');
const recommendationsReasonsContainer = document.querySelector('.recommendations-reasons');
const monthlyQuoteContainer = document.querySelector('.monthly-quote');

// Función para crear una recomendación de libro
function createRecommendation(libro) {
    const recommendationElement = document.createElement('div');
    recommendationElement.className = 'recommended-book';
    recommendationElement.innerHTML = `
        <div class="book-preview">
            <img src="${libro.imagen}" alt="${libro.titulo}" class="book-preview__image">
            <div class="book-preview__info">
                <h4 class="book-preview__title">${libro.titulo}</h4>
                <p class="book-preview__author">${libro.autor}</p>
                <div class="book-preview__meta">
                    <span class="book-preview__genre">${libro.genero}</span>
                    <span class="book-preview__year">${libro.año}</span>
                </div>
            </div>
        </div>
        <blockquote class="book-preview__quote">${libro.cita}</blockquote>
    `;

    // Agregar evento de clic para mostrar más detalles
    recommendationElement.addEventListener('click', () => {
        showBookRecommendationDetails(libro);
    });

    return recommendationElement;
}

// Función para crear la razón de recomendación
function createReasonElement(libro) {
    const reasonElement = document.createElement('div');
    reasonElement.className = 'recommendation-reason';
    reasonElement.innerHTML = `
        <h4 class="reason__title">${libro.titulo}</h4>
        <p class="reason__text">${libro.razon}</p>
        <div class="reason__meta">
            <span class="reason__genre">${libro.genero}</span>
            <span class="reason__year">${libro.año}</span>
        </div>
    `;
    return reasonElement;
}

// Función para mostrar detalles de la recomendación
function showBookRecommendationDetails(libro) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal__content">
            <div class="modal-header">
                <h2>${libro.titulo}</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <div class="recommendation-detail">
                    <img src="${libro.imagen}" alt="${libro.titulo}" class="recommendation-detail__image">
                    <div class="recommendation-detail__content">
                        <div class="recommendation-detail__meta">
                            <p><strong>Autor:</strong> ${libro.autor}</p>
                            <p><strong>Género:</strong> ${libro.genero}</p>
                            <p><strong>Año:</strong> ${libro.año}</p>
                        </div>
                        <blockquote class="recommendation-detail__quote">${libro.cita}</blockquote>
                        <div class="recommendation-detail__reason">
                            <h4>¿Por qué leerlo?</h4>
                            <p>${libro.razon}</p>
                        </div>
                        <button class="recommendation-detail__btn">
                            <i class="fas fa-book-open"></i> Añadir a mi lista de lectura
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'block';

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Función para mostrar la cita del mes
function displayMonthlyQuote() {
    const randomQuote = citasMensuales[Math.floor(Math.random() * citasMensuales.length)];
    monthlyQuoteContainer.innerHTML = `
        <blockquote class="monthly-quote__text">${randomQuote.texto}</blockquote>
        <div class="monthly-quote__attribution">
            <span class="monthly-quote__author">— ${randomQuote.autor}</span>
            <span class="monthly-quote__date">${randomQuote.fecha}</span>
        </div>
        <button class="monthly-quote__refresh" onclick="refreshQuote()">
            <i class="fas fa-sync-alt"></i> Nueva Cita
        </button>
    `;
}

// Función para refrescar la cita
function refreshQuote() {
    displayMonthlyQuote();
}

// Función para inicializar la página
function initGrimorio() {
    // Mostrar libros recomendados
    recomendaciones.forEach(libro => {
        recommendedBooksContainer.appendChild(createRecommendation(libro));
        recommendationsReasonsContainer.appendChild(createReasonElement(libro));
    });

    // Mostrar cita del mes
    displayMonthlyQuote();

    // Añadir efecto de página al hacer hover
    const grimorioPages = document.querySelectorAll('.grimorio-page');
    grimorioPages.forEach(page => {
        page.addEventListener('mouseenter', () => {
            page.style.transform = 'scale(1.02)';
        });
        page.addEventListener('mouseleave', () => {
            page.style.transform = 'scale(1)';
        });
    });

    // Agregar efectos de animación
    const recommendedBooks = document.querySelectorAll('.recommended-book');
    recommendedBooks.forEach((book, index) => {
        book.style.animationDelay = `${index * 0.2}s`;
    });
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initGrimorio);