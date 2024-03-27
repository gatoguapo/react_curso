import "../css/BotonPersonalizado.css"

export function BotonPersonalizado({text, xmlns, viewBox, d, width}) {
    return (
        <button className="persBtn">
            <svg xmlns={xmlns} viewBox={viewBox} width={width} className="persBtn-svg">
                <path d={d}/>
            </svg>
            {text}
        </button>
    )
}