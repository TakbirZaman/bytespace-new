import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Search from './pages/Search'
import CourseDetail from './pages/CourseDetail'
import Creator from './pages/Creator'
import { Login, Register } from './pages/Auth'
import NotFound from './pages/NotFound'

function Chrome() {
  const { pathname } = useLocation()
  const bare = pathname === '/login' || pathname === '/register'
  return (
    <>
      <Navbar minimal={bare} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/courses" element={<Navigate to="/search" replace />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!bare && <Footer />}
    </>
  )
}

export default function App() {
  const rawBase = import.meta.env.BASE_URL || '/'
  // './' (relative build) -> '/' for the router; '/repo/' -> '/repo'
  const basename = rawBase.startsWith('.') ? '/' : rawBase.replace(/\/$/, '') || '/'
  return (
    <BrowserRouter basename={basename}>
      <Chrome />
    </BrowserRouter>
  )
}
