const Post = require("../models/Posts");
const post  = require("../routes/post");
const fs = require("fs");

module.exports = class API{
// fetch all posts

static async fetchAllPost(request, response) {
    try{
            const post = await Post.find();
            response.status(200).json(post)
    }catch(error){
        response.status(404).json({message : error.message});
    }
}

static async fetchPostById(request, response) {
    let id = request.params.id;
    try {
        let post = await Post.findById(id);
        response.status(200).json(post);
    } catch (error) {
        response.status(404).json({message:error.message});
    }
}

static async creatPost(request, response) {

    console.log(1);
    const post = request.body;
    console.log(request.body)
    const imagename = request.file.filename;
    post.image = imagename;
    try {
        await Post.create(post);
        response.status(201).json({message: 'Post creted Success'});
    } catch (error) {
        response.status(400).json({message: error.message});
        
    }
}

static async updatePost(request, response) {
  const id = request.params.id;
  let new_image = "";
  if(request.file){
      new_image = request.file.filename;
      try {
          fs.unlinkSync("./uploads/"+ request.body.old_image);
      } catch (error) {
          console.log(error);
      }
  }
  else{
      
  }
}

static async deletePost(request, response) {
    response.send("Delete Post");
}

}