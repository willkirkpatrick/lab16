import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import NewPostViewControl from '../newpost/newpost.vc';
import PostRepository from '../../repositories/post/post.repo';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        blogs: "",
        newPost: NewPostViewControl,
        blogArray: [],
        success: {},
        
        
    };
    
    constructor(private post: PostRepository) {
        super();
    }
    
    navigatedTo(): void {
        this.post.getAllBlogs().then((success) => {
            this.context.blogs = success;
        });
    }
    
    
}

register.viewControl('home-vc', HomeViewControl, [PostRepository]);
