// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
        <button class="notification__close" onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.classList.add('notification--show');
    }, 100);
    
    // Auto-remover después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('notification--show');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Datos de ejemplo de libros con enlaces a PDFs
const libros = [
    {
        id: 1,
        titulo: 'Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        categoria: 'Clásicos',
        descripcion: 'La obra cumbre de la literatura española que narra las aventuras del ingenioso hidalgo.',
        pdfUrl: '#',
        portada: '/IMAGENES/Don Quijote.jpg',
        isFavorite: false,
        año: 1605,
        páginas: 863
    },
    {
        id: 2,
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        categoria: 'Realismo Mágico',
        descripcion: 'La saga de la familia Buendía en el mítico pueblo de Macondo.',
        pdfUrl: '#',
        portada: '/IMAGENES/Cien Soledades.jpg',
        isFavorite: false,
        año: 1967,
        páginas: 417
    },
    {
        id: 3,
        titulo: 'Rayuela',
        autor: 'Julio Cortázar',
        categoria: 'Novela',
        descripcion: 'Una novela experimental que puede leerse en múltiples órdenes.',
        pdfUrl: '#',
        portada: '/IMAGENES/Rayuela.jpg',
        isFavorite: false,
        año: 1963,
        páginas: 628
    },
    {
        id: 4,
        titulo: 'Veinte poemas de amor',
        autor: 'Pablo Neruda',
        categoria: 'Poesía',
        descripcion: 'Una colección de los más hermosos poemas de amor.',
        pdfUrl: '#',
        portada: '/IMAGENES/Veinte Poemas.jpg',
        isFavorite: false,
        año: 1924,
        páginas: 95
    },
    {
        id: 5,
        titulo: 'El Aleph',
        autor: 'Jorge Luis Borges',
        categoria: 'Cuentos',
        descripcion: 'Colección de cuentos que exploran temas filosóficos y metafísicos.',
        pdfUrl: '#',
        portada: '/IMAGENES/ElAleph.jpg',
        isFavorite: false,
        año: 1949,
        páginas: 223
    },
    {
        id: 6,
        titulo: 'Pedro Páramo',
        autor: 'Juan Rulfo',
        categoria: 'Realismo Mágico',
        descripcion: 'Una obra maestra que combina realismo y fantasía en un pueblo fantasma.',
        pdfUrl: '#',
        portada: '/IMAGENES/Pedro Paramo.jpg',
        isFavorite: false,
        año: 1955,
        páginas: 124
    },
    {
        id: 7,
        titulo: 'El amor en los tiempos del cólera',
        autor: 'Gabriel García Márquez',
        categoria: 'Realismo Mágico',
        descripcion: 'Una historia de amor que atraviesa décadas y supera todas las adversidades.',
        pdfUrl: '#',
        portada: '/IMAGENES/El Amor Tmp.jpg',
        isFavorite: false,
        año: 1985,
        páginas: 368
    },
    {
        id: 8,
        titulo: 'Ficciones',
        autor: 'Jorge Luis Borges',
        categoria: 'Cuentos',
        descripcion: 'Cuentos que desafían la realidad y exploran laberintos literarios.',
        pdfUrl: '#',
        portada: '/IMAGENES/Ficciones.jpg',
        isFavorite: false,
        año: 1944,
        páginas: 203
    },
    {
        id: 9,
        titulo: 'Los miserables',
        autor: 'Victor Hugo',
        categoria: 'Clásicos',
        descripcion: 'Epopeya sobre la redención y la justicia social en la Francia del siglo XIX.',
        pdfUrl: '#',
        portada: '/IMAGENES/Los miserables.jpg',
        isFavorite: false,
        año: 1862,
        páginas: 1488
    },
    {
        id: 10,
        titulo: 'Madame Bovary',
        autor: 'Gustave Flaubert',
        categoria: 'Clásicos',
        descripcion: 'Retrato magistral de la burguesía francesa y la búsqueda del amor ideal.',
        pdfUrl: '#',
        portada: '/IMAGENES/Madame Bovary.jpg',
        isFavorite: false,
        año: 1857,
        páginas: 528
    },
    {
        id: 11,
        titulo: 'El llano en llamas',
        autor: 'Juan Rulfo',
        categoria: 'Cuentos',
        descripcion: 'Colección de cuentos que retratan la vida rural mexicana con crudeza y poesía.',
        pdfUrl: '#',
        portada: '/IMAGENES/El Llano en Llamas.jpg',
        isFavorite: false,
        año: 1953,
        páginas: 124
    },
    {
        id: 12,
        titulo: 'Residencia en la tierra',
        autor: 'Pablo Neruda',
        categoria: 'Poesía',
        descripcion: 'Poemas que exploran la condición humana y la relación con la naturaleza.',
        pdfUrl: '#',
        portada: '/IMAGENES/Residencia en la tierra.jpg',
        isFavorite: false,
        año: 1933,
        páginas: 156
    },
    {
        id: 13,
        titulo: 'Bestiario',
        autor: 'Julio Cortázar',
        categoria: 'Cuentos',
        descripcion: 'Cuentos que mezclan lo cotidiano con elementos fantásticos y surrealistas.',
        pdfUrl: '#',
        portada: '/IMAGENES/Bestiario.jpg',
        isFavorite: false,
        año: 1951,
        páginas: 142
    },
    {
        id: 14,
        titulo: 'Crónica de una muerte anunciada',
        autor: 'Gabriel García Márquez',
        categoria: 'Realismo Mágico',
        descripcion: 'Reconstrucción de un crimen pasional en un pueblo caribeño.',
        pdfUrl: '#',
        portada: '/IMAGENES/Crónicas de una muerte anunciada.jpg',
        isFavorite: false,
        año: 1981,
        páginas: 120
    },
    {
        id: 15,
        titulo: 'El libro de arena',
        autor: 'Jorge Luis Borges',
        categoria: 'Cuentos',
        descripcion: 'Última colección de cuentos del maestro argentino, llena de enigmas y paradojas.',
        pdfUrl: '#',
        portada: '/IMAGENES/El libro de la arena.jpg',
        isFavorite: false,
        año: 1975,
        páginas: 189
    },
    {
        id: 16,
        titulo: 'Canto general',
        autor: 'Pablo Neruda',
        categoria: 'Poesía',
        descripcion: 'Epopeya poética que narra la historia de América Latina desde sus orígenes.',
        pdfUrl: '#',
        portada: '/IMAGENES/Canto general.jpg',
        isFavorite: false,
        año: 1950,
        páginas: 324
    },
    {
        id: 17,
        titulo: 'Final del juego',
        autor: 'Julio Cortázar',
        categoria: 'Cuentos',
        descripcion: 'Cuentos que exploran la infancia, el juego y la transición a la adultez.',
        pdfUrl: '#',
        portada: '/IMAGENES/Final del juego.jpg',
        isFavorite: false,
        año: 1956,
        páginas: 178
    },
    {
        id: 18,
        titulo: 'Novelas ejemplares',
        autor: 'Miguel de Cervantes',
        categoria: 'Clásicos',
        descripcion: 'Doce novelas cortas que muestran la maestría narrativa de Cervantes.',
        pdfUrl: '#',
        portada: '/IMAGENES/Novelas ejemplares.jpg',
        isFavorite: false,
        año: 1613,
        páginas: 456
    },
    {
        id: 19,
        titulo: 'La Galatea',
        autor: 'Miguel de Cervantes',
        categoria: 'Clásicos',
        descripcion: 'Primera novela de Cervantes, una pastoral que combina prosa y verso.',
        pdfUrl: '#',
        portada: '/IMAGENES/La galatea.jpg',
        isFavorite: false,
        año: 1585,
        páginas: 312
    },
    {
        id: 20,
        titulo: 'El otoño del patriarca',
        autor: 'Gabriel García Márquez',
        categoria: 'Realismo Mágico',
        descripcion: 'Retrato de un dictador latinoamericano a través de una narrativa experimental.',
        pdfUrl: '#',
        portada: '/IMAGENES/El otono.jpg',
        isFavorite: false,
        año: 1975,
        páginas: 285
    },
    {
        id: 21,
        titulo: 'El Señor de los Anillos',
        autor: 'J.R.R. Tolkien',
        categoria: 'Fantasía',
        descripcion: 'Epopeya fantástica que narra la lucha por destruir el Anillo Único y salvar la Tierra Media.',
        pdfUrl: '#',
        portada: '/IMAGENES/Comunidad del anillo.jpg',
        isFavorite: false,
        año: 1954,
        páginas: 1216
    },
    {
        id: 22,
        titulo: 'Dune',
        autor: 'Frank Herbert',
        categoria: 'Ciencia Ficción',
        descripcion: 'Clásico de la ciencia ficción que explora política, religión y ecología en un desierto interestelar.',
        pdfUrl: '#',
        portada: '/IMAGENES/Dune.jpg',
        isFavorite: false,
        año: 1965,
        páginas: 688
    },
    {
        id: 23,
        titulo: 'Harry Potter y la piedra filosofal',
        autor: 'J.K. Rowling',
        categoria: 'Fantasía',
        descripcion: 'Primera aventura del joven mago Harry Potter en el mundo mágico de Hogwarts.',
        pdfUrl: '#',
        portada: '/IMAGENES/Harry Potter.jpg',
        isFavorite: false,
        año: 1997,
        páginas: 309
    },
    {
        id: 24,
        titulo: '1984',
        autor: 'George Orwell',
        categoria: 'Ciencia Ficción',
        descripcion: 'Distopía que retrata una sociedad totalitaria controlada por el Gran Hermano.',
        pdfUrl: '#',
        portada: '/IMAGENES/1984.jpg',
        isFavorite: false,
        año: 1949,
        páginas: 328
    },
    {
        id: 25,
        titulo: 'La metamorfosis',
        autor: 'Franz Kafka',
        categoria: 'Novela',
        descripcion: 'Relato sobre Gregor Samsa, quien una mañana se despierta convertido en un insecto gigante.',
        pdfUrl: '#',
        portada: '/IMAGENES/La metamorfosis.jpg',
        isFavorite: false,
        año: 1915,
        páginas: 128
    }
];

// Elementos del DOM
const searchInput = document.querySelector('.search__input');
const booksContainer = document.querySelector('.books__container');
const categoryButtons = document.querySelectorAll('.category__btn');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');

// Función para crear una tarjeta de libro
function createBookCard(libro) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
        <img src="${libro.portada}" alt="${libro.titulo}" class="book-card__image">
        <h3 class="book-card__title">${libro.titulo}</h3>
        <p class="book-card__author">${libro.autor}</p>
        <p class="book-card__category">${libro.categoria}</p>
        <p class="book-card__description">${libro.descripcion}</p>
        <div class="book-card__actions">
            <button class="favorite-btn ${libro.isFavorite ? 'active' : ''}" data-id="${libro.id}">
                <i class="fas ${libro.isFavorite ? 'fa-heart' : 'fa-heart-o'}"></i>
            </button>
            <a href="${libro.pdfUrl}" class="book-card__read-btn" target="_blank">
                <i class="fas fa-book-reader"></i> Leer
            </a>
        </div>
    `;

    // Agregar evento para mostrar detalles
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.favorite-btn') && !e.target.closest('.book-card__read-btn')) {
            showBookDetails(libro);
        }
    });

    return card;
}

// Función para mostrar detalles del libro
function showBookDetails(libro) {
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${libro.titulo}</h2>
            <button class="modal-close" onclick="closeModal()">×</button>
        </div>
        <div class="modal-body">
            <div class="modal-book-info">
                <img src="${libro.portada}" alt="${libro.titulo}" class="modal-book-image">
                <div class="modal-book-details">
                    <p><strong>Autor:</strong> ${libro.autor}</p>
                    <p><strong>Categoría:</strong> ${libro.categoria}</p>
                    <p><strong>Año:</strong> ${libro.año}</p>
                    <p><strong>Páginas:</strong> ${libro.páginas}</p>
                    <p class="modal-description">${libro.descripcion}</p>
                    <div class="modal-actions">
                        <button class="favorite-btn ${libro.isFavorite ? 'active' : ''}" data-id="${libro.id}">
                            <i class="fas ${libro.isFavorite ? 'fa-heart' : 'fa-heart-o'}"></i>
                            ${libro.isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                        </button>
                        <a href="${libro.pdfUrl}" class="book-card__read-btn" target="_blank">
                            <i class="fas fa-book-reader"></i> Leer Libro
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Función para mostrar libros filtrados
function displayBooks(filteredBooks) {
    booksContainer.innerHTML = '';
    if (filteredBooks.length === 0) {
        booksContainer.innerHTML = '<p class="no-results">No se encontraron libros</p>';
        return;
    }
    filteredBooks.forEach(libro => {
        booksContainer.appendChild(createBookCard(libro));
    });
}

// Función para filtrar libros por búsqueda
function filterBooks(searchTerm, category) {
    return libros.filter(libro => {
        const matchesSearch = libro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            libro.autor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            libro.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === 'all' || libro.categoria === category;
        return matchesSearch && matchesCategory;
    });
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    const activeCategory = document.querySelector('.category__btn.active').dataset.category;
    const filteredBooks = filterBooks(e.target.value, activeCategory);
    displayBooks(filteredBooks);
});

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Actualizar botón activo
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filtrar y mostrar libros
        const searchTerm = searchInput.value;
        const category = button.dataset.category;
        const filteredBooks = filterBooks(searchTerm, category);
        displayBooks(filteredBooks);
    });
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Manejar favoritos
document.addEventListener('click', (e) => {
    if (e.target.closest('.favorite-btn')) {
        const button = e.target.closest('.favorite-btn');
        const bookId = parseInt(button.dataset.id);
        const libro = libros.find(b => b.id === bookId);
        if (libro) {
            libro.isFavorite = !libro.isFavorite;
            
            // Mostrar notificación
            const message = libro.isFavorite 
                ? `"${libro.titulo}" añadido a favoritos` 
                : `"${libro.titulo}" removido de favoritos`;
            showNotification(message, libro.isFavorite ? 'success' : 'info');
            
            const activeCategory = document.querySelector('.category__btn.active').dataset.category;
            const searchTerm = searchInput.value;
            const filteredBooks = filterBooks(searchTerm, activeCategory);
            displayBooks(filteredBooks);
            if (modal.style.display === 'block') {
                showBookDetails(libro);
            }
        }
    }
});

// Mostrar todos los libros al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    displayBooks(libros);
});