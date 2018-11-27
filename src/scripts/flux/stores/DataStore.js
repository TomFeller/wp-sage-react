import alt          from '../../flux/alt/alt.js';
import DataActions  from '../../flux/actions/DataActions.js';

class DataStore {
    constructor() {
        this.data = {};

        this.bindListeners({
            // Listen to the getSuccess() in DataActions.js
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll:         this.getAll,
            getAllPages:    this.getAllPages,
            getAllPosts:    this.getAllPosts,
            getAllTreatments: this.getAllTreatments,
            getAllArticles: this.getAllArticles,
            getAllRecommendations: this.getAllRecommendations,
            getAllVideos: this.getAllVideos,
            getPageBySlug:  this.getPageBySlug,
            getPagesByCustomFields: this.getPagesByCustomFields,
            getPostsByCategory: this.getPostsByCategory
        });
    }

    // Store data returned by getSuccess() in DataActions.js
    handleSuccess(data) {
        this.setState({ data });
    }

    // Returns all pages and posts
    getAll() { 
        return this.getState().data; 
    }

    // Returns all Pages
    getAllPages() { 
        return this.getState().data.pages; 
    }

    getAllCategories() {
        return this.getState().data.categories;
    }

    // Returns all Posts
    getAllPosts() {
        return this.getState().data.posts;
    }

    getAllTreatments() {
        return this.getState().data.treatments;
    }

    getAllRecommendations() {
        return this.getState().data.recommendations;
    }

    getAllVideos() {
        return this.getState().data.videos;
    }

    getAllArticles() {
        return this.getState().data.articles;
    }

    getPostsByCategory(cat) {
        const allPosts = this.getState().data.posts;
        return allPosts.filter(post => post.categories.some(category => category === cat))
    }

    // Returns a Page by provided slug
    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

    getPagesByCustomFields(field){
        const pages = this.getState().data.pages;
        return pages.filter(page => page.acf[field]);
    }

}

export default alt.createStore(DataStore, 'DataStore');