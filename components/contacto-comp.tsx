 import * as React from 'react';
 import { Input } from '@chakra-ui/react'
 import { Textarea } from '@chakra-ui/react'
 import {Button} from "@nextui-org/react";

 export default function Inputs() {
   return (
    <div>
     <div className='container-input'>
     <Input placeholder='Email' size='md'  />
     <Input placeholder='Nombre y apellido' size='md' />
     <Input placeholder='Asunto' size='md' />
     <Textarea placeholder='Tu mensaje...' />
     </div>
     <Button radius="full" className="boton-n">
     ENVIAR
     </Button>
     </div>
   );
}


