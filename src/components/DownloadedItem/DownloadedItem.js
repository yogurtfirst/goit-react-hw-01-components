import PropTypes from 'prop-types';
import css from './DownloadedItem.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const DownloadedItem = ({ statLabel, percentage }) => {
    return (
        <li className={css["downloaded-item"]} style={{
            backgroundColor: getRandomHexColor(),
        }}>
            <span className={css["stat-label"]}>{statLabel}</span>
            <span className={css["percentage"]}>{percentage}</span>
        </li>
    )
};

DownloadedItem.propTypes = {
    statLabel: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default DownloadedItem;