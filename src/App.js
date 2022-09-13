
function BookList() {
  return <section>
  <Book />
  </section>;
}

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>;
}

const Image = () => (<img src="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg" alt="Book Image" />)
  

function App() {
  return (
    <BookList/>
  );
}


const Title = () => <h1>Atomic Habits: The life-changing million copy bestseller</h1>
const Author = () => <h4>James Clear</h4>
export default App;
