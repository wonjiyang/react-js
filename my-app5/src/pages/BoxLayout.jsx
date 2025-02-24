import React, { useState } from 'react';
import Square from './Square';
import ButtonComp from './ButtonComp';

function BoxLayout() {

    const [boxList, setBoxList] = useState([]);

    //박스 추가
    const addBox = () => {
        const color = makeColor();
        const box = {
            w: '100px',
            h: '100px',
            color: color
        }
        const newBoxList = [...boxList, box];
        setBoxList(newBoxList);
    }

    //박스 삭제
    const delBox = () => {
        //마지막 요소 반환 삭제
        boxList.pop();
        // ...: 배열 안의 요소들을 분해할 때 사용
        const newBoxList = [...boxList];
        setBoxList(newBoxList);
    }

    //RGB 랜덤 함수
    function makeColor(){
        const colors = [];
        colors.push('#');
        for(let i = 0; i < 3; i++){
            // 0 ~ 255 사이 값을 16진수로 변경 
            let color = Math.floor(Math.random() * 256).toString(16); 
            if(color.length === 1) {
                color = '0' + color;
            }
            colors.push(color);
        }
        return  colors.join(''); 
    }

    return (
        <>
            <Square boxList={boxList}/>
            <ButtonComp addBox={addBox} delBox={delBox}/>
        </>
    );
}

export default BoxLayout;