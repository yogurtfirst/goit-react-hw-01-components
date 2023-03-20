import PropTypes from 'prop-types';
import Description from '../Description/Description.js';
import Stats from '../Stats/Stats.js';
import css from './Profile.module.css';

const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <div className={css["profile"]}>
            <Description
                username={username}
                tag={tag}
                location={location}
                avatar={avatar}
            />

            <Stats
                stats={stats}
            />
        </div>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

export default Profile;