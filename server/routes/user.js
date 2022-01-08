
const express = require("express");
const router = express.Router();
const API = require("../controllers/user");
const multer = require("multer");

//multer middle ware

// let storage = multer.diskStorage({
//     destination: function(request, file, cb){
//         cb(null, './uploads');
//     },
//     filename:function(request, file, cb){
//         cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
//     }
// });


// let upload = multer({
//     storage:storage,
// }).single("image");


router.get("/", API.fetchAllData);
router.get("/:id", API.fetchDataById);
router.post("/",  API.createData);
router.patch("/:id", API.updateData);
router.delete("/:id", API.deleteData);
module.exports = router;