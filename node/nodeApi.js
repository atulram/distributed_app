const express = require("express");
const cors = require('cors');
const app = express()
const PORT = 8080;

app.use(express.json())
app.use(cors())

app.post('/mul', (req, res)=>{
    const {inp1, inp2} = req.body;
    console.log("Post Call Multiply", inp1, inp2);
    try {
        res.send({"ans": inp1 * inp2});
    } catch(err){
        console.log(error);
        res.send({"ans": null});
    }
});

app.post('/div', (req, res)=>{
    const {inp1, inp2} = req.body;
    console.log("Post Call Divide", inp1, inp2);
    try {
        res.send({"ans": inp1/inp2});
    } catch(err){
        console.log(error);
        res.send({"ans": null});
    }
    
});

app.listen(
    PORT,
    () => console.log(`Server running at http://localhost:${PORT}`)
)