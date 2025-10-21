import React from 'react'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12" aria-labelledby="about-heading">
      <h1 id="about-heading" className="font-heading text-3xl mb-4">About Rida Therapy</h1>

      <p className="mb-4">
        Rida Therapy was founded by <strong>Jabran Rafiq</strong>, a counsellor committed to helping
        individuals and couples find balance, healing, and renewed connection. Jabran combines
        evidence-informed therapeutic approaches with sensitivity to each client's cultural and
        spiritual background to provide tailored support.
      </p>

      <h2 className="font-heading text-xl mt-6 mb-2">Counselling philosophy</h2>
      <p>
        Our approach blends empathy, practical skills and spiritual respect. We aim to create a
        safe space where you can explore feelings, learn tools for regulation, and build meaning.
        Therapy is collaborative and paced to suit your needs — whether you are seeking short-term
        support or deeper, ongoing work.
      </p>

      <h2 className="font-heading text-xl mt-6 mb-2">Professional practice</h2>
      <p>
        Sessions are typically 50 minutes. We offer both in-person appointments in Manchester and
        online sessions for clients elsewhere. Confidentiality and professional boundaries are
        central to our practice. Fees, availability and any specific access needs can be discussed
        during an initial enquiry.
      </p>

      <p className="mt-6">
        If you’d like to learn more or book a session, please{' '}
        <a href="mailto:jbrtherapy@gmail.com?subject=Enquiry">email Jabran</a>.
      </p>
    </section>
  )
}
