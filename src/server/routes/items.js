const router = require('express').Router();
const Item = require('../models/items');

router.get('/', (req, res) => { 
    Item.find()
      .then(items => res.json(items)) 
})

router.post('/', (req, res) => {
    const itemToPost = new Item({ 
      name: req.body.name 
    }); 
    itemToPost.save() 
      .then(item => 
        res.json(item)) 
})

router.put('/:id', (req, res) => {

  Item.findById(req.params.id).exec(function(err,result){
      if (err) { return next(err); }
      if (result==null) { // No results.
          return res.status(401).json({ error: 'Blog post not found' });
      }
      result.name = req.body.name;

      result.save(function(err1) {
          if(err1){return next(err);}
          Item.find().then(items => res.json(items)) 
      });
  });

})

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)        
      .then(item => {            
        item.remove()                
        .then(function(){
          Item.find().then(items => res.json(items))
        })                
        // return 404 if not found                
        .catch(err => res.status(404).json({ success: false }) )    
      }) 
})

module.exports = router;