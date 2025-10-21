
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Individual from './pages/services/Individual'
import Relationship from './pages/services/Relationship'
import Islamic from './pages/services/Islamic'
import AdviceHub from './pages/advice/AdviceHub'
import AdviceArticle from './pages/advice/AdviceArticle'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-warmneutral text-deeptext">
      <Header />
      <main className="flex-grow"><Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/individual-counselling" element={<Individual/>} />
        <Route path="/relationship-therapy" element={<Relationship/>} />
        <Route path="/islamic-informed-counselling" element={<Islamic/>} />
        <Route path="/advice" element={<AdviceHub/>} />
        <Route path="/advice/:slug" element={<AdviceArticle/>} />
      </Routes></main>
      <Footer />
    </div>
  )
}
