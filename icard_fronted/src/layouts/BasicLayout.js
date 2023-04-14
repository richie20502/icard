import React from 'react'

export  function BasicLayout(props) {
    const {children} = props;
    return (
    <div>
        <p>
            BasicLayout
        </p>
        {children}
    </div>
    )
}
