function Speciality({speciality, onChooseSpeciality}) {
    const btns = speciality.map(({name}, i) => <button onClick={() => {onChooseSpeciality(name)}} className="btn btn-primary" key={i}>{name}</button>);

    return (
        <div>
            {btns}
        </div>
    );
}

export default Speciality;