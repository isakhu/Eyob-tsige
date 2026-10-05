const fs = require('fs');
const path = require('path');

const eyobBooksPath = path.join(__dirname, 'public', 'images', 'books', 'eyob-books');
const booooPath = path.join(__dirname, 'public', 'images', 'books', 'boooo');

const eyobBooks = fs.readdirSync(eyobBooksPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png')).map(f => '/images/books/eyob-books/' + f);
const booooBooks = fs.readdirSync(booooPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png')).map(f => '/images/books/boooo/' + f);

const allBooks = [...eyobBooks, ...booooBooks];

const content = `export type BookCategory = "Uncategorized" | "All" | "Politics/History" | "Fiction" | "Psychology" | "Theology" | "Biography" | "Leadership" | "Business" | "Self-Help";

export interface Book {
  id: string;
  path: string;
  category: BookCategory;
}

export const bookstoreBooks: Book[] = [
${allBooks.map((p, i) => `  { id: "book_${i}", path: "${p}", category: "Uncategorized" }`).join(',\n')}
];`;

fs.writeFileSync(path.join(__dirname, 'app', 'data', 'bookstoreImages.ts'), content);
console.log('Successfully updated bookstoreImages.ts with ' + allBooks.length + ' books!');
