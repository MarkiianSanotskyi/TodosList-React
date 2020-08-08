import React from 'react'

function Footer() {
    return ( 
        <header style={footerStyle}>
            <h1>Just a footer!</h1>
        </header>
    )
}

const footerStyle = {
    background: 'purple',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginTop: '0px',
}

export default Footer;
