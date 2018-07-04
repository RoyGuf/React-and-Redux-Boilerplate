import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import Course from './models/Course';
import Author from './models/Author';

/* eslint-disable no-console */
//Connecting to MongoDB on port 27017
mongoose.connect('mongodb://localhost:27017/api', () => {
    console.log('Connected to MongoDB'); 
    //Dropping the data base every time the app lunched. Delete this line to disable
    mongoose.connection.db.dropDatabase();

    //Some hard-coded data for start
    const course = {
        title: "Introduction To MongoDB",
        watchHref: "https://github.com/RoyGuf",
        authorId: "Roy Guf",
        length: "5:08",
        category: "JavaScript"
      };
    const author = {
        firstName: "Roy",
        lastName: "Guf"
    };

      new Course(course).save();
      new Author(author).save();
});