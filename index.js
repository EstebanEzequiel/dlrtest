const express = require('express');
const app = express();
//app.use(express.static(__dirname + '/public/'));
app.get('/', (req, res) => {
    res.send('Ejemplo Respuesta')
  })
app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
