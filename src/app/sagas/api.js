import axios from 'axios';

export function fetchArticlesApi(limit){
	const request = axios.get(`http://localhost:3004/articles?_limit=${3}&_start=${limit}`)
	.then(res => {
		return res.data
	})
	
    return request;
}

export function fetchAllArticlesApi(){
	const request = axios.get('http://localhost:3004/articles')
	.then(res =>{
		return res.data
	})

	return request;
}