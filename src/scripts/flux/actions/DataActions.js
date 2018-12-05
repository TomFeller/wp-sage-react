import axios from 'axios';
import alt from '../../flux/alt/alt.js';

class DataActions {

    constructor() {
        const hostname = window.location.hostname;
        const appUrl = hostname === 'localhost' ? 'http://127.0.0.1:88/wordpress/' : 'https://awake-admin.tf-interactive.com/?rest_route='; // Wordpress installation url
        const v2 = 'wp-json/wp/v2';
        this.generalEndPoint = `${appUrl}/${v2}`;
        this.configurationsEndPoint = `${appUrl}/${v2}/configurations?_embed`;
        this.stylingEndPoint = `${appUrl}/${v2}/configurations/42?_embed`;
        this.pagesEndPoint = `${appUrl}/${v2}/pages?_embed`;
        this.postsEndPoint = `${appUrl}/${v2}/posts?_embed`;
        this.treatmentsEndPoint = `${appUrl}/${v2}/treatments?_embed`;
        this.articlesEndPoint = `${appUrl}/${v2}/letters_articles?_embed`;
        this.recommendationsEndPoint = `${appUrl}/${v2}/recommendations?_embed`;
        this.videosEndPoint = `${appUrl}/${v2}/videos?_embed`;
        this.categoriesEndPoint = `${appUrl}/${v2}/categories?_embed`;
        this.navigationHeaderEndpoint = `${appUrl}/wp-json/menus/v2/header`;
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
    getPages(cb) {
        this.api(this.pagesEndPoint).then((pages) => {
            this.api(this.treatmentsEndPoint).then((treatments) => {
                this.api(this.articlesEndPoint).then((articles) => {
                    this.getPosts(pages, treatments, articles, cb);
                })
            })

        });
        return true;
    }

    getStyle(cb) {
        this.api(this.stylingEndPoint).then((response) => {

            const payload = response;

            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    getCategories(pages, cb) {
        this.api(this.categoriesEndPoint).then((response) => {
            const categories = response;
            const payload = {pages, categories};

            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    getHeaderMenu(cb) {
        this.api(this.navigationHeaderEndpoint).then((response) => {
            const headerMenu = response;
            return headerMenu
        })
    }


    getAllArticles(cb) {
        this.api(this.articlesEndPoint).then((response) => {
            const payload = response;
            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        })
    }

    getAllVideos(cb) {
        this.api(this.videosEndPoint).then((response) => {
            const payload = response;
            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        })
    }

    getAllReccomendations(cb) {
        this.api(this.recommendationsEndPoint).then((response) => {
            const payload = response;
            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        })
    }

    getAllTreatments(cb) {
        this.api(this.treatmentsEndPoint).then((response) => {
            const payload = response;
            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        })
    }

    // Method for getting Posts data
    getPosts(pages, treatments, articles, cb) {
        this.api(this.postsEndPoint).then((posts) => {

            const payload = {pages, treatments, articles, posts};
            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });

        return true;
    }

    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload) {
        return payload;
    }
}

export default alt.createActions(DataActions);