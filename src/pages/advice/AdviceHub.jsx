
import React from 'react'
import { Link } from 'react-router-dom'

const topics = [
  { slug: 'emotional-wellbeing', title: 'Emotional Wellbeing' },
  { slug: 'relationships-and-communication', title: 'Relationships & Communication' },
  { slug: 'faith-and-mental-health', title: 'Faith & Mental Health' },
  { slug: 'self-reflection-and-growth', title: 'Self-Reflection & Growth' }
]

export default function AdviceHub(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-6">Advice Hub</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {topics.map(t=> (
          <Link key={t.slug} to={'/advice/'+t.slug} className="bg-white p-6 rounded-lg shadow-soft-lg hover:shadow-lg transition">
            <h3 className="font-heading text-xl mb-2 text-calmteal">{t.title}</h3>
            <p className="text-sm">Practical articles and reflections to support emotional wellbeing.</p>
          </Link>
        ))}
      </div>
    </section>
