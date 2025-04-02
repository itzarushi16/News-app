import "./NewsCard.css";
import defaultImage from '../../assets/defaultImage.jpg'
function NewsCard({ article }) {
 // if no image given give default image 
    const handleImageError=(e)=>{
        e.target.scr=defaultImage
    }
    return (
        <div className="news-card">
            <img src={article.urlToImage || defaultImage} alt="news image" className="news-image" onError={handleImageError} />
            <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
}

export default NewsCard;
