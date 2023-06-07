import { useEffect, useState , useRef} from "react"
import { Button } from "react-bootstrap"
import { usePlayer , PLAYER , CHOOSE , winObj, WinCombinations } from "./PlayerProvider"
import {PropTypes} from 'prop-types'
export default function Icon({position , setAlert }) {
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
        if (player === PLAYER.player1){
           winObj.player1Arr.push(position)   
        }else{
           winObj.player2Arr.push(position)
        }
        setPlayer(prev => {
            if (prev ===   PLAYER.player1) return PLAYER.player2
            return PLAYER.player1
        })
        console.log(winObj)
        if (checkWinPlayer1(winObj)){
          setAlert([true , `${PLAYER.player1} Wins Please Refresh`])
        }else if (checkWinPlayer2(winObj)){
          setAlert([true , `${PLAYER.player2} Wins Please Refresh`])
        }
    },[icon])
  return (
    <div style={{width : '100px' ,height: '100px'}}><Button onClick={handleClick} variant='secondary' className="w-100 h-100">{icon}</Button></div>
  )
}
Icon.propTypes = {
    position: PropTypes.node.isRequired,
  };
Icon.propTypes = {
  setAlert: PropTypes.node.isRequired,
 };

function checkWinPlayer1({player1Arr}){
  return  WinCombinations.some(combination => {
    return combination.every(element=>{
      return player1Arr.includes(element)
    })
  })

}

function checkWinPlayer2({player2Arr}){
  return WinCombinations.some(combination => {
    return combination.every(element=>{
      return player2Arr.includes(element)
    })
  })
}