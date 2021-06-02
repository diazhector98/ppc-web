import axios from 'axios'

const COMPILE_ENDPOINT = "http://127.0.0.1:5000/compileFile"
const RUN_ENDPOINT = "http://127.0.0.1:5000/runFile"

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