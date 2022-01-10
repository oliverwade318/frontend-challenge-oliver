// import styles from './index.css';
import './index.scss';

// icons
import { IoMdPin } from 'react-icons/io';

const PropertyCard = ({ data, selectedItem, selectedProperty }) => {
  // extract number
  const extractNumber = () => {
    return data.baseRent.replace('$', '').replace(',', '');
  };

  return (
    <div className={`card ${selectedProperty===data.name ? 'active' : ''}`} onClick={() => selectedItem(data.id, data.name)}>
      <div className='main'>
        <h1 className='title'>{data.name}</h1>
      </div>
      <div className='cardDetail'>
        <div className='address'>
          <div className="addressField">
            <IoMdPin />
            <span>{data.address1} </span>
            <span>{data.address2}</span>
          </div>
          <h2>{data.baseRent}</h2>
        </div>
        <div className='rent'>
          <div className="tag">{data.sqft} sqft.</div>
          <div className="tag">
            ${(extractNumber(data.baseRent) / data.sqft).toFixed(2)}/sqft/mo
          </div>
          <div className="tag">
            ${((extractNumber(data.baseRent) / data.sqft) * 12).toFixed(2)}
            /sqft/year
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
