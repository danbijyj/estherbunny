import { MainCategoryStyle } from './style';

const categories = [
    {
        id: 1,
        image: '/images/category_1.png',
        title: 'Plush Toy',
    },
    {
        id: 2,
        image: '/images/category_2.png',
        title: 'Stationery',
    },
    {
        id: 3,
        image: '/images/category_3.png',
        title: 'Accessory',
    },
    {
        id: 4,
        image: '/images/category_4.png',
        title: 'Living',
    },
    {
        id: 5,
        image: '/images/category_5.png',
        title: 'Mobile',
    },
];

const MainCategory = () => {
    return (
        <MainCategoryStyle>
            <div className="inner">
                <h2>Shop by Category</h2>
                <div className="main_category">
                    {categories.map(({ id, image, title }) => (
                        <div className="category_item" key={id}>
                            <img src={image} alt={title} />
                            <h3>{title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </MainCategoryStyle>
    );
};

export default MainCategory;
