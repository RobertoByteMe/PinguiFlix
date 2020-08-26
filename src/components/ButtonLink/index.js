import React from 'react';

function ButtonLink(props) {
    // props => { puxa o que for utilizado }
    console.log(props)

    return (
        <a href="props.href" className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;