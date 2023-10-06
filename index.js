
const express=require('express')

const app=express()
app.use(express.json())

const port = process.env.PORT || 3000;
require('dotenv').config()





app.listen(port, () => {
  console.log(`server running at ${port} `)
  });