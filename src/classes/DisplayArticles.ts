import {Article} from "./Article.ts";

export class ArticleList {
    private articles: Article[] = [];

    addArticle(article: Article): void {
        this.articles.push(article);
    }

    generateRandomArticles(numArticles: number): void {
        for (let i = 1; i <= numArticles; i++) {
            const article = new Article(
                `Article ${i}`,
                `Description ${i}`,
                Math.floor(Math.random() * 100) + 1
            );
            this.addArticle(article);
        }
    }

    render(): void {
        const articleListDiv = document.getElementById('app');

        if (articleListDiv) {
            const table = document.createElement('table');
            const headerRow = table.createTHead().insertRow(0);
            headerRow.innerHTML = '<th>Name</th><th>Description</th><th>Price</th>';

            const tbody = table.createTBody();

            this.articles.forEach(article => {
                const row = tbody.insertRow();
                row.innerHTML = `<td>${article.name}</td><td>${article.description}</td><td>${article.price}</td>`;
            });

            articleListDiv.appendChild(table);
        }
    }
}