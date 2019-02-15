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
            getPageBySlug:  this.getPageBySlug,
            getPostsByCategory: this.getPostsByCategory,
            getStyle: this.getStyle,
            getColors: this.getColors,
            getFontSizeByTag: this.getFontSizeByTag
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

    getPostsByCategory(cat) {
        const allPosts = this.getState().data.posts;
        return allPosts.filter(post => post.categories.some(category => category === cat))
    }

    getPageProps(pageData) {
        const {title} = pageData;
        return title
    }

    getStyle() {
        return this.getState().data.styling.acf;
    }

    getFontSizeByTag(tag) {
        return this.getState().data.styling.acf['font_sizes'][tag];
    }

    getColors() {
        return this.getState().data.styling.acf.colors;
    }

    // Returns a Page by provided slug
    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

}

export default alt.createStore(DataStore, 'DataStore');