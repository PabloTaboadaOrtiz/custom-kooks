import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);

    useEffect(() => {

        return () => {
            console.log(isMounted)
            isMounted.current = false;
        }
    },[0])

    const [state, setstate] = useState({data: null, loading:true, error: null})
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
                .then(data => {
                    if(isMounted) {
                        setstate({
                            loading: false,
                            data,
                            error: null
                        })
                    } else {
                        console.log('No se llamo')
                    }
                })
    },[url])

    return state
}
