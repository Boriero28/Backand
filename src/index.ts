import 'reflect-metadata';


import app from './app';
import mongoose from 'mongoose';

mongoose.set('debug', true);
// mongoose.connect('mongodb://127.0.0.1:27017/Esame_DB')
mongoose.connect('mongodb+srv://davideboriero:DavideBoriero03@cluster0.s6pvfod.mongodb.net/')
  .then(_ => {
    console.log('Connected to db');
    app.listen(3000, () => {
      console.log(`Server running on port 3000`);
  });
  })
  .catch(err => {
    console.error(err);
  })
