import '../css/AppPantallaInicio.css'
import { BotonPersonalizado } from '../componentes/BotonPersonalizado'
import { IconoBackground, IconoPersona, IconoLibro, IconoLista } from '../componentes/Iconos'

export function AppPantallaInicio() {
    return (
            <div className='wrap-layer'>
                <h1>Bienvenido</h1>
                <div className="background-layer"><IconoBackground/></div>
                <div>
                    <h2 className="main-title">¿Qué quierés hacer?</h2>
                    <div className="main-layer">
                        <BotonPersonalizado
                            text="Agregar maestros"
                            className="persBtn-top"
                            icono={<IconoPersona/>}
                            >
                        </BotonPersonalizado> 
                        <BotonPersonalizado 
                            text="Agregar materias"
                            className="persBtn"
                            icono={<IconoLibro/>}
                            >
                        </BotonPersonalizado>
                        <BotonPersonalizado 
                            text="Consultar maestros"
                            className="persBtn"
                            icono= {<IconoLista/>}
                            >
                        </BotonPersonalizado>
                        <BotonPersonalizado 
                            text="Consultar materias"
                            className="persBtn-bottom"
                            icono= {<IconoLista/>}
                            >
                        </BotonPersonalizado>
                    </div>
                </div>
            </div> 
    )
} 