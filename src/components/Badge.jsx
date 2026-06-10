// src/components/Badge.jsx
// composant  Badge  qui affiche une pastille colorée avec un texte

import './Badge.css'

export default function Badge({ text, color }) {
  return (
    <div className="badge" style={{ color: color }}>
      {text}
    </div>
  )
}