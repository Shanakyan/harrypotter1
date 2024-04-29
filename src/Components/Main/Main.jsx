import { Card } from '../Card'
import { Container } from '../Container/Container'
import s from './Main.module.css'
// import { data } from '../../data '

export const Main = ({filtered}) => {   
   
    return (
    <div className={s.main}>
         <hr className={s.hr}/>
         <Container>
            <div className={s.cardWrapper}>
                {filtered.map(el=>(<Card src={el.image} 
                                    name={el.name} 
                                    actor={el.actor} 
                                    gender={el.gender} 
                                    house={el.house} 
                                    wand={el.wand.core} 
                                    alive={(el.alive)?"yes":"no"} />))}
          
           </div> 
        </Container>
        </div> 
        )

}

    //  return (
    //   (filtered.length0!=0)?
    // <div className={s.main}>
    //     <hr className={s.hr}/>
    //     <Container>
    //         <div className={s.cardWrapper}>
    //             {filtered.map(el=>(<Card src={el.image} 
    //                                 name={el.name} 
    //                                 actor={el.actor} 
    //                                 gender={el.gender} 
    //                                 house={el.house} 
    //                                 wand={el.wand.core} 
    //                                 alive={(el.alive)?"yes":"no"} />))}
          
    //        </div> 
    //     </Container>
        
    // </div>: <div className={s.main}>
    //     <hr className={s.hr}/>
    //     <Container>
    //         <div className={s.cardWrapper}>
    //             {data.map(el=>(<Card src={el.image} 
    //                                 name={el.name} 
    //                                 actor={el.actor} 
    //                                 gender={el.gender} 
    //                                 house={el.house} 
    //                                 wand={el.wand.core} 
    //                                 alive={(el.alive)?"yes":"no"} />))}
          
    //        </div>
    //     </Container>
        
    // </div>
    // )}
    




