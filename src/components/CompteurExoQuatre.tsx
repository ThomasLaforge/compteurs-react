import React, { useCallback, useMemo, useState } from "react"

export default function CompteurExoQuatre(props: { value: number }){
    const [cpt, setCpt] = useState(0)

    const counterValue = useMemo(() => {
        return props.value + cpt
    }, [props.value, cpt])

    const handleIncrement = useCallback(() => {
        setCpt(cpt + 1)
    }, [cpt])

    const handleDecrement = useCallback(() => {
        setCpt(cpt - 1)
    }, [cpt])

    return (
        <div className="compteur">
            <div className="compteur-value">
                {counterValue}
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
