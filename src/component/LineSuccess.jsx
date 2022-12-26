import React from 'react';

const LineSuccess = ({num, current, changeCurrent, text}) => {
    const baseStyle = ['flex flex-col justify-center items-center text-[26px] font-bold rounded-[50%] w-[45px] h-[45px] ml-[-9%] z-10 cursor-pointer transition-[0.4s]', 'bg-[#D9D0FF] text-[#8880A8]']
    const titleStyle = ['transition-[0.4s]', 'text-[#676081]']
    const numberLesson = ['font-bold transition-[0.4s]', 'text-[#676081]']

    if(current === num) {
        baseStyle.pop()
        baseStyle.push('bg-[#00F17D] border-[#fff] border-[2px] text-[#fff] shadow-lg')
        titleStyle.pop()
        titleStyle.push('text-[#00F17D]')
        numberLesson.pop()
        numberLesson.push('text-[#FFFFFF]')
    }

    return (
        <div className='flex items-center gap-[10px]'>
            <div onClick={() => changeCurrent(num)} className={baseStyle.join(' ')}>
                {num}
            </div>
            <div className='flex flex-col items-start '>
                <div className={numberLesson.join(' ')}>
                    Урок {num}
                </div>
                <div className={titleStyle.join(' ')}>
                    Вступний урок   
                </div>
            </div>
        </div>
    );
};

export default LineSuccess;