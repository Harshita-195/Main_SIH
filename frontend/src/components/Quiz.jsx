import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Quiz(){
  const [quiz, setQuiz] = useState(null)
  const [answers, setAnswers] = useState({})

  useEffect(()=> {
    axios.get('http://localhost:5000/api/quiz').then(r=>setQuiz(r.data)).catch(()=>{})
  },[])

  if (!quiz) return (
    <section className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold">Quiz</h2>
      <p className="text-sm text-slate-500">Loading quiz (ensure backend is running at http://localhost:5000)</p>
    </section>
  )

  const handleChange = (qId, val) => {
    setAnswers(prev => ({...prev, [qId]: val}))
  }

  const submit = async () => {
    const payload = {answers: Object.values(answers)}
    try{
      const res = await axios.post('http://localhost:5000/api/quiz/submit', payload)
      alert('Recommended streams (in order): ' + res.data.recommended.join(', '))
    }catch(e){
      alert('Make sure backend is running on http://localhost:5000')
    }
  }

  return (
    <section className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Aptitude & Interest Quiz</h2>
      {quiz.questions.map(q => (
        <div className="mb-3" key={q.id}>
          <div className="font-medium">{q.text}</div>
          <div className="mt-1 space-y-1">
            {q.options.map(o=>(
              <label key={o.id} className="block">
                <input type="radio" name={'q'+q.id} onChange={()=>handleChange(q.id, o.value)} /> {' '}
                {o.text}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={submit} className="mt-2 px-4 py-2 bg-sky-600 text-white rounded">Submit</button>
    </section>
  )
}
