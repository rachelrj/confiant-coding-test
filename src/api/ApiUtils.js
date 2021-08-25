import axios from 'axios';
// TODO: Store api details in environment variables or credential store
async function search(searchString, searchType) {
  const encodedSearchString = encodeURIComponent(searchString);
  return axios.get('http://localhost:8080?' +
    `search=${encodedSearchString}&language=${searchType}`,
  ).catch((err) => err);
}

export default search;
