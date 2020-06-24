// There are two identical DOM trees, A and B.
// For DOM tree A, we have the location of an element.
// Create a function to find that same element in tree B.

function reversePath(element, root) {
  const path = [];
  let current = element;

  while (current.parentNode) {
    const index = [...current.parentNode.children].indexOf(current);
    path.push(index);
    current = parentNode;
  }

  current = root;
  while (path.length) {
    current = current.children[path.pop()];
  }

  return current;
}