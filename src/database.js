import mongoose from 'mongoose';

/* eslint-disable no-console */
mongoose.connect('mongodb://localhost:27017', () => {
    console.log('HIIII!!!!!'); 
});