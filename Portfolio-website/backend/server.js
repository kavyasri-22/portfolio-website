const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://kavyasripsr_db_user:rqHF2BnGwV4Curhp@cluster0.tm93efh.mongodb.net/portfolioDB?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log(err));

const projectSchema = new mongoose.Schema({
  name: String,
  desc: String,
  link: String
});

const Project = mongoose.model('Project', projectSchema);

app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});