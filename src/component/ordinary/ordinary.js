import { Image } from "../app/App";

function Ordinary({state}) {
    const {speciality, group, subgroup} = state;

    return (
        <Image src={`img/${speciality}_${group}_${subgroup}.png`}/>
    );
}

export default Ordinary;