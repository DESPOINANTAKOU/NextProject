export async function getCategories() {
  const responseCategories = await fetch(
    "https://api.chucknorris.io/jokes/categories"
  );
  const categories = await responseCategories.json();
  console.log(categories);
  return categories;
}

export async function fetchJoke() {
  const responseJoke = await fetch("https://api.chucknorris.io/jokes/random");
  console.log(responseJoke);
  const joke = await responseJoke.json();
  console.log(joke);
  return joke;
}

export async function fetchCategoryJoke(category: string) {
  const baseUrl = "https://api.chucknorris.io/jokes/random?category=";
  const categoryJokeResponse = await fetch(`${baseUrl}${category}`);
  const categoryJoke = await categoryJokeResponse.json();
  console.log(categoryJoke);
  return categoryJoke;
}

export async function fetchCurrentWord(currentUserSearch : string){
  // Call the API and fetch data
  const baseUrl = "https://api.chucknorris.io/jokes/search?query=";
  const currentWord = await fetch(`${baseUrl}${currentUserSearch}`);
  // Convert to JSON
  const modifiedCurrentWord = await currentWord.json();
  // return the object
  return modifiedCurrentWord;
} 
