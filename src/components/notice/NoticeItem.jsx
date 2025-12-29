import { Link } from 'react-router-dom';

const NoticeItem = ({ notice, currentPage }) => {
    const { id, title, date } = notice;
    return (
        <tr>
            <td>{id}</td>
            <td>
                <Link to={`/notice/${id}`} state={{ page: currentPage }}>
                    {title}
                </Link>
            </td>
            <td>{date}</td>
        </tr>
    );
};

export default NoticeItem;
