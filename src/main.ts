import './style.css'
import {ArticleTableRenderer} from "./classes/ArticleTableRenderer.ts";

const myArticleList = new ArticleTableRenderer();
myArticleList.generateRandomArticles(500)
myArticleList.render();


