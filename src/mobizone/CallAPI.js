import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useCallAPI = (data) => {
    const [product, setproduct] = useState([])

    useEffect(() => {
        axios.get(data)
            .then((res) => setproduct(res.data))
            .catch((err) => console.log(err))
    }, [data])
    return [product, setproduct]
}

export default useCallAPI
