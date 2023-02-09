import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js";
import { PokedexApi, sandboxApi } from "./AxiosService.js"


class PokedexService{
  async catchPokemon() {
    const res = await sandboxApi.post('/pokemon', appState.pokemon)
    console.log(res);
    appState.myPokedex.push(appState.pokemon)
    appState.emit('myPokedex')
  }
  async getPokemon(name) {
    const index = appState.pokedex.find(p => p.name == name)
    const res = await PokedexApi.get(index.name)
    const pokemon = new Pokemon(res.data)
    appState.pokemon = pokemon
    console.log(appState.pokemon);
  }
  async getPokedex() {
    const res = await PokedexApi.get()
    appState.pokedex = res.data.results
  }

}

export const pokedexService = new PokedexService()