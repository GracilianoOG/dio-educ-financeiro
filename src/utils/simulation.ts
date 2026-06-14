import type { SimulationFormData } from '../data/simulation'
import { parseCurrency } from './currency'

export const calcMonthlySavings = (data: SimulationFormData) => {
  return parseCurrency(data.income) - parseCurrency(data.expenses) - parseCurrency(data.debts)
}
