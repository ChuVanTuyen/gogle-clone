import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const getResults = async (type) => {
        setIsLoading(true);
        const respone = await fetch(`${baseUrl}${type}`,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'f109ec195cmshb1afef4cfb01e46p1c7f41jsn0140b4bf342f',
                    'X-RapidAPI-Host': 'google-search72.p.rapidapi.com',
                }
            });
        const data = await respone.json();
        setResults(data);
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}
export const useResultContext = () => useContext(ResultContext);