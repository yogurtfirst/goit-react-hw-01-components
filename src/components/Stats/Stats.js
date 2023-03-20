import PropTypes from 'prop-types';
import StatsItem from '../StatsItem/StatsItem.js';
import css from './Stats.module.css';

const Stats = ({stats}) => {
    return (
        <ul className={css["stats"]}>
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