const express = require('express'),
    path = require('path');

const app = express(),
    bodyParser = require('body-parser'),
    router = require('./router/routes.js');
    PORT = 3080;

app.use(bodyParser.json());
app.use('/api', router)
app.use(express.static(path.join(__dirname, './client/build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(path.join(__dirname, './client/build/index.html')));
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`);
})