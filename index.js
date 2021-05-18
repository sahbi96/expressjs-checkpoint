// const express = require("express");
// const app = express();

// const port = 5500;
// app.use(express.static('Open'));


// // app.use(express.static("/Open/Home.html"));
// // app.use(express.static("/Open/Services.html"));
// // app.use(express.static("/Open/Contact.html"));
// // app.use(express.static("/Closed/closing.html"));
// let hours = 24;
// let day = 7;

// if (hours > 9 && hours < 19 && day < 6 && day > 0) {
//   app.use('./Open/Home.html');
//   app.use('./Open/Contact.html');
//   app.use('./Open/Services.html');
// } else {
//   app.use('./Closed/closing.html');
// }

// app.listen(5500, (err) => {
//  err ? console.log(err) :
//     console.log(`server running on port 5500`);
// });


const timeCheck = require("./Open/middleware")
const express = require("express");
const moment = require("moment");
const app = express();

app.get('/closing.html',(req,res)=>{
  res.sendFile(__dirname+'/Open/closing.html')
})

app.use(timeCheck)
app.use(express.static(__dirname + '/Open'));




const port = 5500;
app.listen(port, () => {
  
    console.log('server running on port 5500');
});









