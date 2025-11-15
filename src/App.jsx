// src/App.jsx

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import ScrollToTop from '@/components/common/ScrollToTop';
import SmoothScroll from '@/components/common/SmoothScroll'; // ← ADD THIS
import { ROUTES } from '@/constants/routes';

// Lazy imports (same as before)
const Home = lazy(() => import('@/pages/Home.jsx'));
const AboutUs = lazy(() => import('@/pages/AboutUs.jsx').then(module => module.AboutUs ? { default: module.AboutUs } : module));
const PharmaPulse = lazy(() => import('@/pages/PharmaNews.jsx'));
const PharmaAcademy = lazy(() => import('@/pages/PharmaAcademy.jsx'));
const ProfessionalNetwork = lazy(() => import('@/pages/ProfessionalNetwork.jsx'));
const SkillBoard = lazy(() => import('@/pages/SkillBoard.jsx'));
const ContactUs = lazy(() => import('@/pages/ContactUs.jsx'));
const Login = lazy(() => import('@/pages/Login.jsx'));
const Register = lazy(() => import('@/pages/Register.jsx'));

const ComponentMap = {
  'Home.jsx': Home,
  'AboutUs.jsx': AboutUs,
  'PharmaPulse.jsx': PharmaPulse,
  'PharmaAcademy.jsx': PharmaAcademy,
  'ProfessionalNetwork.jsx': ProfessionalNetwork,
  'SkillBoard.jsx': SkillBoard,
  'ContactUs.jsx': ContactUs,
  'Login.jsx': Login,
  'Register.jsx': Register,
};

function App() {
  return (
    <Router>
      <SmoothScroll /> {/* ← ADD THIS */}
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={
          <div className="flex justify-center items-center h-screen text-xl text-indigo-600">
            Loading Pharma Empower Content...
          </div>
        }>
          <Routes>
            {ROUTES.map((route) => {
              const Component = ComponentMap[route.element];

              if (!Component) {
                console.error(`Component not found for element: ${route.element}`);
                return null;
              }

              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;