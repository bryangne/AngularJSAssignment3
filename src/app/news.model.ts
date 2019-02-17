export class NewsObject {
    title: string;
    url: string;
    urlToImage: string;
    description: string;
    content: string;
    
    constructor(title: string, url: string, urlToImage: string, description: string, content: string) {
        this.title = title;
        this.url = url;
        this.urlToImage = urlToImage;
        this.description = description;
        this.content = content;
    }
}