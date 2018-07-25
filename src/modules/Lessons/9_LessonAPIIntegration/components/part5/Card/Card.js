import React from 'react';
import PropTypes from 'prop-types';

import UserCard from '../UserCard/UserCard';
import RepoCard from '../RepoCard/RepoCard';

const Card = ({cardType, data, onClick}) => {
  return cardType === 'user' ? <UserCard user={data} loadReposCB={onClick} /> : <RepoCard repo={data}/> ;
};

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default Card;
