import { useState } from 'react'
import { TerminalPanel } from './components/TerminalPanel'
import { PageTransition } from './components/PageTransition'

// Pages
import { LoadingPage } from './pages/LoadingPage'
import { PatientProfilePage } from './pages/PatientProfilePage'
import { TimelinePage } from './pages/TimelinePage'
import { LoveReasonsPage } from './pages/LoveReasonsPage'
import { DiagnosisPage } from './pages/DiagnosisPage'
import { PrescriptionPage } from './pages/PrescriptionPage'
import { FinalLetterPage } from './pages/FinalLetterPage'

function App() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep((s) => Math.min(s + 1, 7))

  return (
    <TerminalPanel>
      <PageTransition step={step}>
        {step === 1 && <LoadingPage onNext={nextStep} />}
        {step === 2 && <PatientProfilePage onNext={nextStep} />}
        {step === 3 && <TimelinePage onNext={nextStep} />}
        {step === 4 && <LoveReasonsPage onNext={nextStep} />}
        {step === 5 && <DiagnosisPage onNext={nextStep} />}
        {step === 6 && <PrescriptionPage onNext={nextStep} />}
        {step === 7 && <FinalLetterPage />}
      </PageTransition>
    </TerminalPanel>
  )
}

export default App
