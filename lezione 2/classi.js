
// Le classi sono strutture dati con
// - proprietà (variabili)
// - metodi (funzioni)

// Nella dichiarazione di una classe ci si riferisce alle sue proprietà 
// ed ai suoi metodi con la parola chiave "this"

function Butel (nome, anni) {

  // prima parte: definizione delle proprietà
  this.nome = nome;
  this.anni = anni;

  // seconda parte: definizione dei metodi 
  // (le azioni che possono fare gli oggetti di questa classe)
  this.grow = function () {
    this.anni++;
  }
}

var roby = new Butel("roby", 39);


// alternative syntax

class Butel {

  // prima parte: definizione delle proprietà
  constructor (nome, anni) {
    this.nome = nome;
    this.anni = anni;
  }

  // seconda parte: definizione dei metodi 
  // (le azioni che possono fare gli oggetti di questa classe)
  grow () {
    this.anni++;
  }
}

