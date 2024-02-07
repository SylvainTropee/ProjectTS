import {Article} from "./Article.ts";
import {Popup} from "./Popup.ts";

export class ArticleTableRenderer {
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
            const table = this.createTable(['Name', 'Description', 'Price']);
            const tbody = table.createTBody();

            this.articles.forEach(article => {
                const row = tbody.insertRow();
                this.addRowEvent(row, article)
                row.innerHTML = [article.name, article.description, article.price].map(cellData => `<td>${cellData}</td>`).join('');
            });

            articleListDiv.appendChild(table);
        }
    }

    private addRowEvent(row: HTMLTableRowElement, article: Article) {
        row.addEventListener("click", () => {
            const articleContent =
                `<h2>${article.name}</h2>
                     <p><strong>Description:</strong> ${article.description}</p>
                     <p><strong>Prix:</strong> ${article.price} €</p>`;
            Popup.show(articleContent);
        })
    }

    private createTable(headers: string[]) {
        const table = document.createElement('table');
        const headerRow = table.createTHead().insertRow(0);

        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        return table;
    }

}