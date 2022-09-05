import { Component } from "react";

import Groups from "../groups/groups";
import Speciality from "../speciality/speciality";
import SubGroups from "../subgroup/subgroup";

import styled from "styled-components";

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
        div button{
            width: 100%;
            height: 50px;
            font-size: 20px;
            max-width: 100%;
            margin-bottom: 20px;
            &:last-child{
                margin-bottom: 0
            }
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
        subgroup: null
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

    render () {
        const {group, speciality} = this.state;

        const specialityChoose = (group == null && speciality == null) ? <Speciality speciality={specialityObject} onChooseSpeciality={this.onChooseSpeciality}/> : null;
        const groupChoose = (speciality && group == null) ? <Groups onChooseGroup={this.onChooseGroup} speciality={specialityObject} chooseSpeciality={this.state.speciality}/> : null;
        const subGroupChoose = (speciality && group) ? <SubGroups speciality={specialityObject} chooseSpeciality={this.state.speciality} onChoosSubGroup={this.onChoosSubGroup}/> : null;

        return (
            <Container>
                <div className="container">
                    {specialityChoose}
                    {groupChoose}
                    {subGroupChoose}
                </div>
            </Container>
        );
    }
}  

export default App;