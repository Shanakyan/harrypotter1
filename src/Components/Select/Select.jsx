import s from './Select.module.css'

export const Select = ({value}) => {
    return(
     <div className={s.selectWrap}>

        <p >School</p>
        <select  className={s.headerSection} value={value} >
                        <option >{value}</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Hufflepuff">Hufflepuf</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                        <option value="Slytherin">Slytherin</option>
        </select>
     </div>   
    ) 
    
}