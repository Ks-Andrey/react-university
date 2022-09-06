import { HeadText } from "../app/App";

import styled from "styled-components";

const Iframe = styled.iframe`
    width: 100%;
    height: 220px;
`;

function Ordinary({state}) {
    const {speciality, group, subgroup} = state;
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота'];
    const week = ['I', 'II'];

    function getMonthNumber(){
        const currentdate = new Date(),
              oneJan = new Date(currentdate.getFullYear(),0,1),
              numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000)),
              result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7),
              parity = result % 2 === 0 ? 1 : 0;

        return {weekNum: parity, day: currentdate.getDay()};
    } 

    const src = `ordinary/${week[getMonthNumber().weekNum]}/${weekDays[getMonthNumber().day]}/${speciality}/${group}/${subgroup}/index.html`;
    
    console.log(__dirname)

    return (
        <div>
            <HeadText>Сегодня {week[getMonthNumber().weekNum]} неделя, {weekDays[getMonthNumber().day]}</HeadText>
            <Iframe src={src}/>
        </div>
    );
}

export default Ordinary;