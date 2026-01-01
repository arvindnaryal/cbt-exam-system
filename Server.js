const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req,res)=>{
  res.send("CBT Server Running");
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log("Server started");
});
