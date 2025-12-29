import { Link } from 'react-router-dom';

const CustomerItem = ({ customer, currentPage }) => {
    const { id, name, title, content, date } = customer;
    return (
        <tr>
            <td>{id}</td>
            <td>
                <Link to={`/customer/${id}`} state={{ page: currentPage }}>
                    {title}
                </Link>
            </td>
            <td>{name}</td>
            <td>{date}</td>
        </tr>
    );
};

export default CustomerItem;
