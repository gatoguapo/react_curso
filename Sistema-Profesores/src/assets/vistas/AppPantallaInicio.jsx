import '../css/AppPantallaInicio.css'

export function AppPantallaInicio() {
    return (
            <div className='wrap-layer'>
                <div>
                    <h1>Bienvenido</h1>
                </div>

                <div className="background-layer">
                    <svg viewBox="0 0 200 200" width='200%' height='100%' xmlns="http://www.w3.org/2000/svg">
                        <path fill="#b393d3" d="M39.8,-69.9C52.3,-61.6,64,-52.6,72.4,-40.9C80.8,-29.1,86.1,-14.5,84.7,-0.8C83.3,12.9,75.2,25.9,66.8,37.6C58.3,49.3,49.5,59.9,38.3,69.2C27.1,78.6,13.5,86.8,-0.3,87.3C-14.2,87.9,-28.4,80.8,-40.4,71.9C-52.4,63,-62.2,52.3,-67.8,40C-73.5,27.7,-75.1,13.8,-77,-1.1C-79,-16.1,-81.3,-32.2,-76.3,-45.6C-71.3,-59.1,-58.9,-69.9,-45,-77.4C-31,-85,-15.5,-89.3,-1,-87.6C13.6,-85.9,27.2,-78.2,39.8,-69.9Z" transform="translate(100 100)" />
                    </svg>      
                </div>
            </div> 
    )
}