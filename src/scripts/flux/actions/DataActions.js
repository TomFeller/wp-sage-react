import axios from 'axios';
import alt   from '../../flux/alt/alt.js';

class DataActions {

    constructor() {
        const appUrl = 'http://127.0.0.1:88/wordpress'; // Wordpress installation url

        this.configurationsEndPoint = `${appUrl}/wp-json/wp/v2/configurations?_embed`;
        this.stylingEndPoint = `${appUrl}/wp-json/wp/v2/configurations/42?_embed`;
        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages?_embed`;
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts?_embed&per_page=100`;
        this.treatmentsEndPoint = `${appUrl}/wp-json/wp/v2/treatments?_embed&per_page=100`;
        this.articlesEndPoint = `${appUrl}/wp-json/wp/v2/letters_articles?_embed&per_page=100`;
        this.recommendationsEndPoint = `${appUrl}/wp-json/wp/v2/recommendations?_embed&per_page=100`;
        this.categoriesEndPoint = `${appUrl}/wp-json/wp/v2/categories?_embed`;
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

    getStyle(cb) {
        this.api(this.stylingEndPoint).then((response)=>{

            const payload   = response ;

            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    getCategories(pages, cb){
        this.api(this.categoriesEndPoint).then((response)=>{
            const categories     = response;
            const payload   = {pages, categories};

            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }


    // Method for getting Posts data
    getPosts(pages, cb){
        this.api(this.postsEndPoint).then((posts)=> {
            this.api(this.treatmentsEndPoint).then((treatments)=>{
                this.api(this.articlesEndPoint).then((articles)=>{
                    this.api(this.recommendationsEndPoint).then((recommendations)=> {
                        const payload = {pages, posts, treatments,  articles, recommendations};
                        this.getSuccess(payload); // Pass returned data to the store
                        cb(payload); // This callback will be used for dynamic rout building
                    })
                })

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