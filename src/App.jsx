import { Container } from 'react-bootstrap'
import  Icon  from './Icon'
import PlayerProvider from "./PlayerProvider"
function App() {
   // const [player , setPlayer] = useState(PLAYER.cross)
  // const [icon , setIcon] = useState('Choose')
  // function handleClick(){
  //   if(player === PLAYER.cross){  // Means cross player is playing
  //     setIcon(iconsArr[0])
  //   }else if (player === PLAYER.circle){
  //     setIcon(iconsArr[1])
  //   }else{
  //     setIcon('Choose')
  //   }
    
    
  //   setPlayer(prev => {
  //     if (prev ===   PLAYER.cross) return PLAYER.circle
  //     return PLAYER.cross
  //   })
  // }
  return (
  <>
    <PlayerProvider>
      <Container className="d-flex flex-column gap-1 align-items-center justify-content-center vh-100">
        <div className="d-flex gap-2">
          <Icon positionArr={[0,0]}/>
          <Icon positionArr={[0,1]}/>
          <Icon positionArr={[0,2]}/>
        </div>
        <div className="d-flex gap-2">
          <Icon positionArr={[1,0]}/>
          <Icon positionArr={[1,1]}/>
          <Icon positionArr={[1,2]}/>
        </div>
        <div className="d-flex gap-2">
          <Icon positionArr={[2,0]}/>
          <Icon positionArr={[2,1]}/>
          <Icon positionArr={[2,2]}/>
        </div>
      </Container>
    </PlayerProvider>
  </>
  )
}

export default App
