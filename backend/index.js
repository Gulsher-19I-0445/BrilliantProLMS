const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const url = 'mongodb://127.0.0.1:27017/Web';
const dbName = 'Web';
var cors = require("cors");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const learnerSchema = new mongoose.Schema({
  CourseID:String,

  fname: String,
  lname: String,
  email: String,
  password: String
});

const courseSchema = new mongoose.Schema({
  CourseID:String,
    name: String,
    desc: String,
    start: Date,
    end: Date,
    enrolled:Number,
  });

const Learner = mongoose.model('Learner', learnerSchema);
const Course = mongoose.model('courses', courseSchema);
//##########################################################################################
app.post('/addLearner', function(req, res) {
  const learner = new Learner({
    
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
  });

  learner.save()
  .then(() => {
    console.log('Learner added to database');
    res.send('Learner added to database');
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('An error occurred while adding the learner to the database');
  });

});

// Create the database and learners collection if they don't already exist
mongoose.connection.once('open', function() {
  mongoose.connection.db.listCollections({name: 'learners'})
    .next(function(err, info) {
      if (!info) {
        mongoose.connection.db.createCollection('learners', function(err, collection) {
          if (err) throw err;
          console.log("Learners collection created!");
        });
      }
    });
});
//##########################################################################################
app.post('/addCourse', function(req, res) {
  const course = new Course({
    CourseID:req.body.CourseID,
    name: req.body.name,
    desc: req.body.desc,
    start: req.body.start,
    end: req.body.end,
    enrolled:0,
  });

  course.save()
  .then(() => {
    console.log('Course added to database');
    res.send('Course added to database');
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('An error occurred while adding the course to the database');
  });

});

// Create the database and learners collection if they don't already exist
mongoose.connection.once('open', function() {
  mongoose.connection.db.listCollections({name: 'courses'})
    .next(function(err, info) {
      if (!info) {
        mongoose.connection.db.createCollection('courses', function(err, collection) {
          if (err) throw err;
          console.log("courses collection created!");
        });
      }
    });
});
  

// Create the database and learners collection if they don't already exist
mongoose.connection.once('open', function() {
  mongoose.connection.db.listCollections({name: 'courses'})
    .next(function(err, info) {
      if (!info) {
        mongoose.connection.db.createCollection('courses', function(err, collection) {
          if (err) throw err;
          console.log("courses collection created!");
        });
      }
    });
});


//##########################################################################################

app.get('/GetCourses', function(req, res) {
    Course.find()
      .then(function(courses) {
        res.send(courses);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send('An error occurred while retrieving courses from the database');
      });
  });



app.listen(8000, function() {
  console.log(`Server running on port 8000`);
});
