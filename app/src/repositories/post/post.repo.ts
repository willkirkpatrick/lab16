import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostService from '../../services/postservice/postservice.svc';
import getAllBlogs from '../../viewcontrols/home/home.vc';
import postBlog from '../../viewcontrols/newpost/newpost.vc';

export default class PostRepository extends BaseRepository {

context: any = {
        // blogs: "",
        // newPost: NewPostViewControl
        success: ""
        
    };

constructor(private postservice: PostService) {
        super();
    }
    
    getAllBlogs() {
        return this.postservice.getAllPosts().then((success) => {
            return success;
        });
    }
    
    postNewBlog(newBlog: models.IPost) {
        return this.postservice.postNewEntry(newBlog).then((success) => {
            return success;
        })
    }

}



register.injectable('post-repo', PostRepository, [PostService]);
