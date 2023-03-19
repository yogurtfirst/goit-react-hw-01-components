import PropTypes from 'prop-types';
import './StatsItem.css';

const StatsItem = ({label, quantity}) => {
    return (
        <li>
            <span className="label">{label}</span>
            <span className="quantity">{quantity}</span>
        </li>
    )
};

StatsItem.propTypes = {
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default StatsItem;