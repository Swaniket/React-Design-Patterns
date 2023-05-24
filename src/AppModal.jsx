import Modal from "./Modal/Modal";
import LargeProductListItem from "./ListAndListItems/products/LargeProductListItem";
import { products } from "./ListAndListItems/data";

function App() {
  return (
    <Modal>
      <LargeProductListItem product={products[0]} />
    </Modal>
  );
}

export default App;
