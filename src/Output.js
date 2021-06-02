import React from 'react'

const Output = (props) => {
    const { value } = props
    console.log({ value })
    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '1000px'
        }}>
            <h1>Resultado</h1>
            <textarea style={{flex: 1}} value={value} />
        </div>
    )
}

export default Output