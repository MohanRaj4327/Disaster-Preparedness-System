import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import GrievanceForm from './pages/GrievanceForm';
import GrievanceTracker from './pages/GrievanceTracker';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gov-bg">
        <header className="bg-gov-primary text-white sticky top-0 z-50 p-4 shadow-md flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-wide">National Disaster & Grievance Portal</h1>
          </div>
          <nav className="flex gap-4 items-center font-medium">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/about" className="hover:text-gray-300 transition">About</Link>
            <Link to="/citizen" className="hover:text-gray-300 transition">Citizen Portal</Link>
            <Link to="/authority" className="hover:text-gray-300 transition">Authority Portal</Link>
            <Link to="/admin" className="hover:text-gray-300 transition">Admin</Link>
            <Link to="/login" className="px-4 py-2 bg-gov-accent rounded text-white hover:bg-red-700 transition shadow">Login</Link>
          </nav>
        </header>

        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/citizen" element={<StudentDashboard />} />
            <Route path="/authority" element={<TeacherDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/complaints/new" element={<GrievanceForm />} />
            <Route path="/complaints/track" element={<GrievanceTracker />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
          <p>&copy; {new Date().getFullYear()} Government Disaster Management Authority. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="flex flex-col items-center justify-center h-[70vh] text-center">
    <div className="official-panel max-w-3xl">
      <h2 className="text-4xl font-extrabold mb-4 text-gov-primary border-b-2 border-gov-accent pb-2 inline-block">Official Grievance & Awareness Portal</h2>
      <p className="text-lg text-gray-700 mt-6 leading-relaxed">
        Welcome to the official portal for citizens to report man-made disasters, industrial hazards, and safety violations. 
        Track your filed grievances and access essential national disaster preparedness resources.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/complaints/new" className="px-6 py-3 bg-gov-accent text-white font-bold rounded shadow hover:bg-red-700 transition">File a Grievance</Link>
        <Link to="/complaints/track" className="px-6 py-3 bg-gov-primary text-white font-bold rounded shadow hover:bg-blue-900 transition">Track Status</Link>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="glass-panel p-8 max-w-3xl mx-auto mt-8">
    <h2 className="text-3xl font-bold mb-4">About</h2>
    <p>This system educates students about disasters and preparedness through interactive 3D simulations.</p>
  </div>
);

const Login = () => (
  <div className="glass-panel p-8 max-w-md mx-auto mt-16 flex flex-col gap-4">
    <h2 className="text-2xl font-bold text-center">Student Login</h2>
    <input type="text" placeholder="Student ID" className="p-2 rounded bg-game-secondary border border-gray-600 outline-none focus:border-game-accent" />
    <input type="password" placeholder="Password" className="p-2 rounded bg-game-secondary border border-gray-600 outline-none focus:border-game-accent" />
    <button className="bg-game-accent p-2 rounded font-bold hover:bg-game-accent/80 transition">Enter Command Center</button>
  </div>
);

export default App;
