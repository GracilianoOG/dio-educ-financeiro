import { useState } from 'react'

import { FormStep } from '@/components/features/Simulation/FormStep'
import { StepProgress } from '@/components/features/Simulation/Progress'
import { type SimulationFormData, simulationFormSteps } from '@/data/simulation'

export const SimulationForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState<SimulationFormData>({} as SimulationFormData)
  const totalSteps = simulationFormSteps.length
  const currentStep = simulationFormSteps[currentStepIndex]

  const handleNextStep = (value: string) => {
    const updatedFormData = { ...formData, [currentStep.id]: value }
    setFormData(updatedFormData)

    if (currentStepIndex + 1 > totalSteps - 1) {
      return
    }

    setCurrentStepIndex((prev) => prev + 1)
  }

  const handlePreviousStep = () => {
    if (currentStepIndex === 0) {
      return
    }

    setCurrentStepIndex((prev) => prev - 1)
  }

  return (
    <>
      <StepProgress currentStep={currentStepIndex + 1} totalSteps={totalSteps} />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={handlePreviousStep}
        onNext={handleNextStep}
        hideBackButton={currentStepIndex === 0}
      />
    </>
  )
}
