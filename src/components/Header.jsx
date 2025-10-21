
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className="bg-white/85 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading tracking-widest">RIDA THERAPY</Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive})=>isActive? 'font-semibold':'hover:underline'}>Home</NavLink>
          <div className="relative group">
            <button className="hover:underline">Therapies ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow p-3 rounded mt-2">
              <Link to="/individual-counselling" className="block py-1">Individual Counselling</Link>
              <Link to="/relationship-therapy" className="block py-1">Relationship Therapy</Link>
              <Link to="/islamic-informed-counselling" className="block py-1">Islamic-informed Counselling</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:underline">Advice Hub ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow p-3 rounded mt-2 w-56">
              <Link to="/advice" className="block py-1">Emotional Wellbeing</Link>
              <Link to="/advice" className="block py-1">Relationships & Communication</Link>
              <Link to="/advice" className="block py-1">Faith & Mental Health</Link>
              <Link to="/advice" className="block py-1">Self-Reflection & Growth</Link>
            </div>
          </div>
          <NavLink to="/about" className={({isActive})=>isActive? 'font-semibold':'hover:underline'}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'font-semibold':'hover:underline'}>Contact</NavLink>
        </nav>
        <div className="md:hidden">
          <button onClick={()=>setMobileOpen(!mobileOpen)} className="p-2 bg-calmteal text-white rounded">Menu</button>
          {mobileOpen && (
            <div className="absolute right-4 top-16 bg-white shadow p-4 rounded w-64">
              <Link to="/" className="block py-2">Home</Link>
              <div className="border-t my-2"></div>
              <div><strong>Therapies</strong>
                <div className="mt-2"><Link to="/individual-counselling" className="block py-1">Individual</Link><Link to="/relationship-therapy" className="block py-1">Relationship</Link><Link to="/islamic-informed-counselling" className="block py-1">Islamic</Link></div>
              </div>
              <div className="border-t my-2"></div>
              <div><strong>Advice Hub</strong>
                <div className="mt-2"><Link to="/advice" className="block py-1">Emotional wellbeing</Link><Link to="/advice" className="block py-1">Relationships</Link></div>
              </div>
              <div className="border-t my-2"></div>
              <Link to="/about" className="block py-2">About</Link>
              <Link to="/contact" className="block py-2">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
