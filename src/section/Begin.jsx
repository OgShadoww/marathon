import React from 'react';
import Text from '../img/begin/COSMOS.png'
import TopSchedule from '../img/begin/top-schedule.png'
import BottomSchedule from '../img/begin/bottom-schedule.png'
import Img from '../img/begin/begin.png'
import Light from '../img/light.png'

const Begin = ({buttonHandler, Elementref}) => {

    return (
        <div className='begin relative flex flex-col lg:flex-row md:flex-row sm:flex-row justify-center items-center gap-[50px] begin h-[80vh] w-full px-[50px] '>
            <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full background-snow'>
                
            </div>
            <img src={Light} className='absolute top-[-40%] left-[-40%] w-[80%] hidden lg:block md:hidden sm:hidden' alt="" />
            <img src={Light} className='absolute top-[40%] right-[-40%] w-[80%] hidden lg:block md:hidden sm:hidden' alt="" />
            <img src={TopSchedule} className='absolute pointer-events-none top-0 right-0 w-[60%] z-0' alt="" />
            <img src={Img} className='mr-[50px] hidden lg:block md:block sm:hidden lg:w-[30%] md:w-[40%] sm:w-[40%] z-10' alt="" />
            <div className='flex flex-col justify-center items-center lg:items-start md:items-start sm:items-center lg:justify-start md:justify-start'>
                <img src={Text} className='w-[70%] mb-[20px]' alt="" />
                <p className='text-center lg:text-left md:text-left sm:text-[center] lg:max-w-[700px] md:max-w-[700px] sm:max-w-[600px] max-w-[400px] mb-[30px]'>
                    Cosmos - криптовалютний марафон націлений на загальний розвиток українського ком’юніті в сфері криптовалют. В даному марафоні ми будемо вивчати основи торгівлі на ф’ючерсах. В основі аналізу ринку в нас лежить концепція Smart Money
                </p>
                <button onClick={() => buttonHandler(Elementref)} className='uppercase z-[100] cursor-pointer text-[#B7DDFF] bg-gradient-to-b from-[#3387D0] to-[#62A4DE] w-[70%] px-[20px] py-[20px] rounded-[10px] hover:from-[#2e75b4] hover:to-[#5b98cd]'>
                    НАВЧАТИСЬ БЕЗКОШТОВНО
                </button>
            </div>
            {/* <img src={Light} className='absolute right-0 top-[50%] w-[40%]' alt="" /> */}
            <img src={BottomSchedule} className='absolute pointer-events-none bottom-[-80%] left-0 w-[50%]' alt="" />
        </div>
    );
};

export default Begin;