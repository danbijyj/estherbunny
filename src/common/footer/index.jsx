import { FooterStyle } from './style';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="footer_top">
                <p></p>
            </div>
            <div className="inner">
                <h2>ESTHER BUNNY</h2>
                <div className="service">
                    <span>이용약관</span>
                    <span>개인정보취급방침</span>
                    <span>이용안내</span>
                    <span>광고/제휴문의</span>
                </div>
                <div className="info">
                    <p>
                        <span>주소</span>서울특별시 금천구 두산로 70
                        (현대지식산업센터) 402호
                    </p>
                    <p>
                        <span>통신판매업신고번호</span>2016-서울금천-0446
                    </p>
                    <p>
                        <span>사업자등록번호</span>108-19-20302
                    </p>
                </div>
                <div className="copy">
                    copyright (c) estherbunnyshop all rights reserved.
                </div>
            </div>
        </FooterStyle>
    );
};

export default Footer;
