import styled from 'styled-components';

export const VisualStyle = styled.section`
    .inner {
        margin-top: 50px;
        border: 3px solid #000;
        border-radius: 30px;
        overflow: hidden;
        padding: 70px 20px;
        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }
        .prev,
        .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            background: none;
            border: none;
            font-size: 40px;
            cursor: pointer;
            transition: 0.2s;
            &:hover {
                color: #ef4da2;
            }
        }
        .prev {
            left: 20px;
        }
        .next {
            right: 20px;
        }
    }
`;

export const VisualItemStyle = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
    padding: 0 80px;
    img {
        border-radius: 20px;
    }
    .item_text {
        .badge {
            color: #ef4da2;
            font-family: 'Yangjin', sans-serif;
            position: relative;
            display: inline-block;
            margin-bottom: 52px;
            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 5px;
                width: 100%;
                height: 7px;
                background-color: #f3d9e2;
                z-index: -1;
            }
        }
        .title_en {
            color: #bbb;
            font-size: 14px;
            font-weight: 800;
            margin-bottom: 8px;
        }
        h3 {
            font-size: 32px;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 16px;
            white-space: pre-line;
        }
        .desc {
            font-size: 14px;
            margin-bottom: 76px;
            word-break: keep-all;
        }
    }
`;

export const MainCategoryStyle = styled.section`
    .inner {
        padding: 100px 0;
        h2 {
            font-size: 20px;
            margin-bottom: 40px;
            font-weight: 600;
        }
        .main_category {
            display: flex;
            justify-content: space-between;
            .category_item {
                cursor: pointer;
                text-align: center;
                transition: 0.2s ease;
                img {
                    width: 170px;
                    border-radius: 50%;
                    border: 2px solid #000;
                    box-shadow: 3px 3px 0 0 #000;
                    margin-bottom: 16px;
                }
                h3 {
                    font-weight: 600;
                }
                &:hover {
                    transform: translateY(-5px);
                    h3 {
                        color: #ef4da2;
                    }
                }
            }
        }
    }
`;

export const MainBestStyle = styled.section`
    background-color: #eaebff;
    padding: 100px 0;
    h2 {
        font-size: 20px;
        margin-bottom: 40px;
        font-weight: 600;
    }
    .slider-container {
        overflow-x: hidden;
        overflow-y: visible;
        padding-bottom: 80px;
        .slick-list {
            overflow: visible;
        }
        .slick-track {
            display: flex;
        }
        .best_item {
            background-color: #fff;
            border: 2px solid #000;
            box-shadow: 3px 3px 0 0 #000;
            border-radius: 20px;
            padding: 25px;
            box-sizing: border-box;
            margin: 0 24px;
            text-align: center;
            cursor: pointer;
            img {
                width: 100%;
                border-radius: 12px;
                display: block;
                margin-bottom: 24px;
            }
            .price {
                span {
                    font-size: 20px;
                    font-weight: 600;
                }
            }
            .rate {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                font-size: 14px;
                svg {
                    display: block;
                    color: #ef4da2;
                }
            }
        }
        .slick-slide {
            padding: 42px 0 36px;
        }
        .slick-center .best_item {
            transform: scale(1.2);
            transition: transform 0.25s;
        }
        .best-prev,
        .best-next {
            position: absolute;
            bottom: -80px;
            top: auto;
            transform: none;
            z-index: 20;
            background: none;
            border: none;
            font-size: 40px;
            cursor: pointer;
            color: #000;
            transition: 0.2s;
        }
        .best-prev {
            left: 50%;
            transform: translateX(-50px);
        }
        .best-next {
            left: 50%;
        }
        .best-prev:hover,
        .best-next:hover {
            color: #ef4da2;
        }
    }
`;

export const MainReviewStyle = styled.section`
    .inner {
        padding: 100px 0;
        h2 {
            font-size: 20px;
            margin-bottom: 40px;
            font-weight: 600;
        }
        .swiper {
            padding-bottom: 52px;
            .swiper-wrapper {
                gap: 0;
            }
        }
        .swiper-pagination-bullet {
            background-color: #000;
            opacity: 1;
            width: 12px;
            height: 12px;
        }
        .swiper-pagination-bullet-active {
            background-color: #898dee;
        }
        .review_grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
        }
        .review_item {
            border: 2px solid #000;
            border-radius: 16px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            img {
                width: 100%;
                max-width: 200px;
                border-radius: 12px;
                margin: 0 auto 12px;
                aspect-ratio: 1 / 1;
                object-fit: cover;
            }
            .meta {
                font-size: 14px;
                display: flex;
                gap: 20px;
                align-items: center;
                span {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    &:not(:last-child)::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: -12px;
                        width: 1px;
                        height: 12px;
                        background-color: #bbb;
                    }
                }
                .rate {
                    gap: 4px;
                    svg {
                        display: block;
                        color: #ef4da2;
                    }
                }
            }
        }
    }
`;
