import { Component } from '@angular/core';

interface Contatos{
  nome:string,
  idade:string,
  telefone: string,
  email: string,
  cidade: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app-teste';
  lista: Contatos[] = []
  
  
salvar(dados:any){
  if(dados.email)
  console.log(dados)
  this.lista.push(dados)
}

excluir(contato:Contatos){
  let pos = this.lista.indexOf(contato)

  this.lista.splice(pos,1)
}

}

