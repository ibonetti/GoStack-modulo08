import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);
  return (
    <ul>
      <li>React JS</li>
      <li>React Native</li>
      <li>Node.js</li>
    </ul>
  );
}

export default App;
