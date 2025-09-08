import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function CollegeFinder(){
  const [colleges, setColleges] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:5000/api/colleges').then(r=>setColleges(r.data)).catch(()=>{})
  },[])

  return (
    <section className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Nearby Government Colleges</h2>
      {colleges.length === 0 ? <p className="text-sm text-slate-500">No data. Ensure backend is running.</p> : (
        <ul className="space-y-3">
          {colleges.map(c=>(
            <li key={c.id} className="p-3 border rounded">
              <div className="font-semibold">{c.name} — <span className="text-sm font-medium text-slate-600">{c.city}</span></div>
              <div className="text-sm text-slate-700">Programs: {c.programs.join(', ')}</div>
              <div className="text-sm text-slate-500">Facilities: {c.facilities.join(', ')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
