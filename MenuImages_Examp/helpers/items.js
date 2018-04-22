const db = require('../models');

//INDEX ROUTE
exports.getItems = (req, res) => {
    db.Item.find()
        .then(items => {
            res.json(items);
        })
        .catch(err => {
            res.send(err);
        });

};

//CREATE ROUTE
exports.creatItem = (req, res) => {
   db.Item.create(req.body)
       .then(newItem => {
          res.status(201).json(newItem);
       })
       .catch(err => {
           res.send(err);
       });
};


//SHOW ROUTE
exports.showItem = (req, res) => {
    db.Item.findById(req.params.id)
        .then(foundItem => {
            res.json(foundItem);
        })
        .catch(err => {
            res.send(err);
        });
};

//UPDATE ROUTE
exports.updateItem = (req, res) => {
  db.Item.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(foundItem => {
          res.json(foundItem);
      })
      .catch(err => {
          console.log(err);
      });
};

//DELETE ROUTE
exports.deletItem = (req, res) => {
  db.Item.remove({_id: req.params.id})
      .then(() => {
          res.json({message: 'We deleted it!'});
      })
      .catch(err => {
          console.log(err);
      });
};