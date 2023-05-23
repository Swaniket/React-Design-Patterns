import RegularList from "./ListAndListItems/RegularList";
import NumberedList from "./ListAndListItems/NumberedList";
import { people, products } from "./ListAndListItems/data";
import SmallPersonListItem from "./ListAndListItems/people/SmallPersonListItem";
import LargePersonListItem from "./ListAndListItems/people/LargePersonListItem";
import LargeProductListItem from "./ListAndListItems/products/LargeProductListItem";
import SmallProductListItem from "./ListAndListItems/products/SmallProductListItem";

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
    </>
  );
}

export default App;
