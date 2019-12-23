import React, { useContext } from 'react';

import DataContext from '../store/DataContext';

function Read() {
  const data = useContext(DataContext);

  const authors = Object.keys(data.authors);

  return (
    <div>
      {authors.map(key => {
        const { firstname, lastname, email, library } = data.authors[key];
        return (
          <div key={email}>
            {firstname} {lastname}
            <br />
            {library.map(isbn => {
              const published = data.library[isbn];
              return (
                <div>
                  {published.title} {published.type}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Read;
