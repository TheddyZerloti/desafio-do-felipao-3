// Classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
      this.nome = nome;  // Nome do herói
      this.idade = idade;  // Idade do herói
      this.tipo = tipo;  // Tipo do herói (guerreiro, mago, etc.)
    }
  
    // Método atacar
    atacar() {
      // Estrutura de decisão para determinar o ataque de acordo com o tipo
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      // Exibir a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
  heroi1.atacar();  // Saída: O guerreiro atacou usando espada.
  
  const heroi2 = new Heroi('Merlin', 150, 'mago');
  heroi2.atacar();  // Saída: O mago atacou usando magia.
  
  const heroi3 = new Heroi('Bruce', 40, 'monge');
  heroi3.atacar();  // Saída: O monge atacou usando artes marciais.
  
  const heroi4 = new Heroi('Hattori', 25, 'ninja');
  heroi4.atacar();  // Saída: O ninja atacou usando shuriken.
  