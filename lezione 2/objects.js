
// Gli oggetti sono delle strutture dati con delle proprietà che hanno dei nomi

// creare un oggetto vuoto
var roby = {}

// creare un oggetto con delle proprietà
var roby = {
  nome: "Roberto",
  cognome: "Bertini",
  anni: 39,
  mezzi: ["classe A", "beverly"],
}

// modificare una proprietà
roby.anni = 40
roby["anni"] = 40
roby.anni++

// aggiungere una proprietà
roby.imbriago = false
// il sabato
roby.imbriago = true