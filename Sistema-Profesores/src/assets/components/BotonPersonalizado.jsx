import "../css/BotonPersonalizado.css"

export function BotonPersonalizado({text, xmlns, viewBox, d, width, className}) {
    return (
        <button className={className}>
            <svg xmlns={xmlns} viewBox={viewBox} width={width} className="persBtn-svg">
                <path d={d}/>
            </svg>
            {text}
        </button>
    )
}