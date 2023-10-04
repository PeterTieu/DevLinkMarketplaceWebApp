//Import packages
const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"))
app.use(bodyParser.json())


//Define Mailgun credentials
var api_key = '9341eceb905c9dcaaae86792eee241c8-28e9457d-39125dac';
// var domain = 'sandboxa08223adac53429b8594ad1e983db51b.mailgun.org';
var domain = 'ptieu.mydomain.com'
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });


// //Post to the backend server
// //Get the HTML for the page
// app.get('/', (req, res) => {
//     const user = {
//         username: "Deakin",
//         password: "123"
//     }
//     res.send(user)
// })

//Get from the Client
//Define what happens when the "POST" method is called when the form is submitted
app.post('/', (req, res) => {

    //Test print to the console
    console.log(req.body)
    console.log("Test print to terminal") //Prints to terminal

    //Obtain the value typed into the email input
    const email = req.body.email

    //Collate data for preparation to send the 'welcome email'
    var data = {
        from: 'Peter <ptieu.deakin@gmail.com>',
        to: email,
        subject: 'Welcome to DevLink Marketplace!',
        text: 'Dear user,' + '\n\nWelcome to DevLink Marketplace!' +
            '\nWe are excited to have you as our new member.' +
            '\n\nKind regards, \nPeter'
    };

    //Send email via Mailgun platform
    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log("ERROR: " + error);
        }
        console.log(body);
    });

    res.send("An email has been sent to " + email)
})



//Create a server on port 9000 and listen to it
app.listen(9010, function (request, response) {
    console.log("Server is running on port 9010")
})
