import './style.css'
import {Article} from "./classes/Article.ts";
import {ArticleList} from "./classes/DisplayArticles.ts";
import {Popup} from "./classes/Popup.ts";

const myArticleList = new ArticleList();
myArticleList.addArticle(new Article('Article 1', 'Description 1', 19.99));
myArticleList.addArticle(new Article('Article 2', 'Description 2', 29.99));
myArticleList.addArticle(new Article('Article 3', 'Description 3', 39.99));

myArticleList.generateRandomArticles(50)
myArticleList.render();


const table = document.querySelector('table');
if (table) {
    table.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const row = target.closest('tr');

        if (row) {
            const rowIndex = row.rowIndex - 1; // Subtracting 1 to account for the header row
            const selectedArticle = myArticleList['articles'][rowIndex];

            if (selectedArticle) {
                const articleContent =
                    `<h2>${selectedArticle.name}</h2>
                     <p><strong>Description:</strong> ${selectedArticle.description}</p>
                     <p><strong>Prix:</strong> ${selectedArticle.price} €</p>`;
                Popup.show(articleContent);
            }
        }
    });
}

