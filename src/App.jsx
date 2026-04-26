import React, { useState } from 'react';

const workoutData = {
  en: {
    greeting: "Hi, Himanshu!",
    rings: "Activity Rings",
    title: "Daily Workouts",
    yoga: "Morning Yoga",
    cardio: "Intense Cardio",
    start: "Start Now",
    changeLang: "हिंदी"
  },
  hi: {
    greeting: "नमस्ते, हिमांशु!",
    rings: "एक्टिविटी रिंग्स",
    title: "आज की कसरत",
    yoga: "सुबह का योग",
    cardio: "तेज़ कार्डियो",
    start: "अभी शुरू करें",
    changeLang: "English"
  }
};

function App() {
  const [lang, setLang] = useState('hi');
  const t = workoutData[lang];

  return (
    <div style={styles.container}>
      {/* Top Header */}
      <div style={styles.header}>
        <h2 style={styles.greeting}>{t.greeting}</h2>
        <button onClick={() => setLang(lang === 'en' ? 'hi' : 'en')} style={styles.langBtn}>
          {t.changeLang}
        </button>
      </div>

      {/* Progress Ring Card */}
      <div style={styles.ringsCard}>
        <div style={styles.ringText}>
          <p style={{margin: 0, opacity: 0.8}}>{t.rings}</p>
          <h1 style={{margin: '5px 0'}}>85%</h1>
        </div>
        <div style={styles.ringCircle}></div>
      </div>

      <h3 style={{margin: '20px 0 10px'}}>{t.title}</h3>

      {/* Workout Card 1 */}
      <div style={styles.card}>
        <div style={{flex: 1}}>
          <h4 style={{margin: '0 0 5px'}}>{t.yoga}</h4>
          <p style={{fontSize: '14px', color: '#8e8e93'}}>15 Mins • Beginner</p>
        </div>
        <button style={styles.playBtn}>{t.start}</button>
      </div>

      {/* Workout Card 2 */}
      <div style={styles.card}>
        <div style={{flex: 1}}>
          <h4 style={{margin: '0 0 5px'}}>{t.cardio}</h4>
          <p style={{fontSize: '14px', color: '#8e8e93'}}>20 Mins • Pro</p>
        </div>
        <button style={styles.playBtn}>{t.start}</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  greeting: { fontSize: '24px', fontWeight: 'bold' },
  langBtn: {
    backgroundColor: '#333',
    color: '#007AFF',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '20px',
    fontWeight: 'bold'
  },
  ringsCard: {
    backgroundColor: '#1C1C1E',
    padding: '20px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeft: '4px solid #fa114f'
  },
  ringCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '5px solid #fa114f',
    borderTopColor: '#333'
  },
  card: {
    backgroundColor: '#1C1C1E',
    padding: '15px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },
  playBtn: {
    backgroundColor: '#007AFF',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '12px',
    fontWeight: 'bold'
  }
};

export default App;
