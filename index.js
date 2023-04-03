const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const morgan = require("morgan")
const port = 8962
let datos = [
    {
    Imagen: 'https://www.carone.com.ar/wp-content/uploads/2021/10/renault-nuevo-kangoo-2020.png',
    Modelo:'Kangoo',
    Marca: "Renault",
    Descripcion: "Se vende un automóvil en excelentes condiciones. Este vehículo es de color azul oscuro, con un aspecto elegante y moderno. Cuenta con un motor potente y eficiente de cuatro cilindros, lo que lo convierte en un auto divertido de conducir. ",
    Año: "2013",
    Kilometros: "400.000"
    },
    {
        Imagen: "https://www.staging.carone.com.ar/wp-content/uploads/2021/09/vw-gol-2021.png",
    Modelo: "Gol",
    Marca: "Volkswagen",
    Descripcion: "Viejo auto clásico en venta con historia judicial. Un tesoro para coleccionistas.",
    Año: "2000",
    Kilometros: "77.777"
    },
    {
        Imagen: "https://media.toyota.com.ar/16dfefb9-e905-4656-8084-703afe4bcc76.png",
        Modelo: "Etios",
        Marca: "Toyota",
        Descripcion: "Aunque este automóvil pueda presentar algunos daños visibles y no funcione actualmente, es importante destacar que tiene un gran potencial. Este coche cuenta con un diseño deportivo y elegante que sin duda atraerá la atención de muchos admiradores de vehículos. ",
        Año: "2022",
        Kilometros: "240"
    },
    {
        Imagen: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHkCFGe8ysJSnJhUwAlW4MXFl5iamp-qDBPgZuYssdFMrSnTzUnPz2YHSfDxx82OvGmYdv7P9odeX-UEuL9jvPBNn4JG80c5idmnvwdZ5rgwT-Nb8-CLL6sPA80Ljz3ynLG9X55KNxmkmK6rP_I85ysDDa3x7zo9_LDP1Pj_UUr3v_Yxjg5s2A8-MJyEt65yrn0119Z3L518bciD7fCcDTxCz1fvu0JJWKYF9l_j8Dz1mmz9zIgNPBuPMFeeOTFT5uu3h5VpjA8cN328C3eBSWnq15cu9uD38u77f-HyweolJyCYGnrYY8XKRUnPBmOJb6e_al5lxiDFnMPDsrVD8zRJnIXDzyYnLnX9PyqZftxAE-mLb95P758kv3-XpdrKVa2rDfnGW7Qw8r6fW-q0pU3kZI7RXxsLVqtQuOnM3Aw_DA72seu0VTJP1jL5sV1p2aXfI8ucMPJ1X3V-mBMfM5JHmyfJ4N3leDNPScwyswIBl2g0kWOKABM8TIMFhwwAmQUG-AUgwLgTxWeuZGRi4HRgY2EIYQIBPuLQopyCxKDFXryi1uCA_rzizLFVQw4BIIMzq4xjpGgQAa47rIxACAAA?mimetype=image/png",
        Modelo: "R8 Coupé",
        Marca: "Audi",
        Descripcion: "Este vehículo, ha sido debidamente probado y testeado para tu mayor tranquilidad. No obstante, te damos la posibilidad de que tu perito de confianza realice la revisión que crea conveniente.",
        Año: "2011",
        Kilometros: "19.312"
    },
    {
        Imagen: "https://toro.fiat.com.ar/static/media/toroFreedom.9095dc31.png",
        Modelo: "Toro",
        Marca: "Fiat",
        Descripcion: "Impecable estado. Servicios oficiales. Única mano, aceptamos permutas.",
        Año: "2019",
        Kilometros: "56.000"
    },
    {
        Imagen: "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cruze-5-premier/mov/04-images/enero-21/chevrolet-cruze-final.png?imwidth=960",
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
