import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostserviceService extends BaseService {
    
    getAllPosts() {
        return this.http.json<any>({
            method: 'GET',
            url: 'http://localhost:4000/api/posts'
        }).then((success) => {
            return success.response;
        }, (error): any => {
           throw error.response.message;
        });
    }
    
    postNewEntry(newBlog: models.IPost) {
        return this.http.json<any>({
            method: 'POST',
            url: 'http://localhost:4000/api/posts',
            data: newBlog
        }).then((success) => {
        }, (error): any => {
                throw error.response.message; 
        });
    }
    
}

register.injectable('postservice-svc', PostserviceService);
