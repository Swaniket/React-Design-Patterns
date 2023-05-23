/* eslint-disable react/prop-types */

// Note: This component doesn't contain any styling that would indicate it knows where its being displayed.
// We can display this SmallPersonListItem in a numbered list, in a very narrow list, in a very wide list
// And we could use its styling in its parent component to determine how it gets displayed.
function SmallPersonListItem({ person }) {
  const { name, age } = person;

  return (
    <div>
      Name: {name}, Age: {age}
    </div>
  );
}

export default SmallPersonListItem;
