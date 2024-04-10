import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
// const express = require("express");
// const { MongoClient } = require("mongodb");

// const cors = require("cors");

const app = express();
const port = 3000; // Define the port number on which the server will listen

// Use the cors middleware
app.use(cors());

// Use express.json() middleware to parse JSON bodies in requests
app.use(express.json());

// Define a route handler for GET requests to the root URL '/'
app.get("/", (req, res) => {
  res.send("Welcome to CryptoNice !");
});

// MongoDB connection string.
const uri =
  "mongodb+srv://CryptoNiceDB:BoT8pLph3Yogj7Em@cryptonicedb.6u9gmdm.mongodb.net/?retryWrites=true&w=majority&appName=CryptoNiceDB";

// Create a new MongoClient instance with the connection string
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a route handler for GET requests to '/News'
app.get("/News", async (req, res) => {
  try {
    // Connect to the MongoDB client
    await client.connect();
    const database = client.db("CryptoNice");
    const collection = database.collection("News");
    // Fetch all documents from the "News" collection
    const data = await collection.find({}).toArray();
    // Send the fetched data as a JSON response
    res.json(data);
    console.log("News request");
  } catch (error) {
    // Log and send errors if the operation fails
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    // Close the client connection after the operation is complete
    await client.close();
  }
});

// Handle insertion to "CryptoInfo" collection
app.post("/CryptoInfo", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await client.connect();
    const database = client.db("CryptoNice");
    const collection = database.collection("CryptoInfo");

    // Insert data into "CryptoInfo" collection
    await collection.insertOne({
      name: name,
      email: email,
      message: message,
    });

    res.status(201).json({ message: "Data inserted successfully" });
    console.log("CryptoInfo insertion request");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
