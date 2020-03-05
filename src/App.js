import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState(['React JS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const ltech = localStorage.getItem('tech');
    if (ltech) {
      setTech(JSON.parse(ltech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button onClick={handleAdd} type="button">
        Adicionar
      </button>
    </>
  );
}

export default App;
