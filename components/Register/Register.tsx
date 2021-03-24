import * as typeFormEmbed from '@typeform/embed';
import styles from './Register.module.css';
import { useRef , useEffect } from 'react';
import React from 'react';
    export default function Register(){
        const typeFormRef = useRef(null);
    useEffect(() => {
        if(typeFormRef.current){
            typeFormEmbed.makeWidget(typeFormRef.current, 'https://alexasrm.typeform.com/to/e6v6WqRn', {
      hideFooter: false,
      hideHeaders: false,
      opacity: 100,
    });
        }
    }, []);
    return <div id="submit">
        <h1
          className={[
            styles.titleHeading,
            "text-5xl text-black w-full text-center py-16",
          ].join(" ")}
        >
          Submit Task for Sensei
        </h1> 
        <div ref={typeFormRef} style={{ height: '100vh', width: '100%' }}></div>
    </div>
    }