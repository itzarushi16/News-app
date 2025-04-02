import { useNewsContext } from '../../context/Context';
import './Navbar.css';

function Navbar() {

    const {category,changeCategory,setQuery}=useNewsContext()
    const categories = [
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sports",
        "Technology"
    ];

    const handleSearch=(e)=>{
        
        e.preventDefault()
        //store the search input 
        const query =e.target.elements.search.value.trim()
        setQuery(query)
    }

    return (
        <nav className="header">
            <div className="logo">
                <h4>Samachar Seva</h4>
                <small>NewsApp</small>
            </div>

            <ul className="category-list">  
                {categories.map((categoryName) => (
                    <li key={categoryName} 
                    className={`category-item ${category===categoryName ? "active": ""}`}
                        onClick={()=> changeCategory(categoryName)}
                        >
                           {categoryName} 
                    </li>
                ))}
            </ul>

            <div className="search-bar">
                <form onSubmit={handleSearch}>
                    <input type="text" name="search" placeholder="Search news..." />
                    <button type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
