const express = require("express");
const Employe = require("./model/models");
const connectDB = require("./db");

const app = express();
const PORT = 4000;



// Connect to the database
connectDB();

const getRandom =(arr)=>{
   let rno = Math.floor(Math.random()*(arr.length-1))
   return arr[rno];
}



app.get('/generate', async (req, res) => {
   let randomNames = ['Rohan', 'Mohan', 'Shoan', 'Abhishek', 'Satyam'];
   let randomLang = ['Python', 'C++', 'C#', 'Java', 'JavaScript'];
   let randomCities = ['Lucknow', 'Barabanki', 'Hazratganj', 'Aminabad', 'Ramnagar'];
   
   for (let i = 0; i < 10; i++) {
       let employee = await Employe.create({
           name: getRandom(randomNames),
           salary: Math.floor(Math.random() * 22000),  // Correct salary generation
           language: getRandom(randomLang),
           city: getRandom(randomCities),
           isManager: Math.random() > 0.5  // Adjust logic to generate true/false randomly
       });
       console.log(employee);
   }
   
   res.send("10 employees generated successfully");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error("Error starting server:", err);
});