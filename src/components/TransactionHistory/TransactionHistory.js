import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem.js';
import './TransactionHistory.css';

const TransactionHistory = ({ data }) => {
    return (
        <div className="transaction-history">
            <table className="transaction-header">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
            </table>

            <table className="transaction-rows">
                <tbody>
                    {data.map(({ id, type, amount, currency }) => (
                        <TransactionItem key={id} type={type} amount={amount} currency={currency} />
                    ))}
                </tbody>
            </table>
        </div>
    )
};

TransactionHistory.propTypes = {
    data: PropTypes.array.isRequired,
}

export default TransactionHistory;