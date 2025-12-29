import { AboutStyle } from './style';
import { aboutData } from '../../assets/api/aboutData';

const AboutCon = () => {
    return (
        <>
            {aboutData.map(({ id, title, image, direction, text, textEn }) => (
                <AboutStyle key={id} className={direction}>
                    <h3>{title}</h3>
                    <div className="content">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="text">
                            <p>{text}</p>
                            <p className="en">{textEn}</p>
                        </div>
                    </div>
                </AboutStyle>
            ))}
        </>
    );
};

export default AboutCon;
