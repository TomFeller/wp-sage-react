import axios from 'axios';
import alt   from '../../flux/alt/alt.js';

class DataActions {

    constructor() {
        const hostname = window.location.hostname;
        // hostname === 'localhost' ? 'http://127.0.0.1:82/wordpress/wp-json' :
        const appUrl = 'https://admin.oleovape.com/?rest_route='; // Wordpress installation url

        this.pagesEndPoint = `${appUrl}/wp/v2/pages&_embed`; // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp/v2/posts&_embed`; // Endpoint for getting Wordpress Posts
        this.productsEndPoint = `${appUrl}/wp/v2/products&_embed`; // Endpoint for getting Wordpress Posts
    }

    // Method for getting data from the provided end point url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            }); 
        });     
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            this.getPosts(response, cb)
        });
        return true;
    }

    getProducts(cb){
        this.api(this.productsEndPoint).then((response)=>{
            this.getPosts(response, cb)
        });
        return true;
    }



    // Method for getting Posts data
    getPosts(pages, cb){
        // this.api(this.postsEndPoint).then((response)=>{
        //     const posts     = response;
        //     const payload   = { pages, posts };
        //
        //     this.getSuccess(payload); // Pass returned data to the store
        //     cb(payload); // This callback will be used for dynamic rout building
        // });
        this.api(this.postsEndPoint).then((posts)=> {
            this.api(this.productsEndPoint).then((products) => {
                const payload = {pages, posts, products};

                this.getSuccess(payload); // Pass returned data to the store
                cb(payload); // This callback will be used for dynamic rout building
            });
        });
        return true;
    }





    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);