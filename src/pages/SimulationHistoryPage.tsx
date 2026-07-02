import { useState } from 'react'

import Card from '@/components/features/History/Card'
import { PageHero } from '@/components/shared/PageHero'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { formatToReal } from '@/utils/currency'
import { calcMonthlySavings } from '@/utils/simulation'

export const SimulationHistoryPage = () => {
  const { deleteFormData, getAllFormData } = useSimulationStorage()
  const [insights, setInsights] = useState(() => getAllFormData())

  const handleDelete = (id: string) => {
    deleteFormData(id)
    setInsights(getAllFormData())
  }

  return (
    <main className="mb-24px mx-auto max-w-7xl px-4 py-8">
      <PageHero
        title="Histórico de simulações"
        subtitle="Com base no seu perfil financeiro e objetivos."
      />
      <div className="flex flex-col gap-6">
        {insights?.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            goalName={data.goalName}
            date={'01/01/2000'}
            goalCost={data.goalAmount}
            months={data.goalDeadline}
            savings={formatToReal(calcMonthlySavings(data))}
            onDelete={() => handleDelete(data.id)}
          />
        ))}
      </div>
    </main>
  )
}
