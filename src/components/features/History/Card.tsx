import { ExternalLink, Goal, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/shared/Button'
import { Divider } from '@/components/shared/Divider'

interface CardProps {
  id: string
  goalName: string
  date: string
  goalCost: string
  months: string
  savings: string
  onDelete: () => void
}

const Card = ({ id, goalName, date, goalCost, months, savings, onDelete }: CardProps) => {
  const navigate = useNavigate()

  return (
    <div className="bg-card flex flex-col gap-6 rounded-[22px] p-8 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:flex-row">
      <div className="flex size-10 items-center justify-center rounded-[10.67px] bg-[#ECE5F8]">
        <Goal size={26} className="text-primary" />
      </div>
      <div>
        <p className="text-foreground mb-1 text-base font-semibold">{goalName}</p>
        <p className="text-muted-foreground text-sm">{date}</p>
      </div>
      <div>
        <p className="text-muted-foreground mb-1 text-xs font-semibold uppercase">Custo da meta</p>
        <p className="text-foreground text-base font-semibold">R$ {goalCost}</p>
      </div>
      <div>
        <p className="text-muted-foreground mb-1 text-xs font-semibold uppercase">Prazo</p>
        <p className="text-foreground text-base font-semibold">
          {months} {Number(months) > 1 ? 'meses' : 'mês'}
        </p>
      </div>
      <div>
        <p className="text-muted-foreground mb-1 text-xs font-semibold uppercase">
          Economia mensal
        </p>
        <p className="text-foreground text-base font-semibold">R$ {savings}</p>
      </div>
      <Divider spacing={0} className="lg:hidden" />
      <div className="flex flex-row justify-between">
        <Button className="flex-1" variant="ghost" onClick={onDelete}>
          <Trash2 className="text-red-500" size={24} />
        </Button>
        <Divider orientation="vertical" />
        <Button
          className="flex-1 text-nowrap"
          icon={ExternalLink}
          variant="ghost"
          onClick={() => navigate(`/resultado/${id}`)}
        >
          Ver detalhes
        </Button>
      </div>
    </div>
  )
}

export default Card
