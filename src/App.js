// Crie uma class component 

// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)

import React, { Component } from "react";

export default class Task extends Component {
  state= {
    Nome: "Luiz", Idade: 23, ComidaFavorita:"Arroz", Musicas: ["Pagode", "Samba", "Rock"]
  };
  render (){return(
    <div>
      <h1>{this.state.Nome}</h1>
      <h2>{this.state.Idade}</h2>
      <h3>{this.state.ComidaFavorita}</h3>
      <ul>
        <li>{this.state.Musicas[0]}</li>
        <li>{this.state.Musicas[1]}</li>
        <li>{this.state.Musicas[2]}</li>
      </ul>
    </div>
  );
  }
}