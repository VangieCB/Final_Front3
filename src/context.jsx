import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export const DataProvider = (props) => {
    const [theme, setTheme] = useState('dark')
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const data = await response.json();
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
    return (
        <Context.Provider value={{ theme, data, toggleTheme }}>
            {props.children}
        </Context.Provider>
    )
}


