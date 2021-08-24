'use strict';
const express = require('express');
const router = express.Router();

const { User } = require('../models/index');
const base64 = require('base-64');
const bcrypt = require('bcrypt')






async function create(req, res) {
    let UserData = req.headers.authorization;
    let HeaderParts = UserData.split(' ');  
    let encodedcredit = HeaderParts.pop();  
    let decodedcredit = base64.decode(encodedcredit); 
    let [userName, userPassword] = decodedcredit.split(':');
  
    try {
        
        let hashedPassword = await bcrypt.hash(userPassword, 10);
      
        const userinfo = await User.create(
            {
                userName: userName,
               userPassword: hashedPassword
            }
            );
            res.status(200).json(userinfo);
        } catch (error) { res.status(403).send("cannot create user"); }  
    }




    async function getOne(req, res) {
        let userData = req.headers.authorization;
        let HeaderParts = userData.split(' '); 
        let encodedcredit = HeaderParts.pop();  
        let decodedcredit = base64.decode(encodedcredit); 
        let [userName,userPassword] = decodedcredit.split(':'); 
    
        try {
            let userinfo  = await User.getOne(userName);
          
            const Valid = await bcrypt.compare(userPassword, userRecord.userPassword);
            if (Valid) {
              res.status(200).json(userinfo);
            }
            else {
              throw new Error('error incorrect password')
            }
    } catch (error) { res.status(403).send("error incorrect username"); }
    }

    
    async function getUsersHandler(req, res) {
        let AllUsers = await User.getAll();
        res.status(200).json(AllUsers);
    }



async function updateHandler(req, res) {
    let id = parseInt(req.params.id);
    let UserData = req.body;

    let UserInformation = await User.update(UserData, id);
    res.status(200).json(UserInformation);
}

async function deleteHandler(req, res) {
    let id = parseInt(req.params.id);

    await User.delete(id);
}


router.get('/AllUsers', getUsersHandler);
router.post('/signup', create);
router.get('/signin', getOne);
router.put('/update', updateHandler);
router.delete('/delete', deleteHandler);

module.exports = router;