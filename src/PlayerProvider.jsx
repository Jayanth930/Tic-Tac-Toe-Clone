import React , { useState , useContext } from 'react'
import {PropTypes} from 'prop-types'

const  Player = React.createContext()

export  const PLAYER = {
    player1 : 'cross',
    player2 : 'circle'
 }
export const WinCombinations = [
  [1,2,3] ,[4,5,6] , [7,8,9] ,[1,4,7] , [2,5,8] , [3,6,9] , [1,5,9] , [3,5,7]
]

export const winObj = {
  player1Arr : [],
  player2Arr : []
}


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