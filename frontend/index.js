const uploadBtn = document.querySelector(".btn");
const downloadBtn = document.querySelector(".download");
const fileIP = document.querySelector("#file-hidden");
const form = document.querySelector(".form")

uploadBtn.addEventListener("click", async(e)=>{
    e.preventDefault();
    // console.log(fileIP.files[0]);
    if(!fileIP.files){
        return;
    }
    const formData = new FormData(form);
    // console.log(...formData);

   const response = await axios.post("http://localhost:3005/fileupload",formData);

   if(response.status != 200){
        return;
   }
     e.target.style.display = "none"
     downloadBtn.style.display = "block"
})

downloadBtn.addEventListener("click", async(e)=>{
    e.preventDefault();
    console.log(fileIP.files[0]);
    window.open(`http://localhost:3005/downloadfile?file=${fileIP.files[0].name}`)
//    const response = await axios.get(`http://localhost:3005/downloadfile?file=${fileIP.files[0].name}`);

//    if(response.status != 200){
//         return;
//    }
    
})


