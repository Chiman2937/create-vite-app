import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes, useLocation } from 'react-router-dom';

import ErrorPage from '@/pages/error/ErrorPage';
import LoadingPage from '@/pages/loading/LoadingPage';
import NotFoundPage from '@/pages/not_found/NotFoundPage';
import RootPage from '@/pages/root/RootPage';

const App = () => {
  const location = useLocation();
  return (
    <ErrorBoundary FallbackComponent={ErrorPage} resetKeys={[location.pathname]}>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route element={<RootPage />} path='/' />
          <Route element={<NotFoundPage />} path='*' />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
