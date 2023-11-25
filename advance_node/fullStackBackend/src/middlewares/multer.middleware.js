import multer from "multer"

const storage = multer.diskStorage({
    destination:function (req,res,cb){
        cb(null , "./public/temp")
    },
    filename:function(req,file,cb){
        const uniqueSuffix = Date.now()
        cb(null,file.originalname+ '-' + uniqueSuffix)
    }
})

export const upload = multer({
    storage
})