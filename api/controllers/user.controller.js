const bcrypt = require('bcryptjs')
const db = require("../models");
const User = db.user;
const Friend = db.friends;
const jwt = require('jsonwebtoken')

exports.update = (req, res) => {
  
  const { id } = req.params;
  if(req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
  }
  User.findOneAndUpdate({ _id : id }, req.body, { new: true }, (err, result) => {
    if (err) throw new Error(err);
    return res.status(200).send('User updated succesfully !')
  })
}

exports.delete = (req, res) => {

  const { id } = req.params;
  User.findOneAndRemove({ _id: id }, (err, result) => {
      if (err) throw new Error(err);
      res.status(200).send('User account deleted with success !');
  });
}

exports.addFriend = async (req, res) => {
  const { id } = req.params;
  const alreadyFriend = await User.find({ _id: id});

  try{
    if(Object.values(alreadyFriend[0].friends).includes(req.body.friend) === false){
      User.findOneAndUpdate(
        { _id: id }, 
        { $push : {friends: req.body.friend} },
        { new: true }, 
        (err, result) => {
          if (err) throw new Error(err);
        }
      )
      User.findOneAndUpdate(
        { _id: req.body.friend },
        { $push : {friends: id}},
        { new: true },
        (err, result) => {
          if (err) throw new Error(err);
        }
      )
      res.status(200).send(`Friend '${req.body.friend}' is added with success !`)
    }
    else{
      res.status(500).send(`${req.body.friend} is already your friend !`)
    }
  }catch(err){
  res.status(500).send(err)
  }
}

exports.removeFriend = async (req, res) => {
  const { id } = req.params;
  const alreadyFriend = await User.find({ _id: id});

  try{
      if(Object.values(alreadyFriend[0].friends).includes(req.body.friend) === true){
        
        User.findOneAndUpdate(
          { _id: id }, 
          { $pull : {friends: req.body.friend} },
          { new: true }, 
          (err, result) => {
            if (err) throw new Error(err);
          }
        )
        User.findOneAndUpdate(
          { _id: req.body.friend },
          { $pull : {friends: id}},
          { new: true },
          (err, result) => {
            if (err) throw new Error(err);
          }
        )
        res.status(200).send(`Friend '${req.body.friend}' is removed with success !`)
      }
      else{
        res.status(500).send(`${req.body.friend} is not your friend !`)
      }
    }catch(err){
      res.status(500).send(err)
    }
}

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.find({ _id: id});
  res.status(200).send(user);
}

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).send({
    users: users,
  });
}