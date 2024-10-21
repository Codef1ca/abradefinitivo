import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export default function App() {
  const defaultContent =
  <div className="container-gerencia">
  <div className="miembro-equipo">
    <h2 className="titulo-miembro">Ing. Cristian Pedrana</h2>
    <p className="p-miembro">Gerente general</p>
  </div>
  <div className="miembro-equipo">
    <h2 className="titulo-miembro">Ing. Alberto Arias</h2>
    <p className="p-miembro">Gerente de Producción de Hortalizas</p>
  </div>
  <div className="miembro-equipo">
    <h2 className="titulo-miembro">Ing. Ricardo Burgos</h2>
    <p className="p-miembro">Gerente de Producción de Choclos y Extensivos</p>
  </div>
  <div className="miembro-equipo">
    <h2 className="titulo-miembro">Lic. Juan Ureta</h2>
    <p className="p-miembro">Gerente de Comercialización</p>
  </div>
  <div className="miembro-equipo">
    <h2 className="titulo-miembro">Lic. Tamara Mercuri</h2>
    <p className="p-miembro">Gerente Financiera</p>
  </div>
  <div className="miembro-equipo">
    <h2 className="titulo-miembro">Lic. Guillermo Alicata</h2>
    <p className="p-miembro">Gerente de RRHH</p>
  </div>
  <div className="miembro-equipo">
    <h2 className="titulo-miembro">Cpn. Martín Mussa</h2>
    <p className="p-miembro">Gerente de Administración</p>
  </div>
  <div className="miembro-equipo">
    <h2 className="titulo-miembro">Ing. Gustavo Mercado</h2>
    <p className="p-miembro">Gerente de Mantenimiento</p>
  </div>
  <div className="miembro-equipo">
    <h2 className="titulo-miembro">Ing. Sebastián Nieva</h2>
    <p className="p-miembro">Gerente de Compras</p>
  </div>
</div>

return (
  <Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='center' className='titulo-gerencia'>
          Gerencia
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     {defaultContent}
    </AccordionPanel>
  </AccordionItem>

</Accordion>
);
}


