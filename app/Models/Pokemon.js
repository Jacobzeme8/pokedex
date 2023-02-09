

export class Pokemon{
  
  constructor(data){
    this.id = data.id || null
    this.name = data.name
    this.nickName = ""
    this.img = data.sprites.front_default
    this.weight = data.weight.toString()
    this.type = data.types
    this._id = data._id || null
  }

  static Pokedex(p){
    return`
    <h2 onclick="app.pokedexController.getPokemon('${p.name}')" class="selectable p-1">${p.name}</h2>
    `
  }

  get PokemonCard(){
    return`
    <div class="card text-center">
            <img class="img-fluid" src="${this.img}"
            alt="poke">
            <h1>${this.name}</h1>
            <div>
              <h3></h3>
              <h3>${this.weight}</h3>
              <button onclick = "app.pokedexController.catchPokemon()" class="btn btn-success rounded mb-2">Catch Pokemon!</button>
            </div>
          </div>
    `
  }

  get MyPokemon(){
    return`
    <h3>${this.name}</h3>
    `
  }



}

