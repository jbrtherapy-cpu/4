
import React from 'react'
import { useParams } from 'react-router-dom'

const CONTENT = {
  "emotional-wellbeing": {
    "title":"Emotional Wellbeing",
    "body":"Emotional wellbeing is about noticing patterns, building small routines, and finding reliable supports.\n\nStart with small stabilising practices: regular sleep, a short daily walk, and brief breathing pauses. Over weeks these habits reduce reactivity and increase psychological stamina.\n\nWhen difficulties arise, structured problem-solving, journaling, and reaching out to trusted people provide immediate relief. Professional therapy helps when patterns are persistent or when symptoms interfere with everyday life."
  },
  "relationships-and-communication": {
    "title":"Relationships & Communication",
    "body":"Relationships thrive on repair and curiosity.\n\nPractical steps include 'I' statements, scheduled check-ins, and learning reflective listening. When conflict becomes cyclical, couples therapy provides a guided space to learn new interaction patterns.\n\nWe focus on small, repeatable changes: daily moments of connection, clear practical agreements, and simple repair rituals after disagreements."
  },
  "faith-and-mental-health": {
    "title":"Faith & Mental Health",
    "body":"Faith can be a source of deep resilience. Integrating spiritual practices like prayer, dhikr, and community support with psychological tools often improves outcomes.\n\nWe respect individual beliefs and use faith-language where it supports coping and meaning-making. Therapy may involve coordinating care with spiritual mentors on request."
  },
  "self-reflection-and-growth": {
    "title":"Self-Reflection & Growth",
    "body":"Growth is often slow and cumulative. Regular reflective practice (journaling, brief daily reflection on what went well) builds learning and hope.\n\nWe emphasise small experiments: try a new behaviour for a week, notice what changes, and adjust. Over time this approach fosters sustainable change."
  }
}

export default function AdviceArticle(){
  const { slug } = useParams()
  const article = CONTENT[slug] || { title: 'Not found', body: 'This article is not available.' }
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-soft-lg">
      <h1 className="font-heading text-2xl mb-4">{article.title}</h1>
      <div className="prose max-w-none whitespace-pre-line">{article.body}</div>
      <div className="mt-6">
        <p>If you would like to explore this further, please <a href="mailto:jbrtherapy@gmail.com?subject=Advice enquiry">email Jabran</a> for more information.</p>
      </div>
    </article>
  )
}
