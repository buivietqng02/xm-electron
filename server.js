const express = require("express");



const app = express();




app.use(express.static('public'))
app.get('/', (req, res)=> {
    res.sendFile(__dirname+'/public/index.html')
    res.end()
})

app.listen(3000, ()=> console.log("a server ruuning at port 3000"));