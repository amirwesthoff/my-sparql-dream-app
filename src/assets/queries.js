export {
  personenQuery
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

export {
  jobTitleQuery
}

const jobTitleQuery = `
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
prefix sogpeople: <http://www.sogeti.com/people/>
prefix organization: <http://schema.org/organization#>
prefix person: <http://schema.org/person#>
SELECT ?jobTitle
WHERE
  { ?s person:jobTitle ?jobTitle .}
`;

export {
  sogetistenQuery
}

const sogetistenQuery = `
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
prefix sogpeople: <http://www.sogeti.com/people/>
prefix org: <http://schema.org/organization#>
prefix person: <http://schema.org/person#>
SELECT ?wie ?sogetisten
WHERE
  { ?wie org:employee ?sogetisten .}
`;