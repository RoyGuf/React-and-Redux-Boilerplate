import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Author Schema
const Course = new Schema({
    title: { type: 'String'},
    watchHref: { type: 'String'},
    authorId: { type: 'String' },
    length: { type: 'String'},
    category: { type: 'String' }
  });
  
export default mongoose.model('Course', Course);