"use client";
import apiClient from "../../sevieces/apiClient";
import {useQuery} from "react-query";


const useFetchPost = ()=>{
    async function fetchUser(){
       const result = await apiClient.get<Post[]>('/posts ')

        return result
    }

    const query = useQuery({
        queryKey :['User'],
        queryFn: fetchUser
    })

    if (query.isError) {
        console.log(">> useFetchUser >> ", "error ", query.error);
    }
    return query

}
export default useFetchPost