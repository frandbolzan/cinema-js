const form = document.getElementById('form')
const movieContainer = document.getElementById('movies')
let movieState = []
let i = 0

const printMovieAndYear = movieState => {
    const li = document.createElement('li')

    for(i; i < movieState.length; i++){
        li.appendChild(document.createTextNode(`${movieState[i].movie} - ${movieState[i].year}`))
        movieContainer.appendChild(li)
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()
    const movieName = document.querySelector('#nombre').value
    const movieYear = document.querySelector('#año').value
    const message = document.querySelector('#message')

    movieState.push({movie: movieName, year: movieYear})
    movieState.length <= 5 && printMovieAndYear(movieState)
    movieState.length === 5 && message.appendChild(document.createTextNode('¡Tenés muy buenos gustos!'))
})