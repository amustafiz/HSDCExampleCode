export function fetchUser() {
  console.log("fetch user...");
  return fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => {
      console.log('data', data);
      const { name } = data;
      return name;
    })
}

export function fetchPosts() {
  console.log("fetch posts...");
  return fetch('https://swapi.dev/api/people/1/')
    .then((response) => response.json())
    .then((data) => {
      console.log('data', data);
      const { starships } = data;
      return starships;
    })
    .catch((err) =>  {
      console.log('we got',err);
    })
}
