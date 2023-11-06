import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CompteurExoUn from './components/CompteurExoUn'
import CompteurExoTrois from './components/CompteurExoTrois'
import CompteurExoQuatre from './components/CompteurExoQuatre'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrementCompteur = useCallback(
    () => { setCount(count + 1) },
    [count]
  );

  return (
    <>
      {/* exo 1 */}
      <h1>Exo 1</h1>
      <div className="exo1">
        <CompteurExoUn />
      </div>

      {/* exo 2 */}
      <h1>Exo 2</h1>
      <div className="exo2">
        <CompteurExoUn />
        <CompteurExoUn />
      </div>

      {/* exo 3 */}
      <h1>Exo 3</h1>
      <div className="exo3">
        <CompteurExoTrois value={count} />
        <CompteurExoTrois value={count} />
        <button onClick={handleIncrementCompteur}>+</button>
      </div>

      {/* exo 4 */}
      <h1>Exo 4</h1>
      <div className="exo4">
        <CompteurExoQuatre value={count} />
        <CompteurExoQuatre value={count} />
        <button onClick={handleIncrementCompteur}>+</button>
      </div>
    </>
  )
}

export default App
