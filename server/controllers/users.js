const User = require('../models/user');
const Message = require('../models/message');
const _ = require('lodash');

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const users = await User.find({});
            res.status(200).json(users);
        } catch(err){
            next({status: 500, err});
        }
    },
    newUser: async (req, res, next) => {
        var body = _.pick(req.value.body, ['username']);
        const newUser = new User(body);
        try {
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        }   catch(err){
            next({status: 400, err});
        }
    },
    getUser: async (req, res, next) => {
        const { id } = req.value.params;
        try{
        const user = await User.findById(id);
        res.status(200).json(user);
        }catch(err){
            next({status: 500, err});
        }
    },
    replaceUser: async (req, res, next) => {
        const { id } = req.value.params;
        var body = _.pick(req.value.body, ['username', 'status', 'lat', 'lon']);
        try{
        const newUser = await User.findByIdAndUpdate(id, {$set: body}, {new: true});
        res.status(200).json(newUser);
        }catch(err){
            next({status: 500, err});
        }
    },
    updateUser: async (req, res, next) => {
        const { id } = req.value.params;
        var body = _.pick(req.value.body, ['username', 'status', 'lat', 'lon']);
         try{
        const newUser = await User.findByIdAndUpdate(id, {$set: body}, {new: true});
        res.status(200).json(newUser);
        }catch(err){
            next({status: 500, err});
        }
    },
    deleteUser: async (req, res, next) => {

    },
    getUserMessages: async (req, res, next) => {
        const { id } = req.value.params;
        try{
        const user = await User.findById(id).populate('messages');
        res.status(200).json(user.messages);
        }catch(err){
            next({status: 500, err});
        }
    },
    newUserMessage: async (req, res, next) => {
        const { id } = req.value.params;
        try{
        // Create Message
        const body = _.pick(req.value.body, ['text', 'to']);
        const newMessage = new Message(body);
        
        // Find Creator
        const creator = await User.findById(id);

        // Add Creator to message
        newMessage.creator = creator;

        // If to is present, its a private message. Find to user and add to message.
        if(body.to != undefined){
            const to = await User.findById(body.to);
            newMessage.to = to;
        }

        // Save mesaage
        const savedMessage = await newMessage.save();

        // Push newMessage to creator messages array
        creator.messages.push(savedMessage);

        // Save Creator
        await creator.save();

        res.status(200).json(savedMessage);
        }catch(err){
            next({status: 500, err});
        }
    }
}