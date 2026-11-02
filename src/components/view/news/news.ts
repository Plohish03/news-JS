import './news.css';
import { Article } from '../../../types';
import { getElement } from '../../../utils/dom';

class News {
    public draw(data: readonly Article[]): void {
        const news = data.slice(0, 10);

        const fragment = document.createDocumentFragment();
        const newsItemTemp = getElement<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = document.importNode(newsItemTemp.content, true);

            if (idx % 2) getElement('.news__item', newsClone).classList.add('alt');

            getElement('.news__meta-photo', newsClone).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            getElement('.news__meta-author', newsClone).textContent = item.author || item.source.name;
            getElement('.news__meta-date', newsClone).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            getElement('.news__description-title', newsClone).textContent = item.title;
            getElement('.news__description-source', newsClone).textContent = item.source.name;
            getElement('.news__description-content', newsClone).textContent = item.description;
            getElement('.news__read-more a', newsClone).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = getElement('.news');
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
