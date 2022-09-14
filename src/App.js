
const books = [
  {
    id: 1,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._AC_SX184_.jpg',
    title: 'Atomic Habits: The life-changing million copy bestseller',
    author: 'James Clear',
  },
  {
    id: 2,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51xwGSNX-EL._AC_SX184_.jpg',
    title: 'Ikigai: The Japanese secret to a long and happy life',
    author: 'Héctor García',
  },
  {
    id: 3,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/41r6F2LRf8L._AC_SX184_.jpg',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
  },
];


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book  key={books.id} {...book}></Book>;
      })}
    </section>
  );
}


// const Book = ({img,title,author})=>{
// const Book = (props)=>{

// const {img,title,author} = props;}


// }


const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book;
  // attribute , eventHandler
  // onClick , onMouseOver

  // const clickHandler = () => {
  //   alert('Hello World');
  // }

  // const complexExample = (author) => {
  //   alert("author");

  // }

  return ( <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {/* <button type="button" onClick={clickHandler} > Reference Example</button>
    <button type="button" onClick={ () => complexExample() } > More complex example</button> */}
  </article>
  );
}



function App() {
  return (
    <BookList />
  );
}

export default App;
