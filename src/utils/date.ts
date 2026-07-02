export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('pt-BR')
}

export const switchMonthPlural = (months: string | number) => {
  return Number(months) > 1 ? 'meses' : 'mês'
}
