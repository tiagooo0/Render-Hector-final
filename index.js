const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const morgan = require("morgan")
const port = 8962
let datos = [
    {
    Modelo:'Kangoo',
    Marca: "Renault",
    Descripcion: "Se vende un automóvil en excelentes condiciones. Este vehículo es de color azul oscuro, con un aspecto elegante y moderno. Cuenta con un motor potente y eficiente de cuatro cilindros, lo que lo convierte en un auto divertido de conducir. ",
    Año: "2013",
    Kilometros: "400.000"
    },
    {
    Modelo: "Gol",
    Marca: "Volkswagen",
    Descripcion: "Viejo auto clásico en venta con historia judicial. Un tesoro para coleccionistas.",
    Año: "2000",
    Kilometros: "77.777"
    },
    {
        Modelo: "Etios",
        Marca: "Toyota",
        Descripcion: "Aunque este automóvil pueda presentar algunos daños visibles y no funcione actualmente, es importante destacar que tiene un gran potencial. Este coche cuenta con un diseño deportivo y elegante que sin duda atraerá la atención de muchos admiradores de vehículos. ",
        Año: "2022",
        Kilometros: "240"
    },
    {
        Modelo: "R8 Coupé",
        Marca: "Audi",
        Descripcion: "Este vehículo, ha sido debidamente probado y testeado para tu mayor tranquilidad. No obstante, te damos la posibilidad de que tu perito de confianza realice la revisión que crea conveniente.",
        Año: "2011",
        Kilometros: "19.312"
    },
    {
        Modelo: "Toro",
        Marca: "Fiat",
        Descripcion: "Impecable estado. Servicios oficiales. Única mano, aceptamos permutas.",
        Año: "2019",
        Kilometros: "56.000"
    },
    {
        Modelo: "Cruze",
        Marca: "Chevrolet",
        Descripcion: "Además de la potencia de su motor turbo, la seguridad más avanzada, todo su confort y la exclusiva tecnología Wi-Fi, en el Nuevo Cruze disfrutás de la unión perfecta entre lo digital y lo analógico en un auto con lo mejor de los dos mundos. Encontrá tu camino con un auto tan único como la generación que lo inspiró.",
        Año: "2023",
        Kilometros: "0"
    },
]

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('modelHome', {datos})
    
})

app.get('/Cars', (req, res) => {
    res.render('model', {datos})
    
})



app.listen(port, () => {
    console.log('Servidor iniciado en el puerto ' + port);
});
