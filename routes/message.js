const router=require('express').Router();
const Message=require('../models/Message');


router.post('/',async(req,res)=>{
    const newMessage=new Message(req.body);
    try {
        const saveMessage=await newMessage.save();
        res.status(200).json(saveMessage);
    } catch (error) {
        res.status(500).json(error);
    }
})
//Get
router.get('/:id',async(req,res)=>{
    try {
        const message=await Message.findById(req.params.id);
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json(error)
    }
})
//GetAll
router.get('/',async(req,res)=>{
    const username=req.query.user;
    try {
        let messages;
        if(username){
            messages=await Message.find({username});
        }
        else{
            messages=await Message.find();
        }
        res.status(200).json(messages); 
    } 
    catch (error) {
        res.status(401).json(error);
    }
})
module.exports=router;