/* eslint-disable react/prop-types */

/*
  items - Items it should display
  resourceName - This will be either product or people or whatever resource this list will be displaying
  itemComponent - Actual component that we will use to display each of the items in the item array prop

*/
function RegularList({ items, resourceName, itemComponent: ItemComponent }) {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
}

export default RegularList;
