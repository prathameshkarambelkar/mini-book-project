
const secondBook = [
  {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._AC_SX184_.jpg',
  title: 'Atomic Habits: The life-changing million copy bestseller',
  author: 'James Clear',
  },
  {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51xwGSNX-EL._AC_SX184_.jpg',
  title: 'Ikigai: The Japanese secret to a long and happy life',
  author: 'Héctor García',
  }
];

const names = ['john','pk','sonw']

function BookList() {
  return <section className="booklist">
  <Book />
  </section>;
}
// const Book = ({img,title,author})=>{
// const Book = (props)=>{

// const {img,title,author} = props;}


// }


const Book = (props) => {
  return <article className="book">
    <img src={props.img} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>

  </article>;
}



function App() {
  return (
    <BookList />
  );
}

export default App;
