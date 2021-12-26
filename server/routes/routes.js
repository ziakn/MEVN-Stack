
const express = require("express");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");

//multer middle ware

let storage = multer.diskStorage({
    destination: function(request, file, cb){
        cb(null, './uploads');
    },
    filename:function(request, file, cb){
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});


let upload = multer({
    storage:storage,
}).single("image");


router.get("/", API.fetchAllPost);
router.get("/:id", API.fetchPostById);
router.post("/", upload,  API.creatPost);
router.patch("/:id", API.updatePost);
router.delete("/:id", API.deletePost);
module.exports = router;