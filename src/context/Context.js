import { useContext ,createContext, useState, useEffect} from "react";
import axios from "axios";


const NewsContext= createContext() //to hold and manage fuction to be accessible 


export const useNewsContext=()=>useContext(NewsContext)  // custom hook

//to manage news data and fuctions
// return to child components through access
export const NewsProvider=({children})=>{

    const API_KEY="e031c7812fc5456c93ecb785f4eff280"
    const BASE_URL ="https://newsapi.org/v2";


//to fetchhed news articles and the empty array
//track errors initially null
const [articles,setArticles]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null);
//track cuurent page and available result 
const [currentPage,setCurrentPage]=useState(1)
const [totalResult,setTotalResult]=useState(0)
const [category,setCategory]=useState("")
const [query,setQuery]=useState("")



//to make api call and 1st set the loading set true and no error 
//axios to get the updates
//params to authenticate the request
const fetchNews=async () => {
    setLoading(true)
    setError(null)

    try {
        const response =await axios.get(`${BASE_URL}/top-headlines`,{
           params:{
            apiKey:API_KEY,
            country:"us",
            page:currentPage,
            pagesiize:6,
            category,
            q:query
           
           },
        });
        console.log(response.data.articles);


        setArticles(response.data.articles);
        setTotalResult(response.data.totalResult);
    }catch(err){
        setError("Could not fetch the data for the news,please try again later boss!");
    }finally{
        setLoading(false)
    }
}


//TO FETCH WHEN APP STARTS
useEffect(()=>{
    fetchNews()
},  [currentPage,category,query]);


const changeCategory = (newCategory) =>{
    setCategory(newCategory)
}

    return <NewsContext.Provider value={{
        articles,loading,fetchNews,currentPage,
        setCurrentPage,totalResult,
        category,changeCategory,
        setQuery,
        }}>
        {children}
    </NewsContext.Provider>
}

