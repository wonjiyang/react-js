import React from 'react';
import styled from 'styled-components';
import Balls from '../components/Balls';

const MainContainer = styled.section`
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 15px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

const BallBox =  styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
`


function LottoBox({lottoList}) {
    return (
        <div>
           <MainContainer>
                {
                    lottoList != null && lottoList.length > 0 
                     ? lottoList.map( (games, index)=>(
                        <BallBox key ={index}>
                            {
                                games.map((ball, index)=>(
                                    <Balls key={index} color={ball.color}>{ball.number}</Balls>
                                ))
                            }
                        </BallBox>
                      ))
                    : <BallBox><p>로또 생성버튼을 클릭해주십시오.</p></BallBox>
                }
          </MainContainer>   
        </div>
    );
}

export default LottoBox;