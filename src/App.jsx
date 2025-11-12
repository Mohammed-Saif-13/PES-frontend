// src/App.jsx

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { ROUTES } from '@/constants/routes';

// Dynamically import all page components using the correct paths
const Home = lazy(() => import('@/pages/Home.jsx'));

// FIX 1: AboutUs import ko robust banaya hai. Agar tumhari AboutUs.jsx file mein
// 'export default AboutUs' nahi hai, toh yeh code use karega named export ko 'default' bana kar.
const AboutUs = lazy(() => import('@/pages/AboutUs.jsx').then(module => module.AboutUs ? { default: module.AboutUs } : module));

// FIX 2: PharmaPulse.jsx ke liye yeh assume kiya hai ki tumne file bana di hogi.
const PharmaPulse = lazy(() => import('@/pages/PharmaNews.jsx'));

const PharmaAcademy = lazy(() => import('@/pages/PharmaAcademy.jsx'));
const ProfessionalNetwork = lazy(() => import('@/pages/ProfessionalNetwork.jsx'));
const SkillBoard = lazy(() => import('@/pages/SkillBoard.jsx'));
const ContactUs = lazy(() => import('@/pages/ContactUs.jsx'));
const Login = lazy(() => import('@/pages/Login.jsx').catch(() => ({
  default: () => <div className="p-10 text-center text-2xl">Login Page Placeholder</div>
})));


// Mapping logic to find the component based on the ROUTES array's 'element' string
const ComponentMap = {
  'Home.jsx': Home,
  'AboutUs.jsx': AboutUs,
  'PharmaPulse.jsx': PharmaPulse,
  'PharmaAcademy.jsx': PharmaAcademy,
  'ProfessionalNetwork.jsx': ProfessionalNetwork,
  'SkillBoard.jsx': SkillBoard,
  'ContactUs.jsx': ContactUs,
  'Login.jsx': Login,
};


function App() {
  return (
    <Router>
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