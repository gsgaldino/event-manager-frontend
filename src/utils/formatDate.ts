class FormatDate {
  public static toSmallDate(date: string): string {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('pt-BR', {
      month: 'short',
      day: 'numeric',
    });
  }

  public static toFullDate(date: string): string {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('pt-BR', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  }

  public static getDay(date: string): string {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('pt-BR', {
      day: '2-digit',
    });
  }

  public static getDayString(date: string): string {
    const weekdays = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ];
    const dateObject = new Date(date);
    return weekdays[dateObject.getDay()];
  }

  public static getMonthString(date: string): string {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('pt-BR', {
      month: 'long',
    });
  }

  public static getHours(date: string): string {
    const dateObject = new Date(date);
    return `${dateObject.getHours()}:${dateObject.getMinutes()}`;
  }
}

export default FormatDate;
