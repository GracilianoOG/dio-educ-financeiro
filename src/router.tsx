import { createBrowserRouter } from 'react-router-dom'

import { SimulationFormPage } from '@/pages/SimulationFormPage'
import { SimulationHistoryPage } from '@/pages/SimulationHistoryPage'
import { SimulationResultPage } from '@/pages/SimulationResultPage'

import { RootLayout } from './components/layout/RootLayout'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SimulationFormPage />,
      },
      {
        path: '/resultado/:id',
        element: <SimulationResultPage />,
      },
      {
        path: '/historico',
        element: <SimulationHistoryPage />,
      },
    ],
  },
])
