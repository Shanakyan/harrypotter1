import s from './Header.module.css'
import { Select } from '../Select/Select' 
import { Container } from '../Container/Container'
import { useState } from 'react';
import { Card } from '../Card';

export const Header = () => {
    const [schoolName, setSchoolName] =useState("Choose school");
    return(
       
        <Container>
            <header>
                <h1 className={s.header}>Harry Potter</h1>
                <p className={s.headerContext}>View all characters from the Harry Potter universe</p>
                <div className={s.headerInputWrapper}>
                    <div className={s.inputWrap}>         
                        <p>Name</p>
                        <input type="text" name="" value="Hermione" />
                </div> 
                                
                    <Select
                        value={schoolName}
                    />
                   
                 
                </div>           
            </header>
            {/* <Card/> */}
        </Container>
  

   )
}