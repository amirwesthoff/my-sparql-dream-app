export {
  query
}

const query = `
SELECT *
WHERE {
  ?s ?p rdfs:Class .
}
`;
