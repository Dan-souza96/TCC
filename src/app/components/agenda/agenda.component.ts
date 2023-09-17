import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  selectedMonth: number = new Date().getMonth() + 1; // Mês atual
  selectedYear: number = new Date().getFullYear(); // Ano atual
  // Altere os nomes dos dias se necessário
  weekDays: { name: string; date: Date }[] = [];

  constructor() {
    this.generateWeekDays();
  }

  // Função para formatar a data em português
  getFormattedDate(dayIndex: number, weekOffset: number = 0): string {
    const date = new Date(this.selectedYear, this.selectedMonth - 1, dayIndex + 1 + (weekOffset * 7));

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long'
    };

    const formattedDate = date.toLocaleDateString('pt', options);

    return formattedDate;
  }

  times = this.generateTimes();

  agendar(dayIndex: number, timeIndex: number) {
    // Adicione a lógica de agendamento aqui (por exemplo, enviar para o servidor).
    console.log(`Compromisso agendado para ${this.getFormattedDate(dayIndex, 0)}, ${this.times[timeIndex]}`);
  }

  excluir(dayIndex: number, timeIndex: number) {
    // Adicione a lógica de exclusão aqui (por exemplo, enviar para o servidor).
    console.log(`Compromisso excluído em ${this.getFormattedDate(dayIndex, 0)}, ${this.times[timeIndex]}`);
  }

  // Função para navegar para a próxima ou anterior semana
  navegarSemana(weekOffset: number) {
    // Adicione o console.log antes da chamada
    console.log('Valor de weekOffset antes de chamar navegarSemana(1):', weekOffset);
    
    // Atualize a data baseado no deslocamento da semana
    const currentDate = new Date(this.selectedYear, this.selectedMonth - 1);
    currentDate.setDate(currentDate.getDate() + (weekOffset * 7));
  
    // Atualize o ano e mês selecionados
    this.selectedYear = currentDate.getFullYear();
    this.selectedMonth = currentDate.getMonth() + 1;
  
    // Recarregue os horários
    this.times = this.generateTimes();
  
    // Atualize os dias da semana
    this.generateWeekDays();
  
    // Adicione o console.log após a chamada
    console.log('Valor de weekOffset após chamar navegarSemana(1):', weekOffset);
  }

  private generateTimes(): string[] {
    // Função para gerar os horários das 8:00 às 22:00 em intervalos de 30 minutos
    const times = [];
    for (let hour = 8; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} AM`;
        times.push(time);
      }
    }
    return times;
  }

  private generateWeekDays() {
    this.weekDays = [];
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(this.selectedYear, this.selectedMonth - 1, day);
      const dayIndex = date.getDay(); // Índice do dia da semana (0 a 6)
      const dayName = weekdays[dayIndex];

      this.weekDays.push({ name: dayName, date: date });
    }
  }

  onMonthChange() {
    // Quando o mês é alterado, atualize os dias da semana correspondentes
    this.generateWeekDays();
  }
}
