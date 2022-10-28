import motif1_left from '../asset/motif1_left.svg'
import motif1_right from '../asset/motif1_right.svg'
import photo_real from '../asset/photo_real.svg'
import bg_md2 from '../asset/bg_md2.svg'
import bg_lg2 from '../asset/bg_lg2.svg'
import bg_dk2 from '../asset/bg_dk2.svg'
import kalender from '../asset/kalender.svg'
import loc from '../asset/loc.svg'
import wayLeft from '../asset/wayang_left.svg'
import wayRight from '../asset/wayang_right.svg'
import gunungan_kiri from '../asset/gun-lg-l.svg'
import gunungan_kanan from '../asset/gun-lg-r.svg'
import back from '../asset/arrow_left.svg'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'


export default function Undangan () {
    const locale = 'en';
    const navigate = useNavigate();
    const [today, setDate] = useState(new Date()); 
    const [res, setRes] = useState()
    const theDate = new Date(2022, 10, 5, 16)
    
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };
    const secondsToDhms = (seconds) => {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        
        return {
            d, 
            h,
            m,
            s
        } 
        }

    useEffect(() => {

        const timer = setInterval(() => { 
            setDate(new Date())
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
        const res2 = secondsToDhms( theDate.getTime()/1000 - today.getTime()/1000)
    
    return (
        <div className="w-screen bg-[#2B1C13] overflow-hidden">
            <div className='flex justify-between relative'>
                <img className='w-[100px] pt-[50px] md:pt-[100px] md:w-[120px] lg:w-[200px]' src={motif1_left} />
                <img className='w-[150px] pt-[5px] md:w-[170px] lg:w-[300px]' src={motif1_right} />
                <img className='absolute top-5 left-8 w-[30px] lg:w-[50px]' src={back} alt="" onClick={navigateHome} />
            </div>
            <div className='text-center pt-5'>
                <p className="font-elmessiri font-bold text-2xl text-[#F3A451]">Assalamualaikum Wr. Wb</p>
                <p className='text-white font-poppins text-sm px-10'>Dengan memohon dan ridho Allah SWT kami bermaksud menyelenggarakan Khitanan anak kami</p>
            </div>
      
            <div className='relative w-full h-[500px] overflow-hidden md:h-[550px] lg:h-[600px]'>
                <img className='inset-x-0 mx-auto h-[300px] z-10 absolute sm:h-[350px] md:mt-6 lg:h-[400px]' src={photo_real} alt="" />
                <img className='absolute w-screen z-0 top-[210px]' src={bg_md2} alt="" />
                <div className='absolute top-[250px] z-20' >
                    <div className='relative'>
                        <img className='w-screen' src={bg_lg2} alt="" />
                        <div className='absolute top-10 text-center lg:top-[70px] xl:top-[85px] inset-x-0 mx-auto'>
                            <h2 className='font-elmessiri font-bold text-4xl text-[#2B1C13] sm:mt-6 md:mt-12'>Gusti Surya Wijaya</h2>
                            <p className='font-poppins text-white text-sm px-[80px]'>Putra Bpk. Eko Budi Santoso (Alm) & Ibu Iin NurWiningsih</p>
                        </div>
                        <img className='absolute w-screen top-[120px] lg:top-[140px]' src={bg_dk2} alt="" />
                    </div>
                </div>
                <div className='absolute z-40 bottom-1 mx-auto inset-x-0'>
                    <p className='font-poppins text-white px-[30px] text-sm text-center'>Acara ini akan dilaksnakan pada tanggal dan di lokasi berikut</p>
                </div>
            </div>

            <div className='mt-[50px] pb-[50px] lg:bg-[#F3A451] lg:flex lg:py-[50px] justify-between lg:h-[500px] relative'>
                <div className='text-center py-5 lg:w-1/2 lg:flex lg:pl-[100px]'>
                    <img className='w-[48px] mx-auto lg:w-[100px] lg:m-0 lg:h-min lg:mt-6' src={kalender} alt="" />
                    <div className='lg:mt-7 lg:text-left lg:pl-5'>
                        <p className="font-elmessiri font-bold text-2xl text-[#F3A451] lg:text-[#2B1C13] pt-3">Tanggal</p>
                        <p className='font-poppins text-white px-[30px] lg:px-0 text-sm'>Sabtu, 5 November 2022</p>
                        <p className='font-poppins text-white px-[30px] lg:px-0 text-sm'>Jam : 16.00 - 20.00 WIB</p>
                    </div>
                </div>
                <div className='lg:w-1/2 '>
                    <div className='w-[265px] h-[84px] bg-[#D9D9D9] rounded-2xl border-4 border-[#F3A451] lg:border-[#2B1C13] mx-auto my-10 flex py-1 lg:w-[500px] lg:h-[150px]'>
                        <div className='text-center w-full my-auto'>
                            <p className='font-elmessiri font-bold text-4xl text-[# lg:w-1/2]'>{res2.d}</p>
                            <p className='font-elmessiri text-xl text-[#2B1C13]'>Hari</p>
                        </div>
                        <div className='text-center w-full border-4 border-x-[#2B1C13] border-y-0 my-auto'>
                            <p className='font-elmessiri font-bold text-4xl text-[#2B1C13]'>{res2.h}</p>
                            <p className='font-elmessiri text-xl text-[#2B1C13]'>Jam</p>
                        </div>
                        <div className='text-center w-full my-auto'>
                            <p className='font-elmessiri font-bold text-4xl text-[#2B1C13]'>{res2.m}</p>
                            <p className='font-elmessiri text-xl text-[#2B1C13]'>Menit</p>
                        </div>
                    </div>
                    <div className='text-center lg:text-right lg:mr-[80px] '>
                        <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGl0anVhaTRubGs0ZGt2Z2doMjJmczBkYjIgNTAyNzIxMTAzNEBtaHMuaXRzLmFjLmlk&tmsrc=5027211034%40mhs.its.ac.id">
                            <button className='bg-[#F3A451] lg:bg-[#2B1C13] shadow-md shadow-[#946a4f] text-2xl font-bold rounded-full w-[224px] h-[48px] mt-8 lg:mt-0'>
                                <h1 className='text-[#2B1C13] lg:text-[#F3A451] font-bold '>Simpan Tanggal</h1>
                            </button>
                        </a>
                    </div>
                </div>
                <img className='hidden lg:block lg:absolute lg:bottom-5 w-[250px]' src={motif1_left} alt="" />
            </div>
            <div className='pb-10 lg:flex lg:h-[500px] relative'>
                <div className='lg:flex lg:w-1/2'>
                    <div className='flex justify-between lg:block'>
                        <img className='lg:absolute lg:bottom-10 lg:w-[220px]' src={wayLeft} alt="" />
                        <div className='text-center lg:flex lg:pt-16 lg:pl-16' >
                            <img className='mx-auto mt-10 lg:mt-0' src={loc} alt="" />
                            <div className='lg:ml-5'>
                                <p className='font-elmessiri font-bold text-2xl text-[#F3A451] lg:text-left'>Lokasi</p>
                                <p className=' hidden font-poppins text-white text-xs text-left w-[300px] lg:block'>Dsn. Wonoayu RT 003 RW 007, Kec. Gempol, Kab. Pasuruan</p>
                            </div>
                        </div>
                        <img className='lg:hidden' src={wayRight} alt="" />
                    </div>
                    <p className='font-poppins text-white text-sm px-[30px] text-center mt-16 lg:hidden'>Dsn. Wonoayu RT 003 RW 007, Kec. Gempol, Kab. Pasuruan</p>
                </div>
               
                <div className='lg:w-1/2'>
                    <div className=' overflow-auto w-[265px] lg:w-[400px] h-[175px] lg:h-[350px] bg-[#D9D9D9] rounded-2xl border-4 border-[#F3A451] mx-auto my-16 flex py-1 '>
                        <iframe width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-7.553361,%20112.701361+(Lokasi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe>
                    </div>
                </div>
            </div>
            <div>
                <div className='py-10 flex justify-between lg:bg-[#F3A451]'>
                    <img className='lg:hidden' src={gunungan_kiri} alt="" />
                    <img className='hidden lg:block w-[200px]' src={motif1_left} alt="" />
                    <div className='text-center my-auto'>
                        <p className="font-elmessiri font-bold text-2xl text-[#F3A451] lg:text-[#2B1C13] pt-3">Dimeriahkan oleh</p>
                        <p className='font-poppins text-sm text-white px-[30px]'>Musik Sholawat Padhang Howo Pimpinan Gus Irsyad</p>
                    </div>
                    <img className='lg:hidden' src={gunungan_kanan} alt="" />
                    <img className='hidden lg:block w-[200px]' src={motif1_right} alt="" />
                </div>
                <div className='text-center mt-10 px-[20px]'>
                    <p className='font-poppins text-sm text-white px-[30px]'>Sebuah kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                        berkenan hadir untuk memberikan  doa restu
                    </p>
                    <p className='font-poppins text-sm text-white px-[30px] mt-10'>Atas kehadiran dan doa barokahnya Bapak/Ibu/Saudara/i, kami ucapkan terima kasih.
                    </p>

                    <p className="font-elmessiri font-bold text-2xl text-[#F3A451] pt-3">Wassalamualaikum Wr. Wb.</p>
                </div>
            </div>
            <div className='h-[200px] overflow-hidden relative mt-5'>
                <img src={bg_md2} alt="" />
                <img className='absolute top-10' src={bg_lg2} alt="" />
            </div>
        </div>
    )
}