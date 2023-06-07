import React , { useState , useContext } from 'react'
import {PropTypes} from 'prop-types'
const  Player = React.createContext()

export  const PLAYER = {
    player1 : 'cross',
    player2 : 'circle'
 }

export const WinArray = [["", "", ""],[ "", "", ""],[ "", "", ""]]

const iconsArr = [
   <i key={PLAYER.player1} className="fa fa-times fa-4x" aria-hidden="true"></i> ,
   <i key={PLAYER.player2} className="fa-regular fa-4x fa-circle"></i>
] 
 
export const CHOOSE ='choose'

export function usePlayer(){
    return useContext(Player)
}


export default function PlayerProvider({children}) {
  const [player , setPlayer] = useState(PLAYER.player1)
  return (
    <Player.Provider value={{player ,setPlayer, iconsArr}}>
        {children}
    </Player.Provider>
  ) 
}

PlayerProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };