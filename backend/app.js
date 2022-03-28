const express = require("express");
const app =express();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const os = require("os")
const fs = require("fs")
const del = require("del");


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use("/fileupload",fileUpload({
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
        if(err) return res.json(err)

        return res.status(200).json({status:"success"})
    })

    
})

app.get("/downloadfile", (req,res)=>{
   console.log(req.query);
   const filename =  req.query.file ;
    // const readtst = fs.createReadStream(os.tmpdir()+"/zipper/"+filename)
    // res.setHeader('Content-Disposition','attachment: filename="' + filename + '"')
    res.download(os.tmpdir()+"/zipper/"+filename,async(err)=>{
        if(err) return res.json(err)

        console.log("written");
        await del(os.tmpdir()+"/zipper",{force:true})
        console.log("file deleted");
        // server.close((err)=>{
        //     if(err) return console.log(err);

        //     console.log("closed");
        // });
        // console.log("written");
    })

})


const server = app.listen(3005,()=>console.log("server is running..."));
server.on("close",async()=>{
    console.log("started");
   
})
server.on("connection",()=>{
    console.log("gg");
})