export default (date: string) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString('pt-BR', {
    month: 'short',
    day: 'numeric',
  });
};
