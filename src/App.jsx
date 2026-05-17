import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Compare from './pages/Compare'
import Solution from './pages/Solution'
import ModuleDetail from './pages/ModuleDetail'
import Background from './pages/Background'
import Innovation from './pages/Innovation'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/solution/:moduleId" element={<ModuleDetail />} />
          <Route path="/background" element={<Background />} />
          <Route path="/innovation" element={<Innovation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
