const express = require("express")
const app = express();

const bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("css"));
app.get("/",(req,res)=>{

res.sendFile(__dirname + "/form.html")

})

app.post("/",(req,res)=> {

    res.send("Hi " +req.body.name+ " ,your email: " +req.body.email)



})



app.listen( process.env.PORT||3000, (req,res)=> {

    console.log("server started");
})

//905cc9343c749a1f386f43fbe5bec6eb-us6 api key
//3115d75a43 audience id 