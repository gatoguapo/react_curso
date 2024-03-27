import "../css/BotonPersonalizado.css"

export function BotonPersonalizado({text, className, xmlns, viewBox, d, svgWidth, svgColor}) {
    return (
        <button className={className}>
            <svg xmlns={xmlns} viewBox={viewBox} width={svgWidth} className="persBtn-svg" fill={svgColor}>
                <path d={d}/>
            </svg>
            {text}
        </button>
    )
}