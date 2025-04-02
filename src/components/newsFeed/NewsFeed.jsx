import { useNewsContext } from "../../context/Context";
import NewsCard from "../newsCard/NewsCard";
import "./NewsFeed.css";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";

function NewsFeed() {
    const { articles, loading, error,currentPage,setCurrentPage,totalResults } = useNewsContext();

    //check loading error
    if(loading) return <Loader />;
    if(error) return <ErrorMessage message={error} />;


    return (
        <div className="news-feed">
            {articles.length === 0 ? (
                <p className="no-news-message">No news found, please try again later</p>
            ) : (
               <>
                <div className="news-grid">
                    {articles.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}
                </div>

                <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalResults={totalResults}
                />
               </>
            )}
        </div>
    );
}

export default NewsFeed;
