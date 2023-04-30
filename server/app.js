const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const app = express();

dotenv.config();

app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorizeition");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    next();
});

app.use(express.json());
app.use(morgan('dev'));

// routes
const admin = require('./src/routes/admin');
app.use('/admin' ,admin);

const subjects = require('./src/routes/subject');
app.use('/subject', subjects);

const professions = require('./src/routes/profession');
app.use('/profession', professions);

const articles = require('./src/routes/articles');
app.use('/articles', articles);

const pages = require('./src/routes/pages');
app.use('/pages', pages);


const homePage = require('./src/routes/homePage');
app.use('/home', homePage);

//modules and middlewares
const Login = require('./src/modules/login');


const port = process.env.PORT || 3050;

app.listen(port, (req, res) => {
    console.log(`server is running...`)
});


// static folders
const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));

app.get('/' , (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const message = await Login.userLogin(email, password);
        res.status(200).json(message);

    } catch (error) {
        console.log(error);
    }
});









