/* eslint-disable react/prop-types */
// The only difference between regular list and numbered list
// is that it will automatically display numbers along with the list items
function NumberedList({ items, resourceName, itemComponent: ItemComponent }) {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
}

export default NumberedList;
