import React, {useState} from 'react';
import styled from 'styled-components';
import LottoBox from './LottoBox';
import Buttons from '../components/Buttons';


const CommonLayout = styled.main`
    width: 800px;
    margin: 0 auto;
`
const ButtonArea = styled.main`
    text-align: center;
    margin-top: 30px;
`

function LottoLayout(props) {

    const [balls, setBalls] = useState([]);

    //한줄 로또 만들기 함수
    const makeLotto = () =>{
        const lottoBalls  = [];
        let count = 0;
        while(count < 6) {
            const rand = Math.floor(Math.random() * 45) + 1;
            //중복처리 로또개수가 1개 이상일때 비교.
            //some 1개라도 참 이나오면 결과를 true 로 리턴 
            if(lottoBalls.length> 0 &&
                lottoBalls.some(ball => ball.number === rand)) {
                continue;
            }
            const newBall = {number: rand, color : makeColor()};
            lottoBalls.push(newBall);
            count++;
        }
        // 오름차순으로 정렬 후 리턴 
        return lottoBalls.sort((a, b)=> a.number - b.number);
    }


    const generateNumbers = ()=>{
        //배열의 길이를 5로 하고, 콜백에서 받은 데이터를 삽입한다.
        const newLottos = Array.from({length: 5}, ()=> makeLotto());
        setBalls(newLottos);

    }

    const resetBalls = () =>{
        setBalls([]);
    }


    const makeColor =() =>{
        const colors = [];
        for(let i =0; i< 3; i ++)  {
            const rand = Math.floor(Math.random() * 256);
            let color = rand.toString(16);
            if(color.length === 1) {
                color = ('0' + color);
            }
            colors.push(color);
        }
        return '#' + colors.join('');
    }

    return (
        <>
           <CommonLayout>
            <header style={{textAlign:'center'}}>
                <h3>로또 번호 자동 생성기 </h3>
            </header>
            <LottoBox lottoList={balls} />
            <ButtonArea>
               <Buttons $primary event={generateNumbers}>로또생성</Buttons>
               <Buttons $resets  event={resetBalls}>초기화</Buttons>
            </ButtonArea>  
          </CommonLayout> 
        </>
    );
}

export default LottoLayout;