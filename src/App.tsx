import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Navigation from './components/Navigation/Navigation';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Suspense fallback={<LoadingSpinner />}>
          <main className="main-content">
            <AppRoutes />
          </main>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;