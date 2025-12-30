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

    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size)
        );

    const reviewPages = chunk(reviews, 6);

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
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                    >
                        {reviewPages.map((page, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="review_grid">
                                    {page.map((review) => (
                                        <MainReviewItem
                                            key={review.id}
                                            review={review}
                                        />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </MainReviewStyle>
    );
};

export default MainReview;
