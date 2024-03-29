'use strict'

class PostController {
  // async index(){
  //   return 'Posts'
  // }
  async index({ view }){
    const posts = [
      {title: 'Post One', body: 'This is post one'},
      {title: 'Post Two', body: 'This is post two'},
      {title: 'Post Three', body: 'This is post three'},
    ]
    return view.render('posts.index',{
      title: 'Latest Post',
      posts: posts
    })
  }
}

module.exports = PostController
