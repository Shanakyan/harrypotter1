import s from './Select.module.css'

export const Select = ({schoolName,handleSelect}) => {
    return(
     <div className={s.selectWrap}>

        <p>School</p>
        <select onChange={handleSelect} schoolName={schoolName} className={s.headerSection}  >
            <option value="" disabled selected>Choose one</option>            
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuf</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
        </select>
     </div>   
    ) 
    
}