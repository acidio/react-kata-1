import React, { useContext } from 'react';

import { Header } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

import DataContext from '../store/DataContext';

function Isbn() {
  const { id } = useParams();

  const data = useContext(DataContext);

  const item = data.library[id];

  return (
    <div>
      <Header as="h1">ISBN: {id} </Header>
      {item && <div>{item.title}</div>}
    </div>
  );
}

export default Isbn;
