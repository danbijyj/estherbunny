import AboutCon from '../../components/about/AboutCon';
import { AboutWrap } from './style';

const About = () => {
    return (
        <AboutWrap>
            <div className="inner">
                <h2>Brand</h2>
                <article>
                    <AboutCon />
                </article>
            </div>
        </AboutWrap>
    );
};

export default About;
