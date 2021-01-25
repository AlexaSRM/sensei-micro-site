import * as typeFormEmbed from '@typeform/embed';
import { useRef , useEffect } from 'react';
import React from 'react';
    export default function Register(){
        const typeFormRef = useRef(null);
    useEffect(() => {
        typeFormEmbed.makeWidget(typeFormRef.current, 'https://alexasrm.typeform.com/to/ghqTbU4T', {
      hideFooter: true,
      hideHeaders: true,
      opacity: 50,
    });
    }, [typeFormRef]);
    return <div ref={typeFormRef} style={{ height: '100vh', width: '100%' }}></div>
    }