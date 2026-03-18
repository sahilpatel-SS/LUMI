import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <p className="text-8xl font-black text-gray-100">404</p>
      <h1 className="text-2xl font-bold text-gray-900 mt-2">Page Not Found</h1>
      <p className="text-gray-500 mt-1 mb-6">
        This passport doesn't exist or is not public.
      </p>
      <button
        onClick={() => {
          void navigate('/');
        }}
        className="px-5 py-2 bg-lumi-navy text-white rounded-lg text-sm font-medium hover:bg-lumi-navy-light transition-colors"
      >
        Go Home
      </button>
    </div>
  );
}
