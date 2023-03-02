const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/mongoose');

// app.get('/test', (req, res) => {
//     return res.send({ test: 'msg' });
// });
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use('/', require('./routes'));

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err, 'Error while running server !');
    }
    console.log('Server running on port ', process.env.PORT);
    return;
});
