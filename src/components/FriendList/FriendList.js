import PropTypes from 'prop-types';
import FriendListItem from '../FrienListItem/FriendListItem.js';
import './FriendList.css';

const FriendList = ({ data }) => {
    return (
        <section className="friends">
            <ul className="friend-list">
                {data.map(({id, avatar, name, isOnline}) => (
                    <FriendListItem key= {id} avatar= {avatar} name= {name} isOnline={isOnline} />
                ))}
            </ul>
        </section>    
    )
};

FriendList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default FriendList;