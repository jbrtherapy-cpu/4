
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-heading text-lg">Rida Therapy</h4>
          <p className="text-sm mt-2">Compassionate therapy for individuals and couples.</p>
        </div>
        <div>
          <h5 className="font-semibold">Pages</h5>
          <ul className="text-sm mt-2 space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/advice">Advice Hub</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm mt-2">In-person sessions from Manchester, England.<br/>Online sessions available for all other areas.</p>
          <p className="text-sm mt-2">For further information:<br/>Jabran Rafiq<br/>Email: <a href="mailto:jbrtherapy@gmail.com">jbrtherapy@gmail.com</a><br/>Phone: 07823 663208</p>
        </div>
      </div>
      <div className="bg-warmneutral text-sm py-4 text-center">© 2025 Rida Therapy</div>
    </footer>
  )
}
