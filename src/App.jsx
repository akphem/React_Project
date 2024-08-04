
import React from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import CarList from './components/CarList';
import Footer from './components/Footer';
import Card from './components/Card';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SearchSection />
        <CarList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
