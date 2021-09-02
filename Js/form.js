// Form
const myForm = event => {
    event.preventDefault()
    const formState = []
    let nombre = document.getElementById("nombre");
    let año = document.getElementById("año");
    let contador = 0;

    !nombre.value || (!año.value || año.value <= 1900 || año.value >= 2022) ? alert('Ingresa un título y un año válidos.') :
    formState.push({ element: 'nombre', value: nombre.value }, { element: 'año', value: año.value })

    const dato = document.getElementById('formValues')

    const html = formState.map(item => {
        let p = document.createElement('p')
        p.innerText = item.value
        dato.appendChild(p)
    })

    formState.length === 2 && contador++ && JSON.stringify(html); //Acá es donde me trabé, porque el contador nunca se acrecienta.

}