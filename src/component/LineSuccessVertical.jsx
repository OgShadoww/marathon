import React from 'react';

const LineSuccess = React.memo(({num, current, changeCurrent, text, finish}) => {
    const baseStyle = ['flex flex-col justify-center items-center text-[22px] font-bold rounded-[50%] w-[45px] h-[45px] mt-[-10px] md:ml-0 lg:ml-[-6%] z-10 cursor-pointer transition-[0.4s]', 'bg-[#D9D0FF] text-[#8880A8]']
    const baseActiveStyle = 'bg-[#00F17D] border-[#fff] border-[2px] text-[#fff] shadow-lg'
    const titleStyle = ['transition-[0.4s] text-left', 'text-[#676081]']
    const numberLesson = ['font-bold transition-[0.4s]', 'text-[#676081]']

    if(current === num || finish) {
        baseStyle.pop()
        baseStyle.push(baseActiveStyle)
        titleStyle.pop()
        titleStyle.push('text-[#00F17D]')
        numberLesson.pop()
        numberLesson.push('text-[#FFFFFF]')
    }
    if(finish) {
        numberLesson.pop()
        numberLesson.push('text-[#00F17D]')
    }

    return (
        <div onClick={() => changeCurrent(num)} className='flex items-center lg:justify-start md:justify-between gap-[10px] cursor-pointer'>
            <div className={baseStyle.join(' ')}>
                {num}
            </div>
            <div className='flex flex-col items-start '>
                <div className={numberLesson.join(' ')}>
                    Урок {num}
                </div>
                <div className={titleStyle.join(' ')}>
                    {text}
                </div>
            </div>
        </div>
    );
});

export default LineSuccess;