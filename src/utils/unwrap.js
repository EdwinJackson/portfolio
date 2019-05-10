/**
 * Contentful returns arrays of deeply-nested objects 
 * this function will unwrap those objects 
 * into a developer-friendly flatter format
 * @param {Object[]} contentfulCollection 
 */
export default function unwrap(contentfulCollection) {
  if (Array.isArray(contentfulCollection)) {
    throw new Error('this is not an array: ', contentfulCollection);
  }
  return contentfulCollection.edges.map(({node}) => ({...node}));
}