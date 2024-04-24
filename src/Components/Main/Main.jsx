import { Card } from '../Card'
import { Container } from '../Container/Container'
import s from './Main.module.css'
import { data } from '../../data '


export const Main = () => {
    return(
    <div className={s.main}>
        <hr className={s.hr}/>
        <Container>
            <div className={s.cardWrapper}>
            {data.map(el=>(<Card src={el.image} actor={el.name} gender={el.gender} house={el.house} wand={el.wand.core} alive={(el.alive)?"yes":"no"} />))}
           

            </div>
        
        </Container>
        
    </div>
    ) 
}