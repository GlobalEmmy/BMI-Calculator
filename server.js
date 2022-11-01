const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let bmi = Math.round(weight/(Math.pow(height, 2)))
    if (bmi < 18.5){
         res.render("Underweight", {BMI: bmi})
    }else if(bmi >= 18.5 && bmi <= 24.9 ){
         res.render("Normal", {BMI: bmi})
    } else if(bmi >= 25 && bmi <= 29.9){
         res.render("Overweight", {BMI: bmi})
    } else if (bmi > 30) {
     res.render("Obese", {BMI: bmi})

    } else{
         res.render("Error")
    };  
})
app.listen(port, ()=> {
    console.log(`Server running successfully on port: ${port}`)
});