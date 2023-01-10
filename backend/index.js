// Main File to run and manage backend server
const express = require('express');

const userRouter = require('./routers/userRouter');
const musicRouter = require('./routers/musicRouter');
const utilRouter = require('./routers/utils');

const cors = require('cors');

const app = express();

const port = 5000;

// middleware
// for converting json data to javascript object
app.use(express.json());
app.use(cors({
    origin : 'http://localhost:3000'
}))

app.use('/user', userRouter);
app.use('/music', musicRouter);
app.use('/util', utilRouter);


// processing the request

// route or endpoint
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/home', (req, res) => {
    res.send('response from home');
})

// app.get('*', (req, res) => {
//     res.send('404 invalid route');
// })

// starting the express server
app.listen(port, () => {
    console.log('express server started');
});