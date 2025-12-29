import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { NoticeDetailStyle } from './style';
import { MainButtonStyle } from '../../ui/style';
import { useSelector } from 'react-redux';

const NoticeDetail = () => {
    const { noticeID } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { notices } = useSelector((state) => state.notice);
    const current = notices.find((notice) => notice.id === Number(noticeID));
    const { id, title, content, date } = current;
    const onGo = (e) => {
        e.preventDefault();
        if (location.state?.page) {
            navigate('/notice', {
                state: { page: location.state.page },
            });
        } else {
            navigate('/notice');
        }
    };
    return (
        <NoticeDetailStyle>
            <div className="inner">
                <h2>공지사항</h2>
                <div className="con">
                    <p className="num">{noticeID}번 공지</p>
                    <h3>{title}</h3>
                    <p className="date">{date}</p>
                    <p className="txt">{content}</p>
                </div>
                <MainButtonStyle
                    style={{
                        width: '300px',
                        display: 'block',
                        margin: '0 auto',
                    }}
                    onClick={onGo}
                >
                    공지사항 목록 보기
                </MainButtonStyle>
            </div>
        </NoticeDetailStyle>
    );
};

export default NoticeDetail;
