import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { HomePage, HistoryPage, ShoppingPage, FoodPage, RidesPage, TravelsPage, HotelsPage } from './components/sections'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/rides" element={<RidesPage />} />
        <Route path="/travels" element={<TravelsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
