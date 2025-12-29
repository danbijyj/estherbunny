import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/modules/reviewSlice';
import MainReviewItem from './MainReviewItem';
import { MainReviewStyle } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const MainReview = () => {
    const dispatch = useDispatch();
    const { reviews, loading } = useSelector((state) => state.review);

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch]);

    return (
        <MainReviewStyle>
            <div className="inner">
                <h2>Best Review</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                            fill: 'row',
                        }}
                        spaceBetween={40}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        className="mySwiper"
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <MainReviewItem review={review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </MainReviewStyle>
    );
};

export default MainReview;
