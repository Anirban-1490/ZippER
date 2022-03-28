const uploadBtn = document.querySelector(".btn");
const fileIP = document.querySelector("#file-hidden");
const form = document.querySelector(".form")
uploadBtn.addEventListener("click", async(e)=>{
    e.preventDefault();
    // console.log(fileIP.files[0]);
    if(!fileIP.files){
        return;
    }
    const formData = new FormData(form);
    console.log(...formData);

   await axios.post("http://localhost:3005/fileupload",formData);
   
})