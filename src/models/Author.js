import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Author Schema
const Author = new Schema({
    firstName: { type: 'String'},
    lastName: { type: 'String'}
  });
  
export default mongoose.model('Author', Author);