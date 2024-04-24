import s from './Card.module.css'

export const Card = () => {
    return(
        <div className={s.card}>
            <img className={s.CardImage} src="http://hp-api.herokuapp.com/images/ginny.jpg" alt="alt" />
            <div className={s.CardContent}>
                <h3 className={s.CardTitle}>Hermione Granger</h3>
                <p>Actor: Emma Watson</p>
                <p> Gender: female</p>
                <p>House: Gryffindor</p>
                <p>Wand core: dragon heartstring</p>
                <p>Alive: yes </p>              
             
            </div>
        </div>
     )
    }