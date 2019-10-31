const express = require('express');
const router = express.Router();
const { Chat } = require("../models/Chat");


router.get("/getChats",async (req, res) => {
    await Chat.find()
        .populate("sender")
        .exec((err, chats) => {
            console.log(chats)
            if(err) return res.status(400).send(err);
            res.status(200).send(chats)
        })
});

module.exports = router;