import '../assets/css/common.css';

function CssExam() {

    //자바스크립트에서 데이터 객체 형식으로 css 구성
    //하이픈이 없고 카멜식으로 속성 값을 쓴다.
    const headerCss = {
        color: '#0908ae',
        textAlign: 'center',
    }

    //클래스 형태의 함수만 리턴
    return (
        <>
            <main className='container'>
                <section style={headerCss}>
                    <h1>안녕하세요</h1>
                </section>
            </main>  
        </>
    );
}

export default CssExam;