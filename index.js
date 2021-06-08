const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const transporter = require("./include/sendMail");

app
.use(express.static(path.join(__dirname, '')))
.use(express.urlencoded({extended: false}))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('index'))


.listen(PORT, () => console.log(`Listening on ${ PORT }`))
