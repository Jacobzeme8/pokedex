
export const PokedexApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  setTimeout: 3000
})

export const sandboxApi = axios.create({
  baseURL:"https://bcw-sandbox.herokuapp.com/api/TrainerYakub/pokemon",
  setTimeout: 2500
})

  

