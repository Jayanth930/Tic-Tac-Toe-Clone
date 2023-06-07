import { useEffect, useState , useRef} from "react"
import { Button } from "react-bootstrap"
import { usePlayer , PLAYER , CHOOSE , WinArray } from "./PlayerProvider"
import {PropTypes} from 'prop-types'
export default function Icon({positionArr}) {
    const initialRender = useRef(true)
    const {player , setPlayer , iconsArr} = usePlayer()
      const [icon , setIcon] = useState(CHOOSE)
      function handleClick(){
        if(player === PLAYER.player1 && icon === CHOOSE){  // Means cross player is playing
          setIcon(iconsArr[0])
        }else if (player === PLAYER.player2 && icon=== CHOOSE){
          setIcon(iconsArr[1])
        }
    } 
    useEffect(()=>{
        if (initialRender.current) {
            initialRender.current = false
            return  
        }
        if (
            WinArray[0][0] === WinArray[0][1] === WinArray[0][2]  || 
            WinArray[1][0] === WinArray[1][1] === WinArray[1][2]  ||
            WinArray[2][0] === WinArray[2][1] === WinArray[2][2]  ||
            WinArray[0][0] === WinArray[1][0] === WinArray[2][0]  || 
            WinArray[0][1] === WinArray[1][1] === WinArray[2][1]  ||
            WinArray[0][2] === WinArray[0][2] === WinArray[0][2]  ||
            WinArray[0][0] === WinArray[1][1] === WinArray[2][2]  || 
            WinArray[2][0] === WinArray[1][1] === WinArray[0][2]
){
          console.log('Some Player Wins')   
        }
        WinArray[positionArr[0]][positionArr[1]] = player===PLAYER.player1? 'x' : 'o' ;
        WinArray[0][1]
        console.log(WinArray)
        setPlayer(prev => {
            if (prev ===   PLAYER.player1) return PLAYER.player2
            return PLAYER.player1
        })
    },[icon])
  return (
    <div style={{width : '100px' ,height: '100px'}}><Button onClick={handleClick} variant='secondary' className="w-100 h-100">{icon}</Button></div>
  )
}
Icon.propTypes = {
    positionArr: PropTypes.node.isRequired,
  };