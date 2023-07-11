const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 
// // Our pug demo endpoint
// app.get("/demo", (req, res)=>{ 
//     res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
// });

// app.get("/", (req, res)=>{ 
//     res.status(200).send("This is homepage of my first express app with Harry");
// });

// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first express app with Harry");
// });

// app.post("/about", (req, res)=>{
//     res.send("This is a post request about page of my first express app with Harry");
// });
// app.get("/this", (req, res)=>{
//     res.status(404).send("This page is not found on my website cwh");
// });
//ENDPOINTS
const con = "This is the best content onn the internet so far so use it wisely"
app.get('/',(req, res)=>{
    const params = {'title':'PUBG is the best game',"content":con}
    res.status(200).render('index.pug',params)
})
app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more =req.body.more
    let outputToWrite =`the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}.More about him/her: ${more}`
    fs.writeFileSync ('output.txt', outputToWrite)
    const params = {'message':'your form has been submitted successfully'}
    res.status(200).render('index.pug',params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
