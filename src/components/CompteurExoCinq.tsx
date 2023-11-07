import React, { useCallback, useMemo, useState } from "react"

export default function CompteurExoCinq(props: { 
    value: number, 
    onDecrement: () => void, 
    onIncrement: () => void 
}){

    return (
        <div className="compteur">
            <div className="compteur-value">
                {props.value}
            </div>
            <div className="compteur-actions">
                <button 
                    className="compteur-actions-increment"
                    onClick={props.onDecrement}
                >-</button>
                <button 
                    className="compteur-actions-increment"
                    onClick={props.onIncrement}
                >+</button>
            </div>
        </div>
    )
}
