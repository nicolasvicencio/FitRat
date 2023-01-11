import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
	const [data, setData] = useState()
	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then(json => setData(json))
		.catch(err => console.log(err))
	}, [url])

	return [data]
}

export default useFetch