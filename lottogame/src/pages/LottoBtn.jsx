import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#129f97',
        border: 'none',
        borderRadius: '10px',
    },
    resetButton: {
        backgroundColor: '#cccccc',
    },
};

function LottoBtn({ generateNum, resetNum }) {
    return (
        <Fragment>
            <div style={styles.buttonContainer}>
                <button style={styles.button} type='button' onClick={generateNum}>로또번호 생성</button>
                <button style={{ ...styles.button, ...styles.resetButton }} type='button' onClick={resetNum}>초기화</button>
            </div>
        </Fragment>
    );
}

LottoBtn.propTypes = {
    generateNum: PropTypes.func.isRequired,
    resetNum: PropTypes.func.isRequired,
};

export default LottoBtn;
