import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial-usuario',
  templateUrl: './pagina-inicial-usuario.component.html',
  styleUrls: ['./pagina-inicial-usuario.component.scss']
})
export class PaginaInicialUsuarioComponent implements OnInit {
  // Simulação de dados de profissionais (você deve buscar esses dados de um serviço ou API)
  profissionais = [
    { id: 1, nome: 'Profissional 1', especialidade: 'Especialidade 1' },
    { id: 2, nome: 'Profissional 2', especialidade: 'Especialidade 2' },
    { id: 3, nome: 'Profissional 3', especialidade: 'Especialidade 3' }
    // Adicione mais profissionais conforme necessário
  ];

  constructor() { }

  ngOnInit(): void {
  }

  irParaAgenda(profissionalId: number) {
    // Implemente a navegação para a agenda do profissional com base no ID
    // Por exemplo, usando o roteamento do Angular
  }

  sair() {
    // Implemente a ação de saída, como redirecionar para a página de login ou executar o logout
  }
}
