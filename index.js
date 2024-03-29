const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.listen(5000,()=>{
  console.log("listening on port 5000");
});

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});
