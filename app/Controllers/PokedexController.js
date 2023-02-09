import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokedexService } from "../Services/PokedexService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function _drawPokedex(){
  let template = ""
  appState.pokedex.forEach(p => template += Pokemon.Pokedex(p) )
  setHTML('pokedex', template)
}


function _drawPokemon(){
  let template = ""
  template = appState.pokemon.PokemonCard
  setHTML('pokemon-card', template)
}
export class PokedexController{


  constructor(){
    this.getPokedex()
    appState.on('pokedex', _drawPokedex)
    appState.on('pokemon', _drawPokemon)

  }


  async getPokedex(){
    try {
      await pokedexService.getPokedex()
    } catch (error) {
      Pop.error(error)
    }
  }

  async getPokemon(name){
    try {
      await pokedexService.getPokemon(name)
    } catch (error) {
      Pop.error(error)
    }
  }

  async catchPokemon(){
    try {
      await pokedexService.catchPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }


}