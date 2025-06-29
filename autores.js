// Datos de los autores destacados
const autores = [
    {
        id: 1,
        nombre: 'Miguel de Cervantes',
        biografia: 'Soldado, novelista, poeta y dramaturgo español. Es considerado la máxima figura de la literatura española y universalmente conocido por haber escrito Don Quijote de la Mancha.',
        fraseCelebre: '"La pluma es la lengua del alma."',
        imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
        libros: ['Don Quijote de la Mancha', 'Novelas Ejemplares', 'La Galatea'],
        firma: '<i class="fas fa-feather-alt"></i>',
        nacionalidad: 'Español',
        época: 'Siglo de Oro'
    },
    {
        id: 2,
        nombre: 'Gabriel García Márquez',
        biografia: 'Escritor colombiano, premio Nobel de Literatura en 1982. Máximo exponente del realismo mágico. Su obra ha sido traducida a más de 40 idiomas.',
        fraseCelebre: '"La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla."',
        imagen: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=200&fit=crop&crop=face',
        libros: ['Cien años de soledad', 'El amor en los tiempos del cólera', 'Crónica de una muerte anunciada'],
        firma: '<i class="fas fa-feather"></i>',
        nacionalidad: 'Colombiano',
        época: 'Siglo XX'
    },
    {
        id: 3,
        nombre: 'Jorge Luis Borges',
        biografia: 'Escritor argentino, uno de los autores más importantes de la literatura del siglo XX. Su obra abarca cuentos, ensayos y poesía con temas filosóficos.',
        fraseCelebre: '"He cometido el peor pecado que uno puede cometer. No he sido feliz."',
        imagen: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200&h=200&fit=crop&crop=face',
        libros: ['Ficciones', 'El Aleph', 'El libro de arena'],
        firma: '<i class="fas fa-pen-fancy"></i>',
        nacionalidad: 'Argentino',
        época: 'Siglo XX'
    },
    {
        id: 4,
        nombre: 'Pablo Neruda',
        biografia: 'Poeta chileno, premio Nobel de Literatura en 1971. Considerado entre los mejores y más influyentes artistas de su siglo. Su poesía abarca temas políticos y amorosos.',
        fraseCelebre: '"Podrán cortar todas las flores, pero no podrán detener la primavera."',
        imagen: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop&crop=face',
        libros: ['Veinte poemas de amor', 'Residencia en la tierra', 'Canto general'],
        firma: '<i class="fas fa-pen-nib"></i>',
        nacionalidad: 'Chileno',
        época: 'Siglo XX'
    },
    {
        id: 5,
        nombre: 'Julio Cortázar',
        biografia: 'Escritor argentino, uno de los autores más innovadores de la literatura hispanoamericana. Su obra incluye novelas, cuentos y poesía experimental.',
        fraseCelebre: '"Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos."',
        imagen: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop&crop=face',
        libros: ['Rayuela', 'Bestiario', 'Final del juego'],
        firma: '<i class="fas fa-magic"></i>',
        nacionalidad: 'Argentino',
        época: 'Siglo XX'
    },
    {
        id: 6,
        nombre: 'Juan Rulfo',
        biografia: 'Escritor mexicano, autor de Pedro Páramo y El llano en llamas. Su obra, aunque breve, es considerada fundamental en la literatura hispanoamericana.',
        fraseCelebre: '"El llano está lleno de voces que no se pueden entender."',
        imagen: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=200&fit=crop&crop=face',
        libros: ['Pedro Páramo', 'El llano en llamas', 'La cordillera'],
        firma: '<i class="fas fa-mountain"></i>',
        nacionalidad: 'Mexicano',
        época: 'Siglo XX'
    },
    {
        id: 7,
        nombre: 'Mario Vargas Llosa',
        biografia: 'Escritor peruano, premio Nobel de Literatura en 2010. Uno de los más importantes novelistas y ensayistas de la literatura hispanoamericana contemporánea.',
        fraseCelebre: '"La literatura es fuego, es subversión de la razón, es ruptura de los códigos establecidos."',
        imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
        libros: ['La ciudad y los perros', 'Conversación en La Catedral', 'La casa verde'],
        firma: '<i class="fas fa-crown"></i>',
        nacionalidad: 'Peruano',
        época: 'Siglo XX-XXI'
    },
    {
        id: 8,
        nombre: 'Isabel Allende',
        biografia: 'Escritora chilena, una de las autoras más leídas en el mundo. Su obra combina realismo mágico con temas sociales y políticos.',
        fraseCelebre: '"Escribo para entender la vida y para que otros entiendan la mía."',
        imagen: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=200&fit=crop&crop=face',
        libros: ['La casa de los espíritus', 'Eva Luna', 'De amor y de sombra'],
        firma: '<i class="fas fa-heart"></i>',
        nacionalidad: 'Chilena',
        época: 'Siglo XX-XXI'
    },
    {
        id: 9,
        nombre: 'Octavio Paz',
        biografia: 'Poeta y ensayista mexicano, premio Nobel de Literatura en 1990. Su obra abarca poesía, ensayo y crítica literaria.',
        fraseCelebre: '"La poesía es la memoria de los pueblos y la conciencia de la humanidad."',
        imagen: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200&h=200&fit=crop&crop=face',
        libros: ['El laberinto de la soledad', 'Piedra de sol', 'Libertad bajo palabra'],
        firma: '<i class="fas fa-sun"></i>',
        nacionalidad: 'Mexicano',
        época: 'Siglo XX'
    },
    {
        id: 10,
        nombre: 'Roberto Bolaño',
        biografia: 'Escritor chileno, considerado uno de los autores más importantes de la literatura latinoamericana de finales del siglo XX.',
        fraseCelebre: '"La literatura es peligrosa, pero no tanto como la vida."',
        imagen: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop&crop=face',
        libros: ['Los detectives salvajes', '2666', 'Estrella distante'],
        firma: '<i class="fas fa-star"></i>',
        nacionalidad: 'Chileno',
        época: 'Siglo XX-XXI'
    },
    {
        id: 11,
        nombre: 'Ernesto Sábato',
        biografia: 'Escritor argentino, autor de obras fundamentales como "El túnel" y "Sobre héroes y tumbas". Su obra explora la condición humana.',
        fraseCelebre: '"La literatura es la forma más alta de la mentira."',
        imagen: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop&crop=face',
        libros: ['El túnel', 'Sobre héroes y tumbas', 'Abaddón el exterminador'],
        firma: '<i class="fas fa-eye"></i>',
        nacionalidad: 'Argentino',
        época: 'Siglo XX'
    },
    {
        id: 12,
        nombre: 'Mario Benedetti',
        biografia: 'Escritor uruguayo, uno de los poetas y novelistas más populares de América Latina. Su obra refleja la vida cotidiana y los problemas sociales.',
        fraseCelebre: '"Cuando creíamos que teníamos todas las respuestas, de pronto cambiaron todas las preguntas."',
        imagen: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=200&fit=crop&crop=face',
        libros: ['La tregua', 'Gracias por el fuego', 'El cumpleaños de Juan Ángel'],
        firma: '<i class="fas fa-coffee"></i>',
        nacionalidad: 'Uruguayo',
        época: 'Siglo XX'
    }
];

// Elemento contenedor de autores
const authorsContainer = document.querySelector('.authors__container');

// Función para crear una tarjeta de autor
function createAuthorCard(autor) {
    const card = document.createElement('div');
    card.className = 'author-card';
    
    const librosHTML = autor.libros
        .map(libro => `<li class="author-card__book"><i class="fas fa-book"></i> ${libro}</li>`)
        .join('');

    card.innerHTML = `
        <div class="author-card__header">
            ${autor.firma}
            <img src="${autor.imagen}" alt="${autor.nombre}" class="author-card__image">
        </div>
        <div class="author-card__content">
            <h3 class="author-card__name">${autor.nombre}</h3>
            <div class="author-card__meta">
                <span class="author-card__nationality">${autor.nacionalidad}</span>
                <span class="author-card__era">${autor.época}</span>
            </div>
            <p class="author-card__quote">${autor.fraseCelebre}</p>
            <p class="author-card__bio">${autor.biografia}</p>
            <div class="author-card__books">
                <h4 class="author-card__books-title">Obras Destacadas</h4>
                <ul class="author-card__books-list">
                    ${librosHTML}
                </ul>
            </div>
        </div>
    `;

    // Efecto hover para la firma
    const firma = card.querySelector('.author-card__header');
    firma.addEventListener('mouseenter', () => {
        firma.style.transform = 'scale(1.05)';
    });
    firma.addEventListener('mouseleave', () => {
        firma.style.transform = 'scale(1)';
    });

    // Agregar evento de clic para mostrar más detalles
    card.addEventListener('click', () => {
        showAuthorDetails(autor);
    });

    return card;
}

// Función para mostrar detalles del autor
function showAuthorDetails(autor) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal__content">
            <div class="modal-header">
                <h2>${autor.nombre}</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <div class="author-detail-info">
                    <img src="${autor.imagen}" alt="${autor.nombre}" class="author-detail-image">
                    <div class="author-detail-content">
                        <div class="author-detail-meta">
                            <p><strong>Nacionalidad:</strong> ${autor.nacionalidad}</p>
                            <p><strong>Época:</strong> ${autor.época}</p>
                        </div>
                        <p class="author-detail-quote">${autor.fraseCelebre}</p>
                        <p class="author-detail-bio">${autor.biografia}</p>
                        <div class="author-detail-books">
                            <h4>Obras Completas</h4>
                            <ul>
                                ${autor.libros.map(libro => `<li><i class="fas fa-book"></i> ${libro}</li>`).join('')}
                            </ul>
                        </div>
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

// Función para mostrar todos los autores
function displayAuthors() {
    authorsContainer.innerHTML = '';
    autores.forEach(autor => {
        authorsContainer.appendChild(createAuthorCard(autor));
    });
}

// Mostrar autores al cargar la página
document.addEventListener('DOMContentLoaded', displayAuthors);