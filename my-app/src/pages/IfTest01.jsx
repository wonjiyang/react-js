
function IfTest01() {

    const score = Math.floor(Math.random() * 41) + 60;

    return (
        <>
            {
                score >= 85 ? <div>{score}, 합격</div> : <div>{score}, 불합격</div>
            }
        </>
    );
}

export default IfTest01;