"use client";

import LeftSide from "./leftSide";
import RightSide from "./rightSide";
import {useEffect} from "react";
import useFetchPost from "../../src/reactQuery/query/useFetchUser";
import toast from "react-hot-toast";
import {Box} from "@mui/material";


const Landing=() =>{
    const {data : post} = useFetchPost()

        useEffect(()=>{
            if(post){
                toast.success(`get data was successfully (check console please)`)
                console.log(`>> post >>` , post)
            }
        },[post])

    return (
            <Box
                className={'flex align-middle justify-between m-auto rounded-3xl mt-10'}
                bgcolor={'#ffffff'}
                width={1700}
                height={800}
            >
                <Box>
                    <LeftSide/>
                </Box>
                <Box>
                    <RightSide/>
                </Box>
            </Box>
        )



}
export default Landing