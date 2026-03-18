import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PassportPage } from './pages/PassportPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route: redirect to passport */}
        <Route path="/" element={<Navigate to="/passport" replace />} />
        <Route path="/passport" element={<PassportPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
