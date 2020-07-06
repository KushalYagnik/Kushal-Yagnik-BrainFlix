const express = require('express');
const app = express();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const bodyParser = require("body-parser");

const nextVid = require('./nextVideos.json');
const currentVid= require('./nowPlaying.json');
//Log every HTTP request with a timestamp
app.use((req,res,next) => {
    console.log('Time:', Date.now());
    next();
})
//Enable all CORS
app.use(cors());
//body-parser middleware for POST
app.use(bodyParser.json());
//Populate videolist (Aside)
app.get("/videos", (req, res) => {
    fs.readFile('nextVideos.json', function(err, data) {
        if(err) 
        {
            res.status(500);
            res.send("Something went wrong!")
        }
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Content-Type", "application/json");
        res.status(200);
        res.send(Buffer.from(data, "base64"))  
    });
});
//Populate now playing video in the player
app.get("/videos/:id", (req, res) => {
    console.log(req.params.id);
    fs.readFile('nowPlaying.json', function(err, data) {
        if (err) 
        {
            res.status(500);
            res.send("Something went wrong!")
        }
        
        data = JSON.parse(data);
        if (data instanceof Array)
        {
            let result = data.find((video) => video.id == req.params.id);
            if (result)
            {
                // res.header("Access-Control-Allow-Origin", "*");
                // res.header("Content-Type", "application/json");
                res.status(200)
                res.send(JSON.stringify(result))
                return;
            }
        }
        res.status(404);
        res.send("Video not found!")
    });
});
//Add uploaded video to list
app.post('/videos', (req, res) => {
    const { upVid } = req; //The POST section needs changes
    const upVidShow = {
        ...upVid,
        id: `${uuidv4()}`,
        image: "https://picsum.photos/500/800"
    }
    const upVidInfo = {
        ...upVidShow,
        timestamp: Date.now(),
        duration: "2:00",
        video: "https://project-2-api.herokuapp.com/stream",
        views: "100,000",
        likes: "1000",
        channel: "Lorem ChannelSum",
        comments: [{
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            }
        ]
    }

    nextVid.push(upVidShow);
    fs.writeFileSync("./nextVideos.json", JSON.stringify(nextVid,null,2));
    currentVid.push(upVidInfo);
    fs.writeFileSync("./nowPlaying.json", JSON.stringify(currentVid,null,2));
    res.status(201).json(upVidShow);
});
//Declare the listener on port 8080
app.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.info('BrainFlix server running on port 8080');
})