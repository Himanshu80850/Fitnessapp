import React, { useState } from 'react';

// कसरत और टेक्स्ट का डेटा (Hindi & English)
const workoutData = {
  en: {
    title: "My Fitness App",
    yoga: "Morning Yoga",
    cardio: "Fast Cardio",
    start: "Start Now",
    changeLang: "हिंदी में बदलें"
  },
  hi: {
    title: "मेरा फिटनेस ऐप",
    yoga: "सुबह का योग",
    cardio: "तेज़ कार्डियो",
    start: "अभी शुरू करें",
    changeLang: "Change to English"
  }
};

function App() {
  const [lang, setLang] = useState('en'); // शुरुआती भाषा English है

  const t = workoutData[lang];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1>{t.title}</h1>
        <button onClick={() => setLang(lang === 'en' ? 'hi' : 'en')} style={styles.langBtn}>
          {t.changeLang}
        </button>
      </header>

      {/* Workout Card 1 */}
      <div style={styles.card}>
        <h3>{t.yoga}</h3>
        <p>15 Mins • Beginner</p>
        <button style={styles.playBtn}>{t.start}</button>
      </div>

      {/* Workout Card 2 */}
      <div style={styles.card}>
        <h3>{t.cardio}</h3>
        <p>10 Mins • Intense</p>
        <button style={styles.playBtn}>{t.start}</button>
      </div>
    </div>
  );
}

// iPhone जैसा दिखने वाला डिज़ाइन (CSS)
const styles = {
  container: { 
    padding: '20px', 
    backgroundColor: '#000', 
    color: '#fff', 
    minHeight: '100vh', 
    fontFamily: 'sans-serif' 
  },
  header: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: '30px'
  },
  langBtn: { 
    padding: '8px 12px', 
    borderRadius: '8px', 
    border: '1px solid #007AFF', 
    backgroundColor: 'transparent', 
    color: '#007AFF',
    cursor: 'pointer'
  },
  card: { 
    backgroundColor: '#1C1C1E', 
    padding: '20px', 
    borderRadius: '16px', 
    marginBottom: '15px' 
  },
  playBtn: { 
    backgroundColor: '#007AFF', 
    color: 'white', 
    border: 'none', 
    padding: '12px', 
    borderRadius: '10px', 
    width: '100%', 
    fontWeight: 'bold',
    marginTop: '10px'
  }
};

export default App;
