async function getData(url) {
  try{
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error);
  }
}

function getRandomGame(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

module.exports = {
  getData,
  getRandomGame
}