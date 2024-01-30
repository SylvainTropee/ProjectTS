// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
//
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import './style.css'
import {Article} from "./classes/Article.ts";
import {ArticleList} from "./classes/DisplayArticles.ts";
import {Popup} from "./classes/Popup.ts";
// import {DisplayArticles} from "./classes/DisplayArticles.ts";
//
// let articles = [
//     new Article("Article 1", 12, "Description 1"),
//     new Article("Article 2", 85.23, "Description 2"),
//     new Article("Article 3", 74, "Description 3"),
//     new Article("Article 7", 320.23, "Description 7"),
// ]
//
//
// let elem = new DisplayArticles(articles)
//
// document.body.innerHTML = elem.createHtml()

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
                Popup.show(selectedArticle);
            }
        }
    });
}

