// imports
import React from 'react';

// styles
import './index.scss';

// components
import Item from './Item';

const DetailTable = ({ data, selectedProperty }) => {
  return data.length > 0 ? (
    <div className='table'>
      <h3>{selectedProperty} Leases</h3>
      <table>
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Lease Status</th>
            <th>Primary Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return <Item key={index} data={item} />;
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <p className='no-leases'>There is no leases to show for {selectedProperty}.</p>
  );
};

export default DetailTable;
