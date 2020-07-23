const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(value);

export default formatValue;
