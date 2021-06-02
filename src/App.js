import React, { useState } from 'react';
import AceEditor from "react-ace";
import { Heading } from "@chakra-ui/react"

import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/theme-monokai";

import Output from './Output'
import Buttons from './Buttons'
import Dispatcher from './Dispatcher'
import CodeExampleButtons from './components/CodeExampleButtons'

const App = () => {
  const [code, setCode] = useState('')
  const [compileOutput, setCompileOutput] = useState('')
  const [result, setResult] = useState('')
  const dispatcher = new Dispatcher()

  const onChange = (e) => {
    console.log({ e })
    setCode(e)
  }

  const onCompile = () => {
    dispatcher.compile(code).then((r) => {
      console.log({ r })
      const { data } = r
      const c = data.compiler
      console.log({ c })
      setResult(c)
      setCompileOutput(c)
    }).catch((e) => {
      console.log({ e })
    })
  }

  const onRun = () => {
    dispatcher.run(compileOutput).then((result) => {
      console.log({ result })
      const { data } = result
      setResult(data.result)
    }).catch((e) => {
      console.log({ e })
    })
  }

  const onClean = () => {
    setCode('')
    setCompileOutput('')
    setResult('')
    console.log("cleaning")
  }

  const onCodeExampleClicked = (c) => {
    setCode(c)
  }

  return (
    <div 
      className="App"
      style={{
        display: 'flex',
        height: '100%'
      }}
      >
        <div style={{
          flex: 1,
        }}>
          <div style={{padding: 10}}>
            <Heading>Editor Plus Plus C</Heading>
            <Buttons 
              onCompile={onCompile}
              onRun={onRun}
              onClean={onClean}
            />
            <Heading size={"lg"}> Ejemplos de Código</Heading>
            <CodeExampleButtons onClick={onCodeExampleClicked} />
          </div>
          <AceEditor
            mode="golang"
            theme="monokai"
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            style={{
              height: '1000px',
              width: '100%',
            }}
            value={code}
          />
        </div>
        <Output
          value={result} />
    </div>
  );
}

export default App;
