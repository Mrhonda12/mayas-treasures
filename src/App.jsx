import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AnnouncementBanner from './components/AnnouncementBanner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import InventoryPage from './pages/InventoryPage'

function App() {
  return (
    <BrowserRouter>
      <AnnouncementBanner />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
