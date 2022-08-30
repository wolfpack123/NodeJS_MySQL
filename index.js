require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use("/posts",require("./routes"))
app.use((err,res,req,next)=>{
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    res.status(500).json({
        message: 'Something went wrong'
    })
})

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));