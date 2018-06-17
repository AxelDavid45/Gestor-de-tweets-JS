// obtenemos la lista de tweets
const ListaTweets = document.querySelector('#lista-tweets');


// Events listeners

EventListeners();


function EventListeners() {
    // obteniendo el valor del formulario
    document.querySelector('#formulario').addEventListener('submit', AgregarTweet);

    // evento con delegation para borrar tweet
    ListaTweets.addEventListener('click', BorrarTweet);
    // Evento que carga los tweets en el localStorage
    document.addEventListener('DOMContentLoaded', LocalStorageListo);
}


// funciones
function AgregarTweet(e) {
    // evitando que nos mande a otro lado el submit
    e.preventDefault();

    // valor del textarea
    const tweet = document.querySelector('#tweet').value;
    // creamos el elemento
    const li = document.createElement('li');
    // Boton de borrar
    const BtnBorrar = document.createElement('a');
    // le agregamos una clase
    BtnBorrar.classList.add('borrar-tweet');
    // Le ponemos contenido
    BtnBorrar.innerText = 'X';
    // Le pasamos el valor del tweet
    li.innerText = tweet;
    // Lo ponemos en el li
    li.appendChild(BtnBorrar);
    // Le agregamos una clase css
    li.classList.add('Tarea');
    // Lo ponemos en nuestro contenedor
    ListaTweets.appendChild(li);

    agregarTweetLocalStorage(tweet);

    // Llamamos la funcion que muestra el mensaje
    MostrarAlerta('Tweet agregado exitosamente', 'Agregado');

}
// Funcion de mostrar tweets en el localstorage
function LocalStorageListo() {
    let tweets;
    // Llamamos la funcion para obtener los tweets de localstorage
    tweets = obtenerTweetsLocalstorage();

    // Usamos forEach para que a cada elemento del array se inserte en el dom al cargar.
    tweets.forEach(function (tweet) {
        // creamos el elemento
        const li = document.createElement('li');
        // Boton de borrar
        const BtnBorrar = document.createElement('a');
        // le agregamos una clase
        BtnBorrar.classList.add('borrar-tweet');
        // Le ponemos contenido
        BtnBorrar.innerText = 'X';
        // Le pasamos el valor del tweet
        li.innerText = tweet;
        // Lo ponemos en el li
        li.appendChild(BtnBorrar);
        // Le agregamos una clase css
        li.classList.add('Tarea');
        // Lo ponemos en nuestro contenedor
        ListaTweets.appendChild(li);
    });

}


// funcion borrar tweet usando delegation
function BorrarTweet(e) {
    e.preventDefault;

    if (e.target.className === 'borrar-tweet') {
        e.target.parentNode.remove();
    }

    MostrarAlerta('Tweet borrado exitosamente', 'Eliminado');
}

// Mostrar alerta

function MostrarAlerta(mensaje, clase) {
    const div = document.createElement('div');
    // le ponemos clases a nuestro div 
    div.className = `ContenedorMensaje row ${clase}`;
    // le agregamos el mensaje que nos pasan por la funcion
    div.innerText = mensaje;

    // seleccionamos los elementos que nos ayudan a colocar el div nuevo
    const contenido = document.querySelector('#contenido');
    const app = document.querySelector('#app');

    // inserta el contenido nuevo en la parte superior del titulo
    contenido.insertBefore(div, app);

    // remueve el elemento en 2.2 segundos
    setTimeout(function () {
        document.querySelector('.ContenedorMensaje').remove();

    }, 1200);
}

// Esta funcion agrega al LocalStorage los tweets 
function agregarTweetLocalStorage(tweet) {
    let tweets;
    // ejecuta la funcion de obtener los tweets del localstorage
    tweets = obtenerTweetsLocalstorage();
    // agrega el nuevo tweet al arreglo que viene del local storage
    tweets.push(tweet);
    // convierte  el tweet a un json
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprueba los tweets de local storage, retorna un arreglo
function obtenerTweetsLocalstorage() {
    let tweets;

    // comprueba que exista el valor de tweets o no
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    // esta funcion regresa el valor de los tweets
    return tweets;
}

// funcion para borrar del localstorage un tweet