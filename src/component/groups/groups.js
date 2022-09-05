import { HeadText } from "../app/App";

function Groups({speciality, chooseSpeciality, onChooseGroup}) {
    const specObj = speciality.filter(({name}) => name == chooseSpeciality);

    const btns = specObj[0].group.map((item, i) => <button onClick={() => {onChooseGroup(item)}} className="btn btn-primary" key={i}>{item}</button>)

    return (
        <div>
            <HeadText>Выберите группу: </HeadText>
            {btns}
        </div>
    );
}

export default Groups;