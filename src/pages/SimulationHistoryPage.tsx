import { Goal } from 'lucide-react'

import { PageHero } from '@/components/shared/PageHero'

export const SimulationHistoryPage = () => {
  return (
    <main className="mb-24px px-4 py-8">
      <PageHero
        title="Histórico de simulações"
        subtitle="Com base no seu perfil financeiro e objetivos."
      />
      <div>
        <div className="bg-card rounded-[22px] p-8 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
          <div className="flex size-10 items-center justify-center rounded-[10.67px] bg-[#ECE5F8]">
            <Goal size={26} className="text-primary" />
          </div>
          <div>
            <p className="text-foreground text-base">Viagem para o Japão</p>
            <p className="text-muted-foreground text-sm">24/02/2026</p>
          </div>
        </div>
      </div>
    </main>
  )
}
