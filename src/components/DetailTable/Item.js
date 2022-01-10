// imports
import React, { useState, useEffect } from 'react';

const Item = ({ data }) => {
  // states
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    handleContacts();
    return () => {
      setContacts([]);
    };
  }, []);

  const handleContacts = () => {
    const keys = Object.keys(data.contacts);
    keys.forEach((key) => {
      if (
        data.contacts[key].tags.find((item) => item.toLowerCase() === 'primary')
      ) {
        setContacts((prev) => [...prev, { ...data.contacts[key], name: key }]);
      }
    });
  };

  return (
    <tr>
      <td>{data.companyName}</td>
      <td>{data.startDate}</td>
      <td>{data.inclusiveEndDate}</td>
      <td>{data.status}</td>
      <td>
        {contacts.length > 0 ? (
          contacts.map((item, index) => (
            <span
              key={index}
            >{`${item.name}(${item.phone}, ${item.email})`}</span>
          ))
        ) : (
          <span>(No primary contact to show)</span>
        )}
      </td>
    </tr>
  );
};

export default Item;
