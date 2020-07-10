// Requiring our Todo model
module.exports = (app) => {
    const Trollo = require('../models/trollo');

// Routes


// Routes to todos

app.get('/api/trollos', (req, res) => {
    Trollo.find({inProgress: 'false',completed: 'false'})
        .sort({date: -1})
        .then((trollo) => res.json(trollo))
        .catch((err) => res.status(422).json(err));
});

app.get('/api/inprogress', (req, res) => {
    Trollo.find({inProgress: 'true'})
        .sort({ date: -1 })
        .then((trollo) => res.json(trollo))
        .catch((err) => res.status(422).json(err));
});

app.get('/api/completed', (req, res) => {
    Trollo.find({completed: 'true'})
        .sort({date: -1})
        .then((trollo) => res.json(trollo))
        .catch((err) => res.status(422).json(err));
});

app.post('/api/trollos',  ({ body }, res) => {
    Trollo.create(body)
    .then(dbTrollo => {
    console.log('Todo Created!');
    res.json(dbTrollo);
    })
    .catch(err => {
        res.status(422).json(err);
    });
});

app.delete('api/trollos/id:', (req, res) => {
    Trollo.deleteOne({_id: req.body.id}, function(err, result){
        if (err) {
            res.send(err);
        } else {
            res.send(result)
        }
    })
    // .then((trollo) => res.json(trollo))
    // .catch((err) => res.status(422).json(err));
    console.log('Todo deleted!');
});
}

