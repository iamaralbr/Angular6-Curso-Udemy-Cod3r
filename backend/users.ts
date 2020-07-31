type Users = { [key: string]: User }

export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string) { }

  matches(another: User): boolean {
    return another !== undefined &&
      another.email === this.email &&
      another.password === this.password
  }
}

export const users: Users = {
  'juliana@gmail.com': new User('juliana@gmail.com', 'Juliana', 'juliana123'),
  'amanda@gmail.com': new User('amanda@gmail.com', 'Amanda', 'amanda123'),
  'anajulia@ig.com.br': new User('anajulia@ig.com.br', 'Ana Júlia', 'ana123'),
  'joao@outlook.com': new User('joao@outlook.com', 'João Pedro', 'joao123'),
  'carol@gmail.com': new User('carol@gmail.com', 'Carol', 'carol123')
}