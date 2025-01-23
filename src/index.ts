//Classe que representa o item de uma lista de tarefas

class Task {
  //Constructor serve para inicializar as propriedades do objeto
  constructor(nome: string, concluida: boolean){
    this.nome = nome;
    this.concluida = false;
  }
  nome: string;
  concluida: boolean

  public get getNome() : string {
    return this.nome;
  }
  public set setNome(nome: string) {
    this.nome = nome;
  }

  public set setConcluida(concluida: boolean) {
    this.concluida = concluida;
  }
}

const tarefa = new

