const express = require('express');
const router  = express.Router();
const Item  = require('../models/item');


//all items - GET
router.get('/', async(req, res) => {
  try{
    const allItems = await Item.find();
    res.json({
      status: 200,
      data: allItems
    })
  }catch(err){
      console.log('?')
      res.send(err)
  }
});



//one item - GET
router.get('/:id', async(req, res) => {
  console.log(req.body)
  try{
    const foundItem = await Item.findById(req.params.id)
    res.json({
      status: 200,
      data: foundItem
    })
  }catch(err){
    res.send(err)
  }
});

//Item - POST
router.post('/', async(req, res) => {
  // console.log(`Report Create: ${req.body}`)

  try{
    const createdItem = await Item.create(req.body);
    //console.log(`Created Item: ${createdItem}`);
    res.json({
      status:200,
      data: createdItem
    })
  }catch(err){
    res.send(err)
  }
});


//Item - PUT
router.put('/:id', async(req, res) => {
  try{
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedItem
    })
  }catch(err){
    res.send(err)
  }
});


//Item delete
router.delete('/:id', async(req, res) => {
  try{
    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    res.json({
      status: 200,
      data: deletedItem
    })
  }catch(err){
    res.send(err)
  }
});


module.exports = router
