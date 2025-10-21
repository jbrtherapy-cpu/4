
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section>
      <div className="relative">
        <img src="/hero-seating.jpg" alt="Hero" className="w-full object-cover h-36 md:h-52" />
        <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
          <div className="bg-white/60 p-4 rounded">
            <h1 className="font-heading text-2xl md:text-4xl">Calm, Clarity and Healing — for Individuals and Couples</h1>
            <p className="mt-2 text-sm md:text-base">Supporting emotional well-being through empathy, balance, and faith.</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/individual-counselling" className="bg-white p-6 rounded-lg shadow-soft-lg hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="font-heading text-xl text-calmteal mb-2">Individual Counselling</h3>
            <p className="text-sm">Personal one-to-one sessions to help you process thoughts, feelings and life challenges in a confidential space.</p>
          </Link>
          <Link to="/relationship-therapy" className="bg-white p-6 rounded-lg shadow-soft-lg hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="font-heading text-xl text-calmteal mb-2">Relationship Therapy</h3>
            <p className="text-sm">Couples and family support focusing on communication, repair and rebuilding connection.</p>
          </Link>
          <Link to="/islamic-informed-counselling" className="bg-white p-6 rounded-lg shadow-soft-lg hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="font-heading text-xl text-calmteal mb-2">Islamic-informed Counselling</h3>
            <p className="text-sm">A faith-sensitive approach blending Islamic values with evidence-based therapy.</p>
          </Link>
        </div>
      </div>
      <div className="text-center my-12">
        <a href="mailto:jbrtherapy@gmail.com?subject=Therapy Enquiry" className="inline-block bg-deeptext text-white px-6 py-3 rounded-full">Contact for further information</a>
      </div>
    </section>
  )
}
