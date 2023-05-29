import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Item from "./components/Item";

const listProduct = [
  {
    name: "Lorem Ipsum",
    price: 250,
  },
  {
    name: "Lorem Ipsum",
    price: 250,
  },
  {
    name: "Lorem Ipsum",
    price: 250,
  },
  {
    name: "Lorem Ipsum",
    price: 250,
  },
  {
    name: "Lorem Ipsum",
    price: 250,
  },
  {
    name: "Lorem Ipsum",
    price: 250,
  },
  {
    name: "Lorem Ipsum",
    price: 250,
  },
  {
    name: "Lorem Ipsum",
    price: 250,
  },
  {
    name: "Lorem Ipsum",
    price: 250,
  },
  {
    name: "Lorem Ipsum",
    price: 250,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="show-room-item">
          <h2 className="item-title text-center">
            Item with parent container width over 400px
          </h2>
          <div className="w-400">
            <Item
              name={listProduct[0].name}
              image={listProduct[0].image}
              price={listProduct[0].price}
            />
          </div>
        </div>
        <div className="show-room-item">
          <h2 className="item-title text-center">
            Item with parent container width less 400px
          </h2>
          <div className="w-600">
            <Item
              name={listProduct[0].name}
              image={listProduct[0].image}
              price={listProduct[0].price}
            />
          </div>
        </div>
      </div>
      <div className="content">
        <h2 className="content-title text-center">List grid layout</h2>
        <div className="grid-product">
          {listProduct.map((product) => (
            <Item
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
