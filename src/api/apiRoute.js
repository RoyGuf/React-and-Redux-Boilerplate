import { Router } from 'express';
import Course from '../models/Course';
import Author from '../models/Author';
const api = new Router();
import mongoose from 'mongoose';



// REST API Routes
api.route('/course').get(function(req, res){
    Course.find(function(err, data){
        res.send(data);
    });
})
.post(function(req, res){
    const course = new Course(req.body);
    course.save()
    .then(function(){
        Course.findOne({title: req.body.title}).then(function(course){
            res.send(course);
        });
    });
    
});
api.route('/course/:_id').put(function(req, res){
    Course.findByIdAndUpdate({_id: req.params._id}, req.body).then(function(){
        Course.findOne({_id: req.params._id}).then(function(course){
            res.send(course);
        });
    });
})
.delete(function(req, res){
    Course.find({_id: req.params._id}).remove().exec();
});

api.route('/author').get(function(req, res){
    Author.find(function(err, data){
        res.send(data);
    });
});

export default api;