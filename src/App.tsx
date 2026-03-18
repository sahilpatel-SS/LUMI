import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PassportPage } from './pages/PassportPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route: redirect to demo passport */}
        <Route
          path="/"
          element={
            <Navigate
              to="/passport/1740066201551x580292182525120400?Quest=1761867299707x217482195989430270"
              replace
            />
          }
        />
        <Route path="/passport/:passportId" element={<PassportPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
