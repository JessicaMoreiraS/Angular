import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introducao';

  nomeEu = "Jessica";
  vetor = ["poa", "suzano", "mogi", "itaquaquecetuba"];

  dados: any;
  ngOnInit(){
    fetch('assets/dados.json')
    .then(response => response.json())
    .then(data =>{
      console.log(data.objeto);

      this.dados = data.objeto;
    });
  }
}
