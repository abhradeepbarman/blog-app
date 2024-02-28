import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl"

//step 1 --> context create
export const AppContext = createContext();


export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data filling

    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        const url = `${baseUrl}?page=${page}`

        try {
            const result = await fetch(url);
            const data = await result.json();

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } 
        catch (error) {
            console.log('Something went wrong');
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }

        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };

    //step 2 -> context providing
    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>
}