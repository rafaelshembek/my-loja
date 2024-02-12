import React, { useState, useEffect } from "react";
import axios from "axios";

const useFakeProductApi = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://fakestoreapi.com/products?limit=6');
                setData(response.data);
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        };
        fetchData()
    }, [])
    return { data, loading, error };
}

export default useFakeProductApi;