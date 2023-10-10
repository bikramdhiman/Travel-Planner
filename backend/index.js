const express = require("express");
const PORT = 5555;
const mongoose = require("mongoose");
const mongo_url = "mongodb://localhost:27017/newtrips";
const Book = require("./models/tripmodel");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.send("Welcome");
});
// add new trip
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        meassage: "Send all required:title,author",
      });
    }
    const newtrip = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const trip = await Book.create(newtrip);
    return res.send(trip);
  } catch (error) {
    console.error(error.meassage);
    res.send({ meassage: error.message });
  }
});
//show all trips
app.get("/books", async (req, res) => {
  try {
    const trips = await Book.find({});
    return res.status(200).json({
      count: trips.length,
      data: trips,
    });
  } catch (error) {
    console.log(error.messsage);
    res.send({ message: error.message });
  }
});
// route for get one book from database by id
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const trips = await Book.findById(id);
    return res.json(trips);
  } catch (error) {
    console.log(error.message);
    res.send({ nessage: error.message });
  }
});
//route for delete a book
app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.json({ message: "Book not found" });
    }
    return res.send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message });
  }
});
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
