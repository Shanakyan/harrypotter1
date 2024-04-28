import s from './Header.module.css'
import { Select } from '../Select/Select' 
import { Container } from '../Container/Container'

import { data } from '../../data ';
import { Card } from '../Card';

export const Header = ({inputValue,schoolName,handleInput,handleSelect }) => {

    return(
       
        <Container>
            <header>
                <h1 className={s.header}>Harry Potter</h1>
                <p className={s.headerContext}>View all characters from the Harry Potter universe</p>
                <div className={s.headerInputWrapper}>
                    <div className={s.inputWrap}>         
                        <p>Name</p>
                    <input onChange={handleInput} type="text"  placeholder="Hermione"  />
                </div> 
                                
                    <Select
                    schoolName={schoolName}
                    handleSelect={handleSelect}
                    />
                   
                 
                </div>           
            </header>
            
        </Container>
  

   )
}