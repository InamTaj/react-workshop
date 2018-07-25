import React from 'react';
import PropTypes from 'prop-types';

import './Searchbox.css';

const Searchbox = ({query, onChangeCB}) => {
  return (
      <div className="search-box">
        <input placeholder="Search" onChange={onChangeCB} />
        { !query && <p className="info">Showing ALL results</p> }
      </div>
  );
};

Searchbox.propTypes = {
  query: PropTypes.string,
  onChangeCB: PropTypes.func.isRequired,
};

export default Searchbox;
