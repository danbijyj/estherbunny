import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { VisualStyle } from './style';
import MainVisualItem from './MainVisualItem';
import { mainVisualData } from '../../assets/api/mainVisualData';
import { CgArrowLeftO, CgArrowRightO } from 'react-icons/cg';

const MainVisual = () => {
    return (
        <VisualStyle>
            <div className="inner">
                <button className="prev">
                    <CgArrowLeftO />
                </button>
                <button className="next">
                    <CgArrowRightO />
                </button>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    loop={true}
                    className="mySwiper"
                >
                    {mainVisualData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MainVisualItem data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </VisualStyle>
    );
};

export default MainVisual;
