
import DoctorProfile from './DoctorProfile.tsx'


function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Animated background gradient mesh */}
      <div className="fixed inset-0 opacity-30 -z-10">
        <div
          className="absolute top-0 -left-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-0 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-40 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      {/* Grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay -z-10"></div>
      <DoctorProfile />
    </div>
  );
}

export default App
