import { useState, useEffect } from "react";

const URL = "https://api.npoint.io/6fe80fd8273d7a0957e9";

function useNetwork() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState('');
    const [data, setDate] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDate(data?.data);
            })
            .catch(err => {
                console.log(err)
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    return {isLoading, isError, data}
}

export default useNetwork;