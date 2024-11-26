export function Button({ text, onClick, className}) {
    className = 'btn ' + className
    return (
        <button className={className} onClick={() => onClick()}>{text}</button>
    )
}