import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import the pages
import NotFoundPage from './pages/notFound';
import Dashboard from './pages/app/dashboard'
import TranslateDocs from './pages/app/translatedocs';
import ExplainDocs from './pages/app/explaindocs';
import GenerateDocs from './pages/app/generatedocs';
import Settings from './pages/app/settings';
import Signout from './pages/app/signout';

// auth pages
import SignIn from './pages/auth/signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SignIn />} />
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/explaindoc" element={<ExplainDocs />} />
          <Route path="/app/translatedoc" element={<TranslateDocs />} />
          <Route path="/app/generatedoc" element={<GenerateDocs />} />
          <Route path="/app/settings" element={<Settings />} />
          <Route path="/app/signout" element={<Signout />} />

          {/* auth pages */}
          <Route path="/auth/signin" element={<SignIn />} />

          {/* not found page */}
          <Route path='*' element={< NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
