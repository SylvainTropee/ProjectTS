import {Article} from "./Article.ts";

export class Popup {
    static show(article: Article): void {
        const popupContainer = document.createElement('div');
        popupContainer.className = 'popup-container';

        const popupContent = document.createElement('div');
        popupContent.className = 'popup-content';
        popupContent.innerHTML = `
      <h2>${article.name}</h2>
      <p><strong>Description:</strong> ${article.description}</p>
      <p><strong>Prix:</strong> ${article.price}</p>
    `;

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Fermer';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(popupContainer);
        });

        popupContent.appendChild(closeButton);
        popupContainer.appendChild(popupContent);

        document.body.appendChild(popupContainer);
    }
}
