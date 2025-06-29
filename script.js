// Datos de ejemplo de libros
const books = [
    {
        id: 1,
        title: 'Don Quijote de la Mancha',
        author: 'Miguel de Cervantes',
        description: 'La obra cumbre de la literatura española',
        category: 'Clásicos',
        isFavorite: false
    },
    {
        id: 2,
        title: 'Cien años de soledad',
        author: 'Gabriel García Márquez',
        description: 'La saga de la familia Buendía en Macondo',
        category: 'Realismo Mágico',
        isFavorite: false
    },
    {
        id: 3,
        title: 'Rayuela',
        author: 'Julio Cortázar',
        description: 'Una novela que se puede leer de múltiples formas',
        category: 'Novela',
        isFavorite: false
    },
    {
        id: 4,
        title: 'Veinte poemas de amor',
        author: 'Pablo Neruda',
        description: 'Colección de poemas románticos',
        category: 'Poesía',
        isFavorite: false
    }
];

// Citas literarias
const quotes = [
    {
        text: 'Un libro es un sueño que tienes en tus manos',
        author: 'Neil Gaiman'
    },
    {
        text: 'La lectura es un viaje de los ojos y la mente',
        author: 'Jorge Luis Borges'
    },
    {
        text: 'Los libros son espejos: sólo ves en ellos lo que ya llevas dentro',
        author: 'Carlos Ruiz Zafón'
    }
];

// Elementos del DOM
const searchInput = document.querySelector('.search__input');
const booksContainer = document.querySelector('.books__container');
const categoryButtons = document.querySelectorAll('.category__btn');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const quoteText = document.querySelector('.quote__text');
const quoteAuthor = document.querySelector('.quote__author');
const featuredSlider = document.querySelector('.featured-slider');

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

// Función para crear una tarjeta de libro
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
        <h3 class="book-card__title">${book.title}</h3>
        <p class="book-card__author">${book.author}</p>
        <p class="book-card__description">${book.description}</p>
        <button class="favorite-btn ${book.isFavorite ? 'active' : ''}" data-id="${book.id}">
            <i class="fas ${book.isFavorite ? 'fa-heart' : 'fa-heart-o'}"></i>
        </button>
    `;

    card.addEventListener('click', () => showBookDetails(book));
    return card;
}

// Función para mostrar detalles del libro
function showBookDetails(book) {
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${book.title}</h2>
            <button class="modal-close" onclick="closeModal()">×</button>
        </div>
        <div class="modal-body">
            <p><strong>Autor:</strong> ${book.author}</p>
            <p><strong>Categoría:</strong> ${book.category}</p>
            <p>${book.description}</p>
            <button class="favorite-btn ${book.isFavorite ? 'active' : ''}" data-id="${book.id}">
                ${book.isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            </button>
        </div>
    `;
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Función para mostrar libros filtrados
function displayFilteredBooks(filteredBooks) {
    booksContainer.innerHTML = '';
    if (filteredBooks.length === 0) {
        booksContainer.innerHTML = '<p class="no-results">No se encontraron libros</p>';
        return;
    }
    filteredBooks.forEach(book => {
        booksContainer.appendChild(createBookCard(book));
    });
}

// Función para mostrar una cita aleatoria
function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

// Función para mostrar libros destacados
function displayFeaturedBooks() {
    const featured = books.slice(0, 2); // Mostrar los primeros 2 libros como destacados
    featuredSlider.innerHTML = '';
    featured.forEach(book => {
        featuredSlider.appendChild(createBookCard(book));
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayFilteredBooks(books);
    displayRandomQuote();
    displayFeaturedBooks();
});

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
    displayFilteredBooks(filteredBooks);
});

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filteredBooks = category === 'all' 
            ? books 
            : books.filter(book => book.category === category);
        displayFilteredBooks(filteredBooks);
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
        const book = books.find(b => b.id === bookId);
        if (book) {
            book.isFavorite = !book.isFavorite;
            
            // Mostrar notificación
            const message = book.isFavorite 
                ? `"${book.title}" añadido a favoritos` 
                : `"${book.title}" removido de favoritos`;
            showNotification(message, book.isFavorite ? 'success' : 'info');
            
            displayFilteredBooks(books);
            if (modal.style.display === 'block') {
                showBookDetails(book);
            }
        }
    }
});