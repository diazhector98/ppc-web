export const array_sort_example = `program Main;
main () {
    var A[10] int;
    var i int;
    var j int;
    var n int;
    var value int;
    var temp_value int;
    var seccionTerminoArray int;
    seccionTerminoArray = 9999999999999999999999999999999999;
    i = 0;
    j = 0;
    n = 10;
    A[0] = 9;
    A[1] = 7;
    A[2] = 4;
    A[3] = 3;
    A[4] = 10;
    A[5] = 5;
    A[6] = 6;
    A[7] = 2;
    A[8] = 1;
    A[9] = 8;

    while i < 10 {
        value = A[i];
        print(value);
        i = i + 1;
    }
    print(seccionTerminoArray);
    i = 0;

    var n_minus_one int;
    var n_minus_i_minus_one int;

    n_minus_one = n - 1;

    while i < n_minus_one {
        j = 0;
        n_minus_i_minus_one = n_minus_one - i;
        while j < n_minus_i_minus_one {
            if A[j] > A[j+1] {
                temp_value = A[j];
                A[j] = A[j+1];
                A[j+1] = temp_value;
            }
            j = j + 1;
        }
        i = i + 1;
    }

    i = 0;

    while i < 10 {
        value = A[i];
        print(value);
        i = i + 1;
    }
}
`

export const factorial_iterativo_example = `

program Main;

func factorial(A int) -> int {
    if A == 0 {
        return 1;
    } 
    else {
        var result int;
        result = 1;
        while 1 < A {
            result = result * A;
            A = A - 1;
        }
        return result;
    }
}

main () {
    var i int;
    i = 7;
    var fact int;

    fact = factorial(i);
    print(fact);
}

`

export const factorial_recursivo_example = `
program Main;

func factorial(A int) -> int {
    if A == 0 {
        return 1;
    } else {
        var result int;
        result = A * factorial(A - 1);
        return result;
    }
}

main () {
    var i int;
    i = 9;
    var fact int;

    fact = factorial(i);
    print(fact);
}


`

export const fibonacci_iterativo = `

program Main;

func fibonacci(A int) -> int {
    if A == 0 {
        return 0;
    }
    
    if A == 1 {
        return 1;
    } else {

        var a int;
        var b int;
        var c int;
        var counter int;
    
        a = 0;
        b = 1;
        counter = 1;

        while counter < A {
            c = a + b;
            a = b;
            b = c;
            counter = counter + 1;
        }
        return b;
    }
}

main () {
    var i int;
    i = 7;
    var fib int;

    fib = fibonacci(i);
    print(fib);
}


`


export const fibonacci_recursive = `

program Main;

func fibonacci(A int) -> int {

    if A == 0 {
        return 0;
    } 
    
    if A == 1 {
        return 1;
    }
    if A == 2 {
        return 1;
    } else {
        var result int;
        result = fibonacci(A - 1) + fibonacci(A - 2);
        return result;
    }
}

main () {
    var i int;
    i = 9;
    var fib int;

    fib = fibonacci(i);
    print(fib1);
}

`

export const find = `
program Main;

main () {
    var element int;
    var array[10] int;
    var value int;
    var value_exist int;
    value_exist = 0;

    array[0] = 5;
    array[1] = 2;
    array[2] = 3;
    array[3] = 7;
    array[4] = 12;
    array[5] = 9;
    array[6] = 15;
    array[7] = 53;
    array[8] = 47;
    array[9] = 34;
    element = 9;

    var index int;
    index = 0;
    while index < 10 {
        if element == array[index] {
            value_exist = 1;
        }
        index = index + 1;
    }

    if value_exist == 1 {
        print(1);
    } else {
        print(0);
    }
}

`

export const matrix_multiply = `
program Main;

main () {
    var first_matrix[3][3] int;
    var rows_first int;
    var columns_first int;

    var second_matrix[3][3] int;
    var rows_second int;
    var columns_second int;

    var result[3][3] int;
    var result_value int;
    var i int;
    var j int;
    var k int;

    rows_first = 3;
    columns_first = 3;

    rows_second = 3;
    columns_second = 3;
    
    first_matrix[0][0] = 1;
    first_matrix[0][1] = 2;
    first_matrix[0][2] = 3;

    first_matrix[1][0] = 1;
    first_matrix[1][1] = 2;
    first_matrix[1][2] = 3;

    first_matrix[2][0] = 1;
    first_matrix[2][1] = 2;
    first_matrix[2][2] = 3;

    second_matrix[0][0] = 1;
    second_matrix[0][1] = 2;
    second_matrix[0][2] = 3;

    second_matrix[1][0] = 1;
    second_matrix[1][1] = 2;
    second_matrix[1][2] = 3;

    second_matrix[2][0] = 1;
    second_matrix[2][1] = 2;
    second_matrix[2][2] = 3;


    if columns_first != columns_second {
        print(0);
    } else {
        i = 0;
        j = 0;
        
        while i < rows_first {
            j = 0;
            while j < columns_second {
                result[i][j] = 0;
                j = j + 1;
            }
            i = i + 1;
        }

        i = 0;
        j = 0;
        k = 0;
        
        while i < rows_first {
            j = 0;
            while j < columns_second {
                k = 0;
                while k < columns_first {
                    result[i][j] = result[i][j] + first_matrix[i][k] * second_matrix[k][j];
                    k = k + 1;
                }
                j = j + 1;
            } 
            i = i + 1;
        }

        i = 0;
        j = 0;

        while i < rows_first {
            j = 0;
            while j < columns_second {
                result_value = result[i][j];
                print(result_value);
                j = j + 1;
            }
            i = i + 1;
        }
    }
}

`