import React from 'react'
import { Heading } from "@chakra-ui/react"

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
            <Heading>Resultado</Heading>
            <textarea style={{flex: 1}} value={value} />
        </div>
    )
}

export default Output