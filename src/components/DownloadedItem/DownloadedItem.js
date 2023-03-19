import PropTypes from 'prop-types';
import './DownloadedItem.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const DownloadedItem = ({ statLabel, percentage }) => {
    return (
        <li className="downloaded-item" style={{
            backgroundColor: getRandomHexColor(),
        }}>
            <span className="stat-label">{statLabel}</span>
            <span className="percentage">{percentage}</span>
        </li>
    )
};

DownloadedItem.propTypes = {
    statLabel: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default DownloadedItem;