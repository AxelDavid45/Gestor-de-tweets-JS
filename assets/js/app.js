// obtenemos la lista de tweets
const ListaTweets = document.querySelector('#lista-tweets');


// Events listeners

EventListeners();


function EventListeners() {
    // obteniendo el valor del formulario
    document.querySelector('#formulario').addEventListener('submit', AgregarTweet);
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


    console.log(tweet);
    
}