import { VisualItemStyle } from './style';
import { MainButtonStyle } from '../../ui/style';

const MainVisualItem = ({ data }) => {
    const { image, badge, titleEn, title, desc } = data;
    return (
        <VisualItemStyle>
            <img src={image} alt={title} />
            <div className="item_text">
                <p className="badge">{badge}</p>
                <p className="title_en">{titleEn}</p>
                <h3>{title}</h3>
                <p className="desc">{desc}</p>
                <MainButtonStyle
                    style={{
                        width: '180px',
                        display: 'block',
                        margin: '0 auto',
                        fontFamily: 'Yangjin',
                        fontSize: '14px',
                        fontWeight: 300,
                    }}
                >
                    Shop Now
                </MainButtonStyle>
            </div>
        </VisualItemStyle>
    );
};

export default MainVisualItem;
