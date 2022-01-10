// imports
import React, { useState, useEffect } from 'react';

// styles
import './index.scss';

// utils
import { getProperties, getProperty } from '../../utils/requests';

// components
import PropertyCard from '../../components/PropertyCard';
import DetailTable from '../../components/DetailTable';
import Loading from '../../components/common/Loading/Loading';
const PropertyPage = () => {
  // states
  const [properties, setProperties] = useState(null);
  const [selectedProperty, setSelectedPropertyName] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);

  // get properties
  useEffect(() => {
    getProperties()
      .then((res) =>
        res
          .json()
          .then((res) => !res.message && setProperties(res))
          .catch((err) => console.log(err)),
      )
      .catch((err) => console.log(err));
  }, []);

  // select property
  const selectProperty = (id, name) => {
    setLoading(true);
    setSelectedPropertyName(name);
    getProperty(id)
      .then((res) =>
        res
          .json()
          .then((res) => {
            setLoading(false);
            !res.message && setSelectedItem(res);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          }),
      )
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return !properties ? (
    <div className='loading'>
      <Loading />
    </div>
  ) : (
    <>
      <div className='container'>
        <div className='cardlist'>
          {properties.map((item, index) => (
            <PropertyCard
              key={index}
              data={item}
              selectedItem={selectProperty}
              selectedProperty={selectedProperty}
            />
          ))}
        </div>
        {loading ? (
          <div className='list-loading'>
            <Loading />
          </div>
        ) : selectedItem ? (
          <div className='details'>
            <DetailTable
              data={selectedItem}
              selectedProperty={selectedProperty}
            />
          </div>
        ) : (
          <p className='no-selected'>
            Please choose a property to see the leases
          </p>
        )}
      </div>
    </>
  );
};

export default PropertyPage;
