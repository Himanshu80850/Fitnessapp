import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Styles ---
const styles = {
  container: { backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Inter, sans-serif' },
  progress: { height: '4px', backgroundColor: '#333', borderRadius: '2px', marginBottom: '40px' },
  activeProgress: { height: '100%', backgroundColor: '#fa114f', transition: 'width 0.3s ease' },
  title: { fontSize: '32px', fontWeight: '800', marginBottom: '10px' },
  subtitle: { color: '#8e8e93', fontSize: '16px', marginBottom: '30px' },
  optionCard: {
    backgroundColor: '#1C1C1E', padding: '20px', borderRadius: '16px', marginBottom: '15px',
    border: '1px solid #333', display: 'flex', justifyContent: 'space-between', cursor: 'pointer'
  },
  selectedCard: { borderColor: '#fa114f', backgroundColor: '#2c1219' },
  nextBtn: {
    backgroundColor: '#fa114f', color: '#fff', width: '100%', padding: '18px',
    borderRadius: '16px', border: 'none', fontWeight: 'bold', fontSize: '18px', marginTop: '20px'
  }
};

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ goal: '', focus: '', level: '' });

  const steps = [
    { id: 1, title: "आपका लक्ष्य क्या है?", sub: "हम इसे आपके हिसाब से ढालेंगे", field: 'goal', options: ['वजन घटाना', 'मांसपेशियां बनाना', 'फिट रहना'] },
    { id: 2, title: "किस हिस्से पर ध्यान दें?", sub: "विज़ुअलाइज़ेशन (Arms, Legs, Abs)", field: 'focus', options: ['पूरी बॉडी', 'सिर्फ आर्म्स', 'एब्स और कोर'] },
    { id: 3, title: "आपका लेवल क्या है?", sub: "शुरुआत या प्रो?", field: 'level', options: ['Beginner', 'Intermediate', 'Advanced'] }
  ];

  const currentStep = steps[step - 1];

  const next = () => step < 3 ? setStep(step + 1) : alert("तैयार! अब आपका प्लान बन रहा है...");

  return (
    <div style={styles.container}>
      {/* Progress Bar */}
      <div style={styles.progress}>
        <div style={{ ...styles.activeProgress, width: `${(step / 3) * 100}%` }}></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <h1 style={styles.title}>{currentStep.title}</h1>
          <p style={styles.subtitle}>{currentStep.sub}</p>

          {currentStep.options.map(opt => (
            <div 
              key={opt}
              onClick={() => setFormData({ ...formData, [currentStep.field]: opt })}
              style={{ ...styles.optionCard, ...(formData[currentStep.field] === opt ? styles.selectedCard : {}) }}
            >
              <span>{opt}</span>
              {formData[currentStep.field] === opt && <span style={{color: '#fa114f'}}>✓</span>}
            </div>
          ))}

          <button style={styles.nextBtn} onClick={next}>
            {step === 3 ? "फिनिश" : "अगला"}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;