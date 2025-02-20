import React from 'react';

function Loop_exam(props) {

    const arr = [
        {
            id: 1,
            name: '김철수',
            age: 20
        },
        {
            id: 2,
            name: '김영희',
            age: 30
        },
        {
            id: 3,
            name: '박민수',
            age: 40
        },
    ]

    return (
        <>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>나이</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((obj, index) => 
                                (
                                    <tr key={index}>
                                        <td>{obj.id}</td>
                                        <td>{obj.name}</td>
                                        <td>{obj.age}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </main>
        </>
    );
}

export default Loop_exam;