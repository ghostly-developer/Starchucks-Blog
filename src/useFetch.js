import { useState, useEffect } from 'react';

function useFetch(url){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCtrl = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCtrl.signal})
                .then(res => {
                    console.log(res);
                    if (!res.ok){
                        throw Error('Failed To Fetch Data')
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === 'AbortError'){
                        console.log("Fetch Aborted");
                    } else {
                    console.log(err.message);
                    setError(err.message);
                    setIsLoading(false);
                    }
                })
        }, 1000); //By all means, remove this. This is just used to show the loading status 

        return () => abortCtrl.abort(); //Killing off the fetch when it unmounts
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;