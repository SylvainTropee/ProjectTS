export class Popup {
    static show(content : string): void {
        const popupContainer = document.createElement('div');
        popupContainer.className = 'popup-container';

        const popupContent = document.createElement('div');
        popupContent.className = 'popup-content';
        popupContent.innerHTML = content

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
