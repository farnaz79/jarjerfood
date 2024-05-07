"use client";


import {Box, Button, Grid, Input, Stack, TextField, Typography} from "@mui/material";
import Image from "next/image";
import {
    RiFacebookCircleFill,
    RiInstagramLine, RiLinkedinBoxFill, RiMapPin2Line,
    RiMenuLine,
    RiPhoneLine,
    RiTwitterFill,
    RiYoutubeFill
} from "react-icons/all";


const LeftSide = () =>{
    return(
        <Box className={'ml-12'}>
            <Box  className={'flex'}>
                <Grid>
                    <Image
                        className={'mt-12 ml-12'}
                        src={'/image/logo/logo.png'}
                        alt={'logo'}
                        width={200}
                        height={200}
                    />
                </Grid>
                <Grid xs={4} className={'flex gap-2 ml-16 mt-20 cursor-pointer'}>
                    <RiMenuLine size={28}/>
                    <Typography className={'font-bold'} fontSize={18}>Categorys</Typography>
                </Grid>
                <Grid xs={4} className={'flex gap-2 ml-10 mt-20 cursor-pointer'}>
                    <RiPhoneLine size={28}/>
                    <Typography className={'font-bold'} fontSize={18}>Content Us</Typography>
                </Grid>
                <Grid xs={8}>
                    <ul className={'flex gap-4 ml-16 mt-20 cursor-pointer'}>
                        <li><RiFacebookCircleFill size={28}/></li>
                        <li><RiYoutubeFill size={28}/></li>
                        <li><RiTwitterFill size={28}/></li>
                        <li><RiInstagramLine size={28}/></li>
                        <li><RiLinkedinBoxFill size={28}/></li>
                    </ul>
                </Grid>
            </Box>
            <Box className={'flex gap-2 ml-14 mt-12'  }>
                <RiMapPin2Line size={28}/>
                <Typography fontSize={18}>My Location | New York,
                    <span className={'text-accent-secondary1'}> Left Side Blue Door</span></Typography>
            </Box>
            <Box  className={'ml-14 mt-5 relative'}>
                <TextField
                    className={'w-[500px]'}
                    InputProps={{
                        classes: { root:"border-radius w-full mb-4", input: "text-start" },
                    }}
                    placeholder={'Search'}
                />
                {/*<Input className={'input-search border border-gray-300 border-radius h-14 '} placeholder={'Search'}/>*/}
                <Button className={'absolute right-72 border-radius bg-primary-primary1 w-44 h-14 text-white'}>Search</Button>
            </Box>
            <Typography className={'block text-secondary-secondary2 ml-16 mt-2'}>Popular Category</Typography>
            <Box className={'flex gap-8 ml-14 mt-5'}>
                <Box className={'bg-secondary-secondary1 w-28 h-40 rounded-full cursor-pointer'}>
                    <Image
                        className={'m-auto pt-6 mb-4'}
                        src={'/image/icons/pizza.png'}
                        alt={'pizza'}
                        width={60}
                        height={60}
                    />
                    <Typography className={'font-bold flex justify-center'} fontSize={18}>Pizza</Typography>
                </Box>
                <Box className={'bg-secondary-secondary1 w-28 h-40 rounded-full cursor-pointer'}>
                    <Image
                        className={'m-auto pt-6 mb-4'}
                        src={'/image/icons/burger-hover.png'}
                        alt={'burger'}
                        width={60}
                        height={60}
                    />
                    <Typography className={'font-bold flex justify-center'} fontSize={18}>Burger</Typography>
                </Box>
                <Box className={'bg-secondary-secondary1 w-28 h-40 rounded-full cursor-pointer'}>
                    <Image
                        className={'m-auto pt-6 mb-4'}
                        src={'/image/icons/sandwich.png'}
                        alt={'sandwich'}
                        width={60}
                        height={60}
                    />
                    <Typography className={'font-bold flex justify-center'} fontSize={18}>Sandwich</Typography>
                </Box>
                <Box className={'bg-secondary-secondary1 w-28 h-40 rounded-full cursor-pointer'}>
                    <Image
                        className={'m-auto pt-6 mb-4'}
                        src={'/image/icons/chicken-bucket.png'}
                        alt={'chicken'}
                        width={60}
                        height={60}
                    />
                    <Typography className={'font-bold flex justify-center'} fontSize={18}>Chicken</Typography>
                </Box>
                <Box className={'bg-secondary-secondary1 w-28 h-40 rounded-full cursor-pointer'}>
                    <Image
                        className={'m-auto pt-6 mb-4'}
                        src={'/image/icons/noodles.png'}
                        alt={'noodles'}
                        width={60}
                        height={60}
                    />
                    <Typography className={'font-bold flex justify-center'} fontSize={18}>Pasta</Typography>
                </Box>
                <Box className={'bg-secondary-secondary1 w-28 h-40 rounded-full cursor-pointer'}>
                    <Image
                        className={'m-auto pt-6 mb-4'}
                        src={'/image/icons/fries.png'}
                        alt={'fries'}
                        width={60}
                        height={60}
                    />
                    <Typography className={'font-bold flex justify-center'} fontSize={18}>Desert</Typography>
                </Box>
            </Box>
            <Typography className={'block text-secondary-secondary2 ml-16 mt-10'}>Recently Pre Order</Typography>
            <Grid xs={4} className={'flex ml-16 mt-5'}>
                <Box className={'relative mr-10 cursor-pointer'}>
                    <Image
                        className={'border-radius h-48'}
                        src={'/image/restaurant-interior.jpg'}
                        alt={'restaurant'}
                        width={320}
                        height={100}
                    />
                    <Box className={'overlay absolute'}>
                        <Box className={'flex gap-2 absolute left-8 bottom-5'}>
                            <Image
                                className={'border-radius'}
                                src={'/image/burger-king.jpg'}
                                alt={'logo'}
                                width={50}
                                height={40}
                            />
                            <Stack className={''}>
                                <Typography fontSize={18} className={'text-white font-bold '}>King Burger</Typography>
                                <Typography className={'text-white'}>Rate 8/10</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Box className={'relative cursor-pointer'}>
                    <Image
                        className={'border-radius h-48'}
                        src={'/image/restaurant-interior.jpg'}
                        alt={'restaurant'}
                        width={320}
                        height={100}
                    />
                    <Box className={'overlay absolute'}>
                        <Box className={'flex gap-2 absolute left-8 bottom-5'}>
                            <Image
                                className={'border-radius'}
                                src={'/image/burger-king.jpg'}
                                alt={'logo'}
                                width={50}
                                height={40}
                            />
                            <Stack className={''}>
                                <Typography fontSize={18} className={'text-white font-bold '}>King Burger</Typography>
                                <Typography className={'text-white'}>Rate 8/10</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Box>
    )

}

export default LeftSide