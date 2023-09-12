import React from 'react'
import { Button } from '.'
import { FaPlay } from 'react-icons/fa'

const PlayButton = () => {
  return (
    <Button
        className="
            transition
            opacity-0
            flex
            items-center
            p-4
            drop-shadow-md
            translate
            translate-y-1/4
            group-hover:opacity-100
            group-hover:translate-y-0
            hover:scale-110
        "    
    >
        <FaPlay className="text-black"/>
    </Button>
  )
}

export default PlayButton