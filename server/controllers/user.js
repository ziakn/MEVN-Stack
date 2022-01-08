const User = require("../models/Users");
const post  = require("../routes/user");
const fs = require("fs");
const { response } = require("express");

module.exports = class API{
// fetch all datas

static async fetchAllData(request, res) {
    try{
        console.log(request.query)
        const page = request.query.page;
        const limit = request.query.limit;

        const startIndex = (page - 1) * limit;
        const endIndex = page*limit;

            let data= await User.slice(startIndex, endIndex)
            // .limit(parseInt(request.query.limit))
            // .exec(function (err, data) {
            //     if(err) { res.status(500).json(err); return; };
            //     res.status(200).json(data);
            // });
            res.json(data)
    }catch(error){
        res.status(404).json({message : error.message});
    }
}

static async fetchDataById(request, res) {
    let id = request.params.id;
    try {
        let data = await User.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

static async createData(request, res) {
    const data = request.body;
    // const imagename = request.file.filename;
    // data.image = imagename;
    try {
          await User.create(data);
       
        console.log(data)
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(response);
        
    }
}

static async updateData(request, res) {
//   const id = request.params.id;
//   let new_image = "";
//   if(request.file){
//       new_image = request.file.filename;
//       try {
//           fs.unlinkSync("./uploads/"+ request.body.old_image);
//       } catch (error) {
//           console.log(error);
//       }
//   }
//   else{
      
//   }
}

static async deleteData(request, res) {
    res.send("Delete Data");
}

}