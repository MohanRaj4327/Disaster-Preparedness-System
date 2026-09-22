import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CampusMap from './pages/CampusMap';
import GrievanceForm from './pages/GrievanceForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-game-bg">
        <header className="glass-panel sticky top-0 z-50 p-4 m-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-game-accent">Disaster Edu</h1>
          <nav className="flex gap-4 items-center">
            <Link to="/" className="hover:text-game-accent transition">Home</Link>
            <Link to="/about" className="hover:text-game-accent transition">About</Link>
            <Link to="/citizen" className="hover:text-game-accent transition">Citizen Portal</Link>
            <Link to="/authority" className="hover:text-game-accent transition">Authority Portal</Link>
            <Link to="/admin" className="hover:text-game-accent transition">Admin</Link>
            <Link to="/login" className="px-4 py-2 bg-game-accent rounded text-white font-semibold hover:bg-game-accent/80 transition">Login</Link>
          </nav>
        </header>

        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/citizen" element={<StudentDashboard />} />
            <Route path="/authority" element={<TeacherDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/campus" element={<CampusMap />} />
            <Route path="/complaints/new" element={<GrievanceForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="flex flex-col items-center justify-center h-[70vh]">
    <h2 className="text-5xl font-bold mb-4 text-center">National Disaster Awareness & Grievance Portal</h2>
    <p className="text-xl text-gray-300 text-center max-w-2xl">
      A government initiative for citizens to learn about disaster preparedness, participate in 3D simulations, and file grievances regarding potential man-made disasters.
    </p>
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
