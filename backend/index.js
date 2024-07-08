const express= require("express");
const Connection=require("./ mongodb/ db");

const app=express();

const PORT=8000;

Connection();

app.listen(PORT, () => {
     console.log(`server is running at port ${PORT}`);
});