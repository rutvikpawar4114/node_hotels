const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const Person = require("./models/person");

const MenuItem = require("./models/MenuItems");

app.get("/", function (req, res) {
  res.send("Welcome to my hotel. What can I help you with?");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
  // Create a new Person document using the Mongoose model
    const newPerson = new Person(data);

    // Save the person to database
    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


// GET method to get the person
app.get("/person", async (req, res) => {
  try {
    const response = await Person.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.post("/menu", async (req,res) => {
  try{
  const data = req.body;
  const newMenu = new MenuItem(data);
  const response = await newMenu.save();
  console.log("Data Saved");
  res.status(200).json(response);
  }
   catch(err){
    console.log(err);
    res.status(500).json({error: "Internal server error"});
  }
})


// GET method to get the Menu
app.get("/menu",async(req,res) => {
  try{
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: "Internal server error"});
  }
})


app.get("/person/workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType === "chef" || workType === "anager" || workType === "waiter") {
      const response = await Person.find({ work: workType });
      console.log("Response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
