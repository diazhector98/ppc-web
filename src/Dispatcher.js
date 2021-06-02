import axios from 'axios'

const COMPILE_ENDPOINT = "https://ppclang.herokuapp.com/compileFile"
const RUN_ENDPOINT = "https://ppclang.herokuapp.com/runFile"

class PPC {
    compile = async(input) => {
        const result = await axios.post(COMPILE_ENDPOINT, {
            'code': input
        })
        return result
    }

    run = async(input) => {
        const result = await axios.post(RUN_ENDPOINT, {
            'compilerResult': input
        })
        return result 
    }
}

export default PPC