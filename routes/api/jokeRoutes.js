const express = require('express');
const router = express.Router();
const jokes = [
    {
        id:"1",
        body:"<p>Mother: Anton, do you think I'm a bad mother?</p><p>You: My name is INPNAME!!</p>"
    },
    {
        id:"2",
        body:"<p>Barista: How do you take your coffee?</p><p>INPNAME: Very, very seriously.</p>"
    },
    {
        id:"3",
        body:"<p>And the lord said unto INPNAME, 'Come forth and you will receive eternal life'.</p><p>INPNAME came fifth and won a toaster.</p>"
    },
    {
        id:"4",
        body: "<p>Dr. INPNAME: I'm sorry but you suffer from a terminal illness and have only 10 to live.</p><p>Patient: What do you mean, 10? 10 what? Months? Weeks?!</p><p>Dr INPNAME: Nine.</p>"
    },
    {
        id:"5",
        body:"<p>INPNAME: CAPS LOCK – Preventing Login Since 1980.</p>"
    },
    {
        id:"6",
        body:"<p>INPNAME: Tonight I dreamt of a beautiful walk on a sandy beach.</p><p>Better half: At least that explains the footprints I found in the cat litter box this morning.</p>"
    },
    {
        id:"7",
        body:"<p>My friend INPNAME shocked and hurt me.</p><p>He told me today that I make people very uncomfortable and have no respect for personal space.</p><p>I mean, what a thing to say to a friend? It totally ruined our bath!</p>"
    }
];

router.post('/', (req,res,next) => {
    let status = 400;
    let response = "<p>Sorry, things didn't work</p>"
    if(req.body.name){
        let userName = req.body.name;
        let randomJoke = Math.floor(Math.random()*jokes.length);
        let joke = jokes[randomJoke].body.replace(/INPNAME/g, userName);
        status = 200;
        response = joke;
    }
    res.status(status).json(response);
});

module.exports = router;