import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioGrid from './components/PortfolioGrid';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const studentsRef = ref(db, 'students');
    const unsubscribe = onValue(studentsRef, (snapshot) => {
      const data = snapshot.val();
      const studentsList = data ? Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      })) : [];
      setStudents(studentsList);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching students: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const HomePage = () => (
    <>
      <Navbar />
      <Hero />
      <About />
      {loading ? (
        <div style={{ padding: '4rem', textAlign: 'center' }}>Loading portfolios...</div>
      ) : (
        <PortfolioGrid students={students} />
      )}
      <Footer />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel students={students} />} />
      </Routes>
    </Router>
  );
}

export default App;
