import { Component } from "react";

import Groups from "../groups/groups";
import Speciality from "../speciality/speciality";
import SubGroups from "../subgroup/subgroup";
import Ordinary from "../ordinary/ordinary";

import styled from "styled-components";

export const HeadText = styled.h1`
    font-size: 25px;
    margin-top: 0;
    margin-bottom: 30px;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 100%;
`;

const specialityObject = [
    {
        name: 'ИСиТ',
        group: [1, 2, 3],
        subgroup: [1, 2]
    },
    {
        name: 'ПОИТ',
        group: [4, 5, 6],
        subgroup: [1, 2]
    }, 
    {
        name: 'ПОИБМС',
        group: [7,8],
        subgroup: [1, 2]
    }, 
    {
        name: 'ДЭиВИ',
        group: [9, 10],
        subgroup: [1, 2]
    }
];

const Container = styled.div`
    .container{
        width: 700px;
        max-widht: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        button{
            width: 100%;
            height: 50px;
            font-size: 20px;
            max-width: 100%;
            margin-bottom: 20px;
        }
    }
`;

class App extends Component{
    constructor(props){
        super(props)
    }

    state = {
        speciality: null,
        group: null,
        subgroup: null,
        ordinary: null
    }

    onChooseSpeciality = (speciality) => {
        this.setState({speciality: speciality})
    } 

    onChooseGroup = (numberGroup) => {
        this.setState({group: numberGroup})
    }

    onChoosSubGroup = (numberSubgroup) => {
        this.setState({subgroup: numberSubgroup});
    }

    onBack = () => {
        let indexMass = [];

        Object.entries(this.state).filter((item, i) => {
            if (item[1] === null) {
                indexMass.push(i);
            }
        })

        let index = indexMass[0];

        this.setState({
            [Object.keys(this.state)[index - 1]]: null
        })
    }

    render () {
        const {group, speciality, subgroup} = this.state;

        const specialityChoose = (group == null && speciality == null) ? <Speciality speciality={specialityObject} onChooseSpeciality={this.onChooseSpeciality}/> : null;
        const groupChoose = (speciality && group == null) ? <Groups onChooseGroup={this.onChooseGroup} speciality={specialityObject} chooseSpeciality={this.state.speciality}/> : null;
        const subGroupChoose = (speciality && group && subgroup == null) ? <SubGroups speciality={specialityObject} chooseSpeciality={this.state.speciality} onChoosSubGroup={this.onChoosSubGroup}/> : null;
        const ordinary = (speciality && group && subgroup) ? <Ordinary state={this.state}/> : null;
        const back = speciality ? <button onClick={() => {this.onBack()}} className="btn btn-secondary">Назад</button> : null; 

        return (
            <Container>
                <div className="container">
                    {specialityChoose}
                    {groupChoose}
                    {subGroupChoose}
                    {ordinary}
                    {back}
                </div>
            </Container>
        );
    }
}  

export default App;