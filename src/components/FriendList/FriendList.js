import PropTypes from 'prop-types';
import FriendListItem from '../FrienListItem/FriendListItem.js';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <section className={css["friends"]}>
            <ul className={css["friend-list"]}>
                {friends.map(({id, avatar, name, isOnline}) => (
                    <FriendListItem key= {id} avatar= {avatar} name= {name} isOnline={isOnline} />
                ))}
            </ul>
        </section>    
    )
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendList;