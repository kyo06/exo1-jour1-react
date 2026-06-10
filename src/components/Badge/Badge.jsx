// src/components/Badge.jsx
// composant  Badge  qui affiche une pastille colorée avec un texte

import './Badge.module.css'

const obj = { name: 'React', color: '#61DAFB' };
const { hello:name, color } = obj; // destructuring assignment
const obj2 = { ...obj, version: '18.2.0', name: 'Toto' }; // spread operator

const tab = [1, 2, 3, 4, 5];
const [first, second, ...rest] = tab; // destructuring assignment
const tab1 = [...tab];


export default function Badge({ text, color }) {
    //this === FunctionComponent Badge    
    return (
    <div className="badge" style={{ color: color }}>
      {text}
    </div>
  )
}

/*
export default const Badge = ({ text, color }) => {
    //this === undefined
    return (
    <div className="badge" style={{ color: color }}>
      {text}
    </div>
  )
}
*/