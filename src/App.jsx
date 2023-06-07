import { Alert ,Container } from 'react-bootstrap'
import  Icon  from './Icon'
import PlayerProvider  from "./PlayerProvider"
import { useState } from 'react'

function App() {
   const [alert , setAlert] = useState([false , ''])
   return (
  <>
    <PlayerProvider>
      <Alert show={alert[0]} variant="success" onClose={() => setAlert([false , ''])} dismissible>
         <Alert.Heading className='d-flex justify-content-center'>{alert[1]}</Alert.Heading>
      </Alert>
      <Container className="d-flex flex-column gap-1 align-items-center justify-content-center vh-100">
        <div className="d-flex gap-2">
          <Icon position={1} setAlert={setAlert}/>
          <Icon position={2} setAlert={setAlert}/>
          <Icon position={3} setAlert={setAlert}/>
        </div>
        <div className="d-flex gap-2">
          <Icon position={4} setAlert={setAlert}/>
          <Icon position={5} setAlert={setAlert}/>
          <Icon position={6} setAlert={setAlert}/>
        </div>
        <div className="d-flex gap-2">
          <Icon position={7} setAlert={setAlert}/>
          <Icon position={8} setAlert={setAlert}/>
          <Icon position={9} setAlert={setAlert}/>
        </div>
      </Container>
    </PlayerProvider>
  </>
  )
}

export default App
