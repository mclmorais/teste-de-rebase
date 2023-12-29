import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

// Read the JSON database file
const database = JSON.parse(fs.readFileSync('database.json', 'utf8'));

// Define a route to get all values from the database
app.get('/values', (req, res) => {
    res.json(database);
});

app.get('/values/:id', (req, res) => {
    res.json(database.find((value: any) => value.id === Number(req.params.id)))
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
