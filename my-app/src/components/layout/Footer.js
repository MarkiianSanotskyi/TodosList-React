import React from 'react'

function Footer() {
    return ( 
        <footer style={footerStyle}>
            <h1>Just a footer!</h1>
        </footer>
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
