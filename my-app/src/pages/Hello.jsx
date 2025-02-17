import { Fragment } from 'react';

function Hello() {

    const str = "안녕";

    return (
        <Fragment>
            <div>
                <h1>{str}</h1>
            </div>
        </Fragment>
    );
}

export default Hello;