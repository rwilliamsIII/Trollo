const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/trollo', {
    useNewUrlParser: true,
    useFindAndModify: false
});

let trolloSeed = [
    {
        title: 'Finish this project',
        description: 'Complete final project for the bootcamp!',
        dueDate: '7/25/20',
        inProgress: 'true',
        completed: 'false'
    },
    {
        title: 'Finish this project',
        description: 'Complete final project for the bootcamp!',
        dueDate: '7/25/20',
        inProgress: 'false',
        completed: 'false'
    },
    {
        title: 'Finish this project',
        description: 'Complete final project for the bootcamp!',
        dueDate: '7/25/20',
        inProgress: 'true',
        completed: 'false'
    }
];

db.Trollo.deleteMany({})
  .then(() => db.Workout.collection.insertMany(trolloSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
