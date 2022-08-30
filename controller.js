const Post = require('./models')

exports.getAllPosts = async(req,res,next)=>{
    try{
        const [posts,_] = await Post.findAll();
        res.status(200).json({count:posts.length,posts});
    }
    catch(error){console.log(error); next(error)}
}
exports.createNewPost = async(req,res,next)=>{
    let {title,body} = req.body; 
    let post = new Post(title,body)
    post = await post.save();
    res.status(201).json({message: "Post Created!"})
}
exports.getPostById = async(req,res,next)=>{
    let postId = req.params.id;
    let [post, _] = await Post.findById(postId);
    res.status(200).json({post: post[0]});
}
exports.updatePostById = async(req,res,next)=>{
    let postId = req.params.id;
    let {title,body} = req.body; 
    [post, _] = await Post.updateById(postId,title,body);
    res.status(200).json({message: "Post Updated!"});
}
exports.deletePostById = async(req,res,next)=>{
    let postId = req.params.id;
    let [post, _] = await Post.deleteById(postId);
    res.status(200).json({message: "Post Deleted!"});
}

