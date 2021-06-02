import React from 'react';
import {
    array_sort_example,
    factorial_iterativo_example,
    factorial_recursivo_example,
    fibonacci_iterativo,
    fibonacci_recursive,
    find,
    matrix_multiply
} from './CodeExamples'
import { Button } from "@chakra-ui/react"


const CodeExampleButtons = (props) => {
    const { onClick } = props
    const onClickButton = (code) => {
        onClick(code)
    }
    return (
        <div>
            <Button m={1} onClick={() => onClick(array_sort_example)}>
                Array Sort
            </Button>
            <Button m={1} onClick={() => onClick(factorial_iterativo_example)}>
                Factorial Iterativo
            </Button>
            <Button m={1} onClick={() => onClick(factorial_recursivo_example)}>
                Factorial Recursivo
            </Button>
            <Button m={1} onClick={() => onClick(fibonacci_iterativo)}>
                Fibonacci Iterativo
            </Button>
            <Button m={1} onClick={() => onClick(fibonacci_recursive)}>
                Fibonacci Recursivo
            </Button>
            <Button m={1} onClick={() => onClick(find)}>
                Find
            </Button>
            <Button m={1} onClick={() => onClick(matrix_multiply)}>
                Matrix Multiply
            </Button>
        </div>
    )
}

export default CodeExampleButtons;