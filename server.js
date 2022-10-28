const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let bmi = Math.round(weight/(Math.pow(height, 2)))
    if (bmi < 18.5){
         res.send( `<h1>Your bmi is: ${bmi}. You are underweight.</h1>`);
    }else if(bmi >= 18.5 && bmi <= 24.5 ){
         res.send(`<h1>Your bmi is: ${bmi}. You are within the normal weight range.</h1>`);
    } else if(bmi >= 25 && bmi <= 29.9){
         res.send(`<h1>Your bmi is: ${bmi}. You are within the overweight range.</h1>`);
    }else{
         res.send(`<h1>Your bmi is: ${bmi}. You are within the obese range.</h1>`);

    };  
})
app.listen(port, ()=> {
    console.log(`Server running successfully on port: ${port}`)
});