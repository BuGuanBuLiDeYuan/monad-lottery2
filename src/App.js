import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// 使用 React.lazy 懒加载页面组件
const Home = React.lazy(() => import('./pages/Home'));
const Product = React.lazy(() => import('./pages/Product'));
const Rewards = React.lazy(() => import('./pages/Rewards'));
const Roadmap = React.lazy(() => import('./pages/Roadmap'));
const About = React.lazy(() => import('./pages/About'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="product" element={<Product />} />
                  <Route path="rewards" element={<Rewards />} />
                  <Route path="roadmap" element={<Roadmap />} />
                  <Route path="about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </AnimatePresence>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;