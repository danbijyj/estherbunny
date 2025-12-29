import Slider from 'react-slick';
import { MainBestStyle } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productData from '../../assets/api/productData';
import MainBestItem from './MainBestItem';
import { CgChevronLeftO, CgChevronRightO } from 'react-icons/cg';

const MainBest = () => {
    const PrevArrow = ({ onClick }) => (
        <button className="best-prev" onClick={onClick}>
            <CgChevronLeftO />
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button className="best-next" onClick={onClick}>
            <CgChevronRightO />
        </button>
    );

    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 5,
        speed: 500,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <MainBestStyle>
            <h2>Best Seller</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    {productData.map((product) => (
                        <div key={product.id}>
                            <MainBestItem product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </MainBestStyle>
    );
};

export default MainBest;
