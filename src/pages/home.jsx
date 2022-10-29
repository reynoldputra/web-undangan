import motif1_left from '../asset/motif1_left.svg'
import motif1_right from '../asset/motif1_right.svg'
import motif2_left from '../asset/motif2_left.svg'
import motif2_right from '../asset/motif2_right.svg'
import bg_light from '../asset/bg_light.svg'
import bg_dark from '../asset/bg_dark.svg'
import photo from '../asset/photo.svg'
import gunungan_kiri from '../asset/gunungan_kiri.svg'
import gunungan_kanan from '../asset/gunungan_kanan.svg'

import { useNavigate } from "react-router-dom";
import { Img} from 'react-image'
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from 'react'

export default function Home () {
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const navigateUndangan= () => {
        // 👇️ navigate to /
        navigate('/undangan');
    };



    return (
        <div className="bg-[#BB7E40] h-screen relative overflow-hidden">
                <div className="flex justify-between bg-[#F3A451] z-10 absolute w-full">
                    <img className='lg:w-[300px]' src={motif1_left} width="150px"/>
                    <img className='absolute right-0 lg:hidden' src={motif1_right} width="150px"/>
                </div>
                <div className='text-center top-[80px] inset-x-0 mx-auto absolute z-20 lg:inset-x-auto lg:text-left lg:top-[200px] lg:left-[150px]'>
                    <h3 className='font-elmessiri text-2xl text-[#2B1C13] lg:text-4xl'>Undangan</h3>
                    <h1 className='font-elmessiri text-4xl text-[#2B1C13] font-bold lg:text-6xl'>Khitanan</h1>
                </div>
                <div className='bg-[#F3A451] h-[250px] sm:h-[150px] md:h-[100px] relative z-0' >
                    <Img className='absolute top-[200px] sm:top-[50px] md:top-0 z-0 lg:top-[64px] xl:-top-10' src={bg_light} alt="" loader={<ClipLoader
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />} />
                </div>
                <img className='absolute z-0 top-[225px] md:top-[175px] lg:hidden' src={gunungan_kiri} alt="" />
                <img className='absolute z-10 top-[225px] md:top-[175px] right-0 lg:top-[120px] lg:w-[120px]' src={gunungan_kanan} alt="" />
                
                <img className='w-[200px] z-20 absolute bottom-[18%] inset-x-0 mx-auto lg:right-[75px] lg:inset-x-auto lg:-bottom-10 lg:w-[300px] xl:right-[100px]' src={photo} alt="" />
                <img className='w-screen top-[60%] md:top-[50%] absolute z-20 lg:top-[75%] xl:top-[65%]' src={bg_dark} alt="" />

                <img className='absolute z-20 bottom-[20px] lg:hidden' src={motif2_left} alt="" />
                <img className='absolute z-20 right-0 bottom-[20px] lg:hidden' src={motif2_right} alt="" />

                <div className='absolute z-20 bottom-8 inset-x-0 mx-auto text-center lg:text-left lg:inset-x-auto lg:top-[300px] lg:bottom-auto lg:left-[150px]'>
                    <h1 className='font-elmessiri text-[#F3A451] text-4xl font-bold lg:hidden '>Gusti Surya Wijaya</h1>
                    <p className='text-white font-poppins font-[100] text-xs w-[70%] my-2 mx-auto lg:m-0 lg:w-full lg:mt-1 lg:mb-5 lg:hidden'>Putra Bpk. Eko Budi Santoso (Alm) & Ibu Iin NurWiningsih</p>
                    <p className='hidden text-white font-poppins font-[100] text-sm lg:block lg:m-0 lg:mt-1 lg:mb-5 lg:w-[500px]'> Kami mengundang acara bapak/ibu/saudara/i untuk hadir
                        dalam acara Walimatul Khitan anak kami yang bernama
                        Gusti Surya Wijaya</p>
                    <button className='bg-[#F3A451] shadow-md shadow-[#946a4f] font-poppins text-2xl font-bold rounded-full w-[224px] h-[48px] lg:rounded-md lg:bg-[#2B1C13] lg:text-xl'>
                        <h1 className='text-[#2B1C13] lg:text-[#F3A451]' onClick={navigateUndangan} >Buka Undangan</h1>
                    </button>
                </div>
            </div>
    )
}