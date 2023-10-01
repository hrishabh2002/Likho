const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
var params = require('params');

const app = express();

app.use(express.json());
app.use(cors());

const PORT=8000;

mongoose.connect('mongodb+srv://hrishabhyadav:bONemkNT7wdzNzLr@cluster0.e0m1zap.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

const noteSchema = new mongoose.Schema({
  author: String,
  title: String,
  body:{
    type: String,
    required: true,
  },
  uid: String,
});

const Note = mongoose.model('note', noteSchema);

app.post('/blogs',async(req,res)=>{
  try{
    const msg=req.body;
    const newBlog=new Note(msg);
    await newBlog.save();
    res.status(200).json({message:user})
  }catch(error){
    console.log('blog posting');
      res.status(500).json({message:error.message});
  }
});

app.get('/blogs', async (req, res) => {
  try {
   
    const files = await Note.find({});
    res.status(200).send(files);
  } catch (err) {
    
    console.log(err);
    res.status(500).send({ message: 'Server error' });
  }
});

app.get('/blogs/:id', async (req, res) => {
  try {
    const id=req.params.id;
    const files = await Note.find({uid:id});
    res.status(200).send(files);
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
  }
});

app.delete('/blogs/:id', async (req, res) => {
  const id  = req.params.id;
  try {
    const record = await Note.find({uid:id});
    if (!record) {
      return res.status(404).send({ message: 'No such blog exist' });
    }
    await Note.deleteOne({uid:id});
    res.send({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Failed to delete the blog from the database' });
  }
});



app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
});

