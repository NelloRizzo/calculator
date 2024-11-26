import { useSelector } from 'react-redux'

export function Display() {
    const display = useSelector(s => s.display)
    return (
        <div className="display">{display}</div>
    )
}