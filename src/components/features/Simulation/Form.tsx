import { StepProgress } from '@/components/features/Simulation/Progress'

export const SimulationForm = () => {
  return (
    <>
      <StepProgress currentStep={1} totalSteps={6} />
    </>
  )
}
