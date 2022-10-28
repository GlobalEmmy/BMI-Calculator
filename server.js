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
         res.send(`Your bmi is: ${bmi}. You are underweight.`);
    }else if(bmi >= 18.5 && bmi <= 24.5 ){
         res.send(`Your bmi is: ${bmi}. You are within the normal weight range.`);
    } else if(bmi >= 25 && bmi <= 29.9){
         res.send(`Your bmi is: ${bmi}. You are within the overweight range.`);
    }else{
         res.send(`Your bmi is: ${bmi}. You are within the obese range.`);

    };  
})
app.listen(port, ()=> {
    console.log(`Server running successfully on port: ${port}`)
});