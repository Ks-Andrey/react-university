import { HeadText } from "../app/App";

function SubGroups({speciality, chooseSpeciality, onChoosSubGroup}) {
    const specObj = speciality.filter(({name}) => name == chooseSpeciality);

    const btns = specObj[0].subgroup.map((item, i) => <button onClick={() => {onChoosSubGroup(item)}} className="btn btn-primary" key={i}>{item}</button>)

    return (
        <div>
            <HeadText>Выберите подгруппу: </HeadText>
            {btns}
        </div>
    );
}

export default SubGroups;