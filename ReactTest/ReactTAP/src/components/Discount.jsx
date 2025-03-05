import { useState } from "react"

export default function Discount() {
    const [count, setCount] = useState('100')

    function applyDiscount() {
        setCount('75')
    }

    return (
        <div>
            <p data-testid="price">{count}€</p>
            <button onClick={applyDiscount}>Apply Discount</button>
        </div>
    )
}