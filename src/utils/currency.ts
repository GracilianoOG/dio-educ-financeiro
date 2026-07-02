export const formatToReal = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export const formatCurrencyMask = (value: string): string => {
  const digits = value.replace(/\D/g, '')

  if (!digits) {
    return ''
  }

  const number = Number(digits) / 100

  if (isNaN(number)) {
    return ''
  }

  return formatToReal(number)
}

export const parseCurrency = (value: string): number => {
  return parseFloat(value.replace(/\./g, '').replace(',', '.').replace('R$', '')) || 0
}
