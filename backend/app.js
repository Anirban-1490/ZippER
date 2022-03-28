const express = require("express");
const app =express();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const os = require("os")
const fs = require("fs")

app.use(cors())

app.use(fileUpload({
    debug:true,
    safeFileNames:true,
    createParentPath:true,
    preserveExtension:true
}))


app.post("/fileupload",(req,res)=>{

    console.log(req.files);
    const file = req.files.uFile;
    const path = os.tmpdir()+"/zipper/"+file.name;
    file.mv(path,(err)=>{
        if(err) return res.json({status:"error"})

        return res.json({status:"success"})
    })
  

    
})

app.post("/downloadfile",(req,res)=>{
    const path = os.tmpdir()+"/zipper/"+file.name;
    const readtst = fs.createReadStream(path)
    const filename = file.name + ".png";
 res.setHeader('Content-Disposition','attachment: filename="' + filename + '"')

 

 readtst.pipe(res);
})

app.listen(3005,()=>console.log("server is running..."))