"use client";
import {Box, Button} from "@mui/material";
import Image from "next/image";

import {RiShoppingBasketLine} from "react-icons/all";
import useSendPost from "../../src/reactQuery/mutation/useSendPost";

const  RightSide=() =>{

    const {mutate : sendPost  , isLoading} = useSendPost()
    return(
        <Box>
            <Box className={'relative'} style={{marginTop:'-40px', marginRight:'-70px'}}>
                <Image
                    className={'bg'}
                    src={'/image/bg2.png'}
                    alt={'background'}
                    width={700}
                    height={0}
                />

                <Box className={'flex gap-16 m-auto absolute top-16 left-72'}>
                    <RiShoppingBasketLine className={'m-auto cursor-pointer'} size={30}/>
                    <Button
                        className={'border-radius bg-primary-primary1 w-44 h-16 text-white'}
                        disabled={isLoading}
                        onClick={()=>{
                            sendPost()
                        }}

                    >
                        Account
                    </Button>
                </Box>
                <Box className={'absolute top-36 '} style={{marginLeft:'-80px'}}>
                    <Image
                        src={'/image/front-burger.png'}
                        alt={'front-burger'}
                        width={800}
                        height={100}
                    />
                </Box>
                <Box className={'absolute top-48'} style={{marginLeft:'-50px'}}>
                    <Image
                        src={'/image/burger-delicious.png'}
                        alt={'front-burger'}
                        width={530}
                        height={200}
                    />
                </Box>
                <Box className={'absolute top-36'}>
                    <Image
                        src={'/image/Jumper.png'}
                        alt={'front-burger'}
                        width={750}
                        height={100}
                    />
                </Box>
                <Box className={'absolute bottom-10 right-32'}>
                    <ul className={'flex gap-8 cursor-pointer'}>
                        <li>Application</li>
                        <li>Privacy</li>
                        <li>Terms</li>

                    </ul>
                </Box>
            </Box>
        </Box>
    )

}
export default RightSide