const mongoose = require('mongoose');

const dbName = "musicapp";
const url = `mongodb+srv://Rinakumari:reena123@cluster0.y9x1y1c.mongodb.net/${dbName}?retryWrites=true&w=majority`;


// Promise - a special type of object which needs to be resolved
// asynchronous function - return a promise

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;