import data from './opinion.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='relative w-11/12 overflow-x-hidden z-[1]'
        >
        {data.map((item, i) => (
            <SwiperSlide key={i} >
                <div className='flex flex-col items-center gap-y-6'>
                    <div className="flex flex-col justify-center items-center p-6 min-h-[250px]  rounded-lg bg-white shadow-2xl">
                        <div className="flex justify-center text-bluehantik-900">
                            <img src="images/quote.svg" className="w-12 aspect-square object-contain" loading="lazy" alt="icono comentario" />
                        </div>
                        <div className="text-slate-500 text-xs lg:text-sm text-center">
                            {item.description}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-x-2">
                        <figure className="w-[5.375rem] rounded-full overflow-hidden">
                            <img src="images/avatar.webp" className="w-full aspect-square" loading="lazy" alt="usuario" />
                        </figure>
                        <span className="text-white text-lg font-m font-bold">
                            {item.name}
                        </span>
                        <a href="{item.url}" className="text-cyan-400 text-sm" title="Website - Acento internacional">
                            {item.company}
                        </a>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    );
}