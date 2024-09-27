import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"public/uploads");


  },
  filename :(req,file,cb)=>{
    const filename=Date.now()+'_'+file.originalname;
    console.log(filename);
    cb(null,filename);
  }
});

export default multer({ storage });
