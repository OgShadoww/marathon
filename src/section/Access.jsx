import ImgBottom from '../img/begin/begin-bottom.png'
import Background from '../img/access/background-access.png'
import Atmosphere1 from '../img/access/atmosphere-livitate1.png'
import Atmosphere2 from '../img/access/atmosphere-livitate2.png'
import AtmosphereLeft from '../img/access/atmosphere-livitate3.png'
import React from 'react';

const Access = () => {
    return (
        <div className='relative access w-full h-[100vh] mb-0 lg:mb-[100px] md:mb-[100px]'>
            <img src={AtmosphereLeft} className='absolute w-[30%] bottom-0 left-[-2%]' alt="" />
            <img src={Background} className='absolute top-[40%] opacity-[0.4]' alt="" />
            <div className='access-light-center'></div>
            <div className='access-light-left'></div>
            <div className='flex lg:justify-around md:lg:justify-around justify-center sm:justify-center lg:items-baseline md:items-baseline sm:items-center items-center px-[30px]'>
                <div className='flex flex-col lg:justify-start md:justify-start items-center lg:items-start md:items-start sm:items-center gap-20px px-[50px]'>
                    <h1 className='text-[#DAD0FF] font-bold text-[64px]'>ДОСТУП</h1>
                    <p className='text-[#BAB3D2] w-[100%] lg:w-[40%] md:w-[60%] sm:w-[100%] text-center lg:text-left md:text-left'>
                        На даній сторінці ви можете переглядати всю інформацію яку ми проходимо у вигляді відео-уроків, стрімів та методичок. Доступ до даних уроків завжди з вами до закінчення марафону
                    </p>
                </div>
                <div className='relative w-[50%] lg:flex items-center justify-center hidden md:block sm:hidden'>
                    <img src={ImgBottom} className='w-[100%] opacity-[0.8]' alt="" />
                    <div className='universe-light ml-[50%] translate-x-[-50%]]'>

                    </div>
                </div>
            </div>
            <img src={Atmosphere1} className='absolute w-[25%] right-[26%] top-[20%]' alt="" />
            <img src={Atmosphere2} className='absolute w-[20%] right-[17%]' alt="" />
        </div>
    );
};

export default Access;