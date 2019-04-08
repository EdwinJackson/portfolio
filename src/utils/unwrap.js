/**
 * Contentful returns objects in a deeply-nested object
 * this function will unwrap those objects into a more usuable format
 * @param {Object[]} contentfulCollection 
 */
export default function unwrap(contentfulCollection) {
  if (Array.isArray(contentfulCollection)) {
    throw new Error('this is not an array: ', contentfulCollection);
  }
  return contentfulCollection.edges.map(({node}) => ({...node}));
}