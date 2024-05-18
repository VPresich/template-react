import "./App.css";
import Product from "./Product/Product";
import BookList from "./BooksList/BooksList";
import favouriteBooks from "../data/books";
import Card from "./Card/Card";

function App() {
  return (
    <div>
      <h2>Card title</h2>
      <Card>Text between opening and closing tag</Card>
      <h2>Books of the week</h2>
      <BookList books={favouriteBooks} />
      <h2>Best selling</h2>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={9.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product name="Fries and Burger" price={15.29} />
    </div>
  );
}

export default App;
