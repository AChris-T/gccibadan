// AttendanceRedirect.jsx
import { useParams, Navigate } from 'react-router-dom';

const AttendanceRedirect = () => {
  const { type } = useParams();
  const allowedTypes = ['online', 'physical'];

  if (!allowedTypes.includes(type)) {
    // Invalid path: show error
    return (
      <div className="flex flex-col gap-6 items-center justify-center w-full h-[100vh]">
        <h1 className="text-2xl font-bold">
          Error 404: Invalid Attendance Route
        </h1>
        <button
          className="px-6 py-4 text-lg text-white bg-purple-600 border rounded-lg"
          onClick={() => (window.location.href = '/')}
        >
          Back to Home
        </button>
      </div>
    );
  }

  // Valid: redirect to homepage
  return <Navigate to="/" />;
};

export default AttendanceRedirect;
