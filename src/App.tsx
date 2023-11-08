import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const progressBarWidth = useMemo(() => 750, []);

  const [step, setStep] = useState(0);

  const progress = useMemo(() => {
    const totalWidthDivided = progressBarWidth / 5;
    const currentProgress = totalWidthDivided * step;

    return currentProgress;
  }, [progressBarWidth, step]);

  return (
    <>
      <h1>Current step: {step}</h1>

      <div id="controls-wrapper">
        <button 
          type="button" 
          id="prev" 
          onClick={() => {
            if (step === 0) return;

            setStep(oldState => oldState - 1);
          }}
        >
          Previous
        </button>

        <button 
          type="button" 
          id="next" 
          onClick={() => {
            if (step === 5) return;

            setStep(oldState => oldState + 1);
          }}
        >
          Next
        </button>
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: progress }}></div>

        <div className="progress-dot one" style={{ background: step >= 0 ? 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)' : '#ccc' }}></div>

        <div className="progress-dot two" style={{ background: step >= 1 ? 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)' : '#ccc' }}></div>

        <div className="progress-dot three" style={{ background: step >= 2 ? 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)' : '#ccc' }}></div>
        
        <div className="progress-dot four" style={{ background: step >= 3 ? 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)' : '#ccc' }}></div>

        <div className="progress-dot five" style={{ background: step >= 4 ? 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)' : '#ccc' }}></div>

        <div className="progress-dot six" style={{ background: step >= 5 ? 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)' : '#ccc' }}></div>
      </div>
    </>
  );
}

export default App
