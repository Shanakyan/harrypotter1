import s from './Card.module.css'

export const Card = ({src,name,actor,gender,house,wand,alive}) => {
    return(
        <div className={s.card}>
            <img className={s.CardImage} src={src} />
            <div className={s.CardContent}>
                <h3 className={s.CardTitle}>{name}</h3>
                <p>Actor:{actor}</p>
                <p> Gender: {gender}</p>
                <p>House: {house}</p>
                <p>Wand core: {wand}</p>
                <p>Alive: {alive}</p>              
             
            </div>
        </div>
     )
    }