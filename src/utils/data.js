import Papa from 'papaparse';

const database = {
  authors: {},
  library: {}
};

const onAuthorsParseComplete = ({ data }) => {
  data.forEach(author => {
    const { email, firstname, lastname } = author;
    database.authors[email] = { email, firstname, lastname, library: [] };
  });
};

Papa.parse('http://localhost:3000/data/authors.csv', {
  download: true,
  header: true,
  complete: onAuthorsParseComplete
});

const onBooksParseComplete = ({ data }) => {
  data.forEach(book => {
    const { title, isbn, authors, description } = book;
    database.library[isbn] = { isbn, title, description, type: 'book' };
    authors.split(',').forEach(email => {
      database.authors[email].library.push(isbn);
    });
  });
};

Papa.parse('http://localhost:3000/data/books.csv', {
  download: true,
  header: true,
  complete: onBooksParseComplete
});

const onMagazinesParseComplete = ({ data }) => {
  data.forEach(magazine => {
    const { title, isbn, authors, publishedAt } = magazine;
    database.library[isbn] = { isbn, title, publishedAt, type: 'magazine' };
    authors.split(',').forEach(email => {
      database.authors[email].library.push(isbn);
    });
  });
};

Papa.parse('http://localhost:3000/data/magazines.csv', {
  download: true,
  header: true,
  complete: onMagazinesParseComplete
});

export default database;
