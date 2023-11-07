import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CompteurExoUn from './components/CompteurExoUn'
import CompteurExoTrois from './components/CompteurExoTrois'
import CompteurExoQuatre from './components/CompteurExoQuatre'
import CompteurExoCinq from './components/CompteurExoCinq'

function App() {
  const [count, setCount] = useState(0)
  const [countExoCinqHaut, setCountExoCinqHaut] = useState(0)
  const [countExoCinqBas, setCountExoCinqBas] = useState(0)

  const handleIncrementCompteur = useCallback(
    () => { setCount(count + 1) },
    [count]
  );

  const handleIncrementCompteurCinq = useCallback(
    () => { 
      setCountExoCinqHaut(countExoCinqHaut + 1) 
      setCountExoCinqBas(countExoCinqBas + 1) 
    },
    [countExoCinqHaut, countExoCinqBas]
  );

  const handleDecrementCompteurCinqHaut = useCallback(
    () => { setCountExoCinqHaut(countExoCinqHaut - 1) },
    [countExoCinqHaut]
  );

  const handleDecrementCompteurCinqBas = useCallback(
    () => { setCountExoCinqBas(countExoCinqBas - 1) },
    [countExoCinqBas]
  );

  const handleIncrementCompteurCinqHaut = useCallback(
    () => { setCountExoCinqHaut(countExoCinqHaut + 1) },
    [countExoCinqHaut]
  );

  const handleIncrementCompteurCinqBas = useCallback(
    () => { setCountExoCinqBas(countExoCinqBas + 1) },
    [countExoCinqBas]
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

      {/* exo 4 */}
      <h1>Exo 5</h1>
      <div className="exo4">
        <CompteurExoCinq 
          value={countExoCinqHaut}
          onIncrement={handleIncrementCompteurCinqHaut} 
          onDecrement={handleDecrementCompteurCinqHaut}
        />
        <CompteurExoCinq
          value={countExoCinqBas} 
          onIncrement={handleIncrementCompteurCinqBas} 
          onDecrement={handleDecrementCompteurCinqBas}
        />
        <button onClick={handleIncrementCompteurCinq}>+</button>

        <p>sum : {countExoCinqBas + countExoCinqHaut}</p>
      </div>
    </>
  )
}

export default App
