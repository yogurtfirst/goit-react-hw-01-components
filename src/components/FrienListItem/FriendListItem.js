import PropTypes from 'prop-types';
import './FriendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className="friend-list-item">
            <span className={`friend-status ${isOnline ? "friend-status-active" : "friend-status-inactive"}`}></span>
            <img className="friend-avatar" src={avatar} alt="User avatar" width="48" />
            <p className="friend-name">{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;