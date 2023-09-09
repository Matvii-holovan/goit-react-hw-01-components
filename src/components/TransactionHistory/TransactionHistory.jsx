import PropTypes from 'prop-types';
import './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
      <table>
        <thead>
          <tr style={{ backgroundColor: createColor() }}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} style={{ backgroundColor: createColor() }}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  
  const createColor = () => {
    const color =
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      0.2 +
      ')';
    // console.log(color);
    return color;
  };
  
  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ).isRequired,
  };