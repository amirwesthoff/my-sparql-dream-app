export {
  personenQuery,
  jobTitleQuery,
  sogetistenQuery,
  rollenQuery
}

const personenQuery = `
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
prefix sogpeople: <http://www.sogeti.com/people/>
prefix organization: <http://schema.org/organization#>
prefix person: <http://schema.org/person#>
SELECT ?name
WHERE
  { ?s foaf:name ?name .}
`;

const jobTitleQuery = `
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
prefix sogpeople: <http://www.sogeti.com/people/>
prefix organization: <http://schema.org/organization#>
prefix person: <http://schema.org/person#>
SELECT ?jobTitle
WHERE
  { ?s person:jobTitle ?jobTitle .}
`;

const sogetistenQuery = `
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
prefix sogpeople: <http://www.sogeti.com/people/>
prefix org: <http://schema.org/organization#>
prefix person: <http://schema.org/person#>
SELECT ?wie ?organisatie
WHERE
  { ?wie org:employee ?organisatie .}
`;

const rollenQuery = `
prefix sogcm: <http://www.sogeti.com/competentiemodel/>
prefix person: <http://schema.org/person#>
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?o
WHERE
  { ?s rdf:label ?o .}
`;