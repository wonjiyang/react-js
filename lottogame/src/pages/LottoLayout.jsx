import React from 'react';
import PropTypes from 'prop-types';

function LottoLayout({ lottoNumbers }) { 
    const getColorByNumber = (num) => {
        if(num >= 1 && num <= 10) {
            return '#ffc107';
        }else if(num >= 11 && num <= 20) {
            return '#1aa3f3'
        }else if(num >= 21 && num <= 30) {
            return '#e96353'
        }else if (num >= 31 && num <= 45) {
            return '#555555';
        }
    };

    const styles = {
        container: {
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
        },
        title: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
        },
        numberContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        row: {
            display: 'flex',
            gap: '10px',
        },
        numberBox: {
            width: '40px',
            height: '40px',
            color: 'white',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
        },
        Message: {
            color: '#aaaaaa',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>행운의 숫자</h1>
            <div style={styles.numberContainer}>
                {lottoNumbers && lottoNumbers.length > 0 ? (
                    lottoNumbers.map((numbers, index) => (
                        <div key={index} style={styles.row}>
                            {numbers.map((num, i) => (
                                <div key={i} style={{...styles.numberBox, backgroundColor: getColorByNumber(num)}}>
                                    {num}
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <p style={styles.Message}>생성 버튼을 눌러주세요!</p>
                )}
            </div>
        </div>
    );
}

LottoLayout.propTypes = {
    lottoNumbers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default LottoLayout;
