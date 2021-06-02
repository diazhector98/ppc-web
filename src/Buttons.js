import React from 'react'
import { Button } from "@chakra-ui/react"

const Buttons = (props) => {
    const { canRun, onCompile, onRun, onClean } = props
    return (
        <div>
            <Button colorScheme="blue" m={3} onClick={onCompile}>
                Compilar
            </Button>
            <Button colorScheme="green" m={3} onClick={onRun} disabled={!canRun}>
                Correr
            </Button>
            <Button colorScheme="gray" m={3} onClick={onClean}>
                Limpiar
            </Button>
        </div>
    )
}

export default Buttons