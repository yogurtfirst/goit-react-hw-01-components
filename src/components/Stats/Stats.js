import PropTypes from 'prop-types';
import StatsItem from '../StatsItem/StatsItem.js';
import './Stats.css';

const Stats = ({stats}) => {
    return (
        <ul className="stats">
            {Object.keys(stats).map(key => (
                <StatsItem key= {key} label= {key} quantity= {stats[key]} />
            ))}
        </ul>
    )
};

Stats.propTypes = {
    stats: PropTypes.object.isRequired,
}

export default Stats;