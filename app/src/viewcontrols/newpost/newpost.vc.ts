import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import PostRepository from '../../repositories/post/post.repo';

export default class NewpostViewControl extends BaseViewControl {
    templateString: string = require('./newpost.vc.html');

    context: any = {
        allPosts: HomeViewControl,
        title: "",
        author: "",
        blog: ""
        
        
    };
    
    constructor(private post: PostRepository) {
        super();
    }
    
    postBlog(): void {
        var newBlog = {title: this.context.title, author: this.context.author, blog: this.context.blog};
        this.post.postNewBlog(newBlog).then((success) => {
            
        });
    }
}


register.viewControl('newpost-vc', NewpostViewControl, [PostRepository]);
