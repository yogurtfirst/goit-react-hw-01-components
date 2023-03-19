import PropTypes from 'prop-types';
import DownloadedItem from '../DownloadedItem/DownloadedItem.js';
import './Statistics.css';

const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map(({id, label, percentage}) => (
                    <DownloadedItem key= {id} statLabel= {label} percentage= {percentage} />
                ))}
            </ul>
        </section>    
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

export default Statistics;