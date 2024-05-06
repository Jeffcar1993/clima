let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

let api_Key = 'fea74a3380c5e72966365e7df40c9c8b'

let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
        if (ciudad) {
            fetchDatosClima (ciudad)
        }
}  )

function fetchDatosClima (ciudad) {
    fetch (`${urlBase}?q=${ciudad}&appid=${api_Key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima (data) {
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad = data.main.humidity
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `la temperatura es ${Math.floor(temperatura - difKelvin)}ºC`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `la humedad es ${humedad}%`

    const iconoInfo = document.createElement ('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `la descripción meteorologica es ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(humedadInfo)
}




   