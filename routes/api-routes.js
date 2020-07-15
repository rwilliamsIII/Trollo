// Requiring our Todo model
module.exports = (app) => {
    const User = require('../models/User');
    const passport = require('passport');

// Routes


// Routes to todos

app.get('/api/trollos', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log(req.user)
    res.json(req.user.todos)
    // User.find({'todos': {inProgress: 'true'}})
    //     .sort({date: -1})
    //     .then((todos) => res.json(todos))
    //     .catch((err) => res.status(422).json(err));
});

// app.get('/api/inprogress', (req, res) => {
//     Trollo.find({inProgress: 'true'})
//         .sort({ date: -1 })
//         .then((trollo) => res.json(trollo))
//         .catch((err) => res.status(422).json(err));
// });

// app.get('/api/completed', (req, res) => {
//     Trollo.find({completed: 'true'})
//         .sort({date: -1})
//         .then((trollo) => res.json(trollo))
//         .catch((err) => res.status(422).json(err));
// });

app.post('/api/trollos', passport.authenticate('jwt', {session: false}),  (req, res) => {
    console.log(req.user);
    User.updateOne({_id: req.user._id}, {$push: {todos: {
    title: req.body.title,
	description: req.body.description,
	dueDate: req.body.dueDate,
    inProgress: true,
    completed: false }}}).then(updated => res.json({msg: 'User successfully updated'})).catch(error => res.json({err: error}));
});

// app.delete('api/trollos/id:', (req, res) => {
//     Trollo.findOneAndRemove({_id: req.body.id}, function(err, result){
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result)
//         }
//     })
    // .then((trollo) => res.json(trollo))
    // .catch((err) => res.status(422).json(err));
    console.log('Todo deleted!');
};


