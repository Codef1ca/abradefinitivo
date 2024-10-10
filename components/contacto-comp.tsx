import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input, Textarea } from '@chakra-ui/react';
import { Button } from "@nextui-org/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvgopnkg");
  if (state.succeeded) {
    return <p className='contacto-ppp'>¡Estaremos en contacto!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='container-input'>
    
        <Input
          id="email"
          type="email"
          name="email"
          placeholder='Email'
          size='md'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        
    
        <Input
          id="name"
          type="text"
          name="name"
          placeholder='Nombre y apellido'
          size='md'
        />
        
      
        <Input
          id="subject"
          type="text"
          name="subject"
          placeholder='Asunto'
          size='md'
        />
        
  
        <Textarea
          id="message"
          name="message"
          placeholder='Tu mensaje...'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <Button type="submit" radius="full" className="boton-n" disabled={state.submitting}>
        ENVIAR
      </Button>
    </form>
  );
}

export default ContactForm;


