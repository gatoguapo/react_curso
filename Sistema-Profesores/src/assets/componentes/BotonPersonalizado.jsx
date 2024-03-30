import "../css/BotonPersonalizado.css"

export function BotonPersonalizado({text, icono, className}) {
    return (
        <button className={className}>
            {icono}
            {text}
        </button>
    )
}