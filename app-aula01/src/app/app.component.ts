import { Component } from '@angular/core';

interface Contatos{
  nome: string,
  email: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-aula01';
  msg:string = "Está funcionando"
  esconder:boolean = false
  rotulo:string = "Mostrar"


  ola(){
    this.msg = "goodbye"
  }

  showHide(){
    if(!this.esconder){
      this.esconder = true
      this.rotulo = "Mostrar"
    } else {
      this.esconder = false
      this.rotulo = "Esconder"
    }
  }

  lista: Contatos[] = [
    {
      nome:"Henrique",
      email:"henrique@gmail.com"
    },
    {
      nome:"Junior",
      email:"junior@gmail.com"
    },
    {
      nome:"Jorge",
      email:"jorge@gmail.com"
    }
  ]
  

  salvar(dados:any){
    this.lista.push(dados)
  }

}
