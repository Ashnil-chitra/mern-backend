const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use('/api/users', require('./routes/userRoutes'));

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
