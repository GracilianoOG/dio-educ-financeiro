import { Goal, Trash2 } from 'lucide-react'

import { Button } from '@/components/shared/Button'
import { Divider } from '@/components/shared/Divider'
import { PageHero } from '@/components/shared/PageHero'

export const SimulationHistoryPage = () => {
  return (
    <main className="mb-24px px-4 py-8">
      <PageHero
        title="Histórico de simulações"
        subtitle="Com base no seu perfil financeiro e objetivos."
      />
      <div>
        <div className="bg-card flex flex-col gap-6 rounded-[22px] p-8 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
          <div className="flex size-10 items-center justify-center rounded-[10.67px] bg-[#ECE5F8]">
            <Goal size={26} className="text-primary" />
          </div>
          <div>
            <p className="text-foreground mb-1 text-base font-semibold">Viagem para o Japão</p>
            <p className="text-muted-foreground text-sm">24/02/2026</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1 text-xs font-semibold uppercase">
              Custo da meta
            </p>
            <p className="text-foreground text-base font-semibold">R$ 15.000,00</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1 text-xs font-semibold uppercase">Prazo</p>
            <p className="text-foreground text-base font-semibold">12 meses</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1 text-xs font-semibold uppercase">
              Economia mensal
            </p>
            <p className="text-foreground text-base font-semibold">R$ 1.250,00</p>
          </div>
          <Divider spacing={0} />
          <div>
            <Button variant="ghost">
              <Trash2 className="text-red-500" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
