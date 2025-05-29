const express = require('express');
const PORT = 8080;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const { getStoredNotes,storeNotes } = require('./functions')

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/notes',async(req,res)=>{
    const storedNotes= await getStoredNotes();
    res.json({notes:storedNotes});
});

app.get('/notes/:id',async(req,res)=>{
    const storedNotes = await getStoredNotes();
    const note = storedNotes.find((note)=>note.id==req.params.id)
    res.json({note});
});


app.post('/notes', async (req, res) => {
  const existingNotes = await getStoredNotes();
  const noteBody = req.body;

  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  const newNote = {
    ...noteBody,
    id: Math.random().toString(),
    date:date,
    time:time
  };

  const updatedNotes = [newNote, ...existingNotes];
  await storeNotes(updatedNotes);

  res.status(201).json({ message: 'Stored new note', note: newNote });
});


app.listen(PORT);