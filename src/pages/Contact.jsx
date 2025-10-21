
import React from 'react'
export default function Contact(){
  const subject = encodeURIComponent('Therapy enquiry')
  const body = encodeURIComponent('Hello Jabran,%0D%0A%0D%0AI would like to enquire about therapy. Please tell me about availability and next steps.%0D%0A%0D%0AThank you.')
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Contact</h1>
      <p className="mb-6">Click below to open your email client and send an enquiry.</p>
      <a href={`mailto:jbrtherapy@gmail.com?subject=${subject}&body=${body}`} className="inline-block bg-deeptext text-white px-6 py-3 rounded-full">Email Jabran</a>
      <div className="mt-6">
        <p>Phone: 07823 663208</p>
        <p>In-person sessions from Manchester, England. Online sessions available for other areas.</p>
      </div>
    </section>
