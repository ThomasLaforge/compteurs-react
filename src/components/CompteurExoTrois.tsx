import React, { useCallback, useState } from "react"

export default function CompteurExoTrois(props: { value: number }){
    return (
        <div className="compteur">
            <div className="compteur-value">
                {props.value}
            </div>
        </div>
    )
}
