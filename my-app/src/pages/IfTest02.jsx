
function IfTest02() {

    const score = Math.floor(Math.random() * 41) + 60;

    return (
        <>
            {
                score >= 85 && <h1>{score}, 합격</h1>
            }
            {
                score < 85 && <h1>{score}, 불합격</h1>
            }
        </>
    );
}

export default IfTest02;