
const author = 'James Clear'
const title = 'Atomic Habits: The life-changing million copy bestseller'
const img = 'https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
function BookList() {
  return <section className="booklist">
  <Book />
  <Book />
  <Book />
  <Book />
  <Book />
  <Book />
  <Book />
  </section>;
}

const Book = () => {
  return <article className="book">
  <img src={img} alt="Book Image" />
  <h1>{title}</h1>
  <h4>{author}</h4>

 </article>;
}



function App() {
  return (
    <BookList/>
  );
}

export default App;
