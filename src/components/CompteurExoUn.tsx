import React, { useCallback, useState } from "react"

export default function CompteurExoUn(){
    const [cpt, setCpt] = useState(0)

    const handleIncrement = useCallback(() => {
        setCpt(cpt + 1)
    }, [cpt])

    const handleDecrement = useCallback(() => {
        setCpt(cpt - 1)
    }, [cpt])

    return (
        <div className="compteur">
            <div className="compteur-value">
                {cpt}
            </div>
            <div className="compteur-actions">
                <button 
                    className="compteur-actions-increment"
                    onClick={handleDecrement}
                >-</button>
                <button 
                    className="compteur-actions-increment"
                    onClick={handleIncrement}
                >+</button>
            </div>
        </div>
    )
}
