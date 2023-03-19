import PropTypes from 'prop-types';
import DownloadedItem from '../DownloadedItem/DownloadedItem.js';
import './Statistics.css';

const Statistics = ({ data }) => {
    const cntItems = data.length;
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {data.map(({id, label, percentage}) => (
                    <DownloadedItem key= {id} statLabel= {label} percentage= {percentage} cntItems={cntItems} />
                ))}
            </ul>
        </section>    
    )
};

Statistics.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Statistics;