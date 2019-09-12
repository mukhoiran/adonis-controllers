'use strict'

class PostController {
  // async index(){
  //   return 'Posts'
  // }
  async index({ view }){
    return view.render('posts.index',{
      title: 'Latest Post'
    })
  }
}

module.exports = PostController
