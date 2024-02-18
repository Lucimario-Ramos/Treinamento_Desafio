class Heroi {
    constructor(nome, idade, tipos) {
      this.nome = nome;
      this.idade = idade;
      this.tipos = tipos;
    }
  
    atacar() {
      let poder = "";
  
      if (this.tipos.includes("mago")) {
        poder = "usou magia";
      } else if (this.tipos.includes("guerreiro")) {
        poder = "usou espada";
      } else if (this.tipos.includes("monge")) {
        poder = "usou artes marciais";
      } else if (this.tipos.includes("ninja")) {
        poder = "usou shuriken";
      }
  
      console.log(`O ${this.tipos} atacou usando ${poder}`);
    }
  }
  
  const tipos = ["mago", "guerreiro", "monge", "ninja"];
  const jornadaHeroi = new Heroi("Lucimario", 34, "guerreiro");
  jornadaHeroi.atacar();
  