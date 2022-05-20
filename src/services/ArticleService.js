export default class ArticleService {

    static getArticles() {
        return fetch('https://admin.hypnosolution-accompagnement.com/wp-json/wp/v2/posts?acf_format=standard')
        .then((response) => response.json())
        .catch(error => this.handleError(error));
    }

    static getArticle(id) {
        return fetch(`https://admin.hypnosolution-accompagnement.com/wp-json/wp/v2/posts/${id}?acf_format=standard`)
        .then((response) => response.json())
        .catch(error => this.handleError(error));
    }

    
    static handleError(error) {
        console.error(error);
    }
}