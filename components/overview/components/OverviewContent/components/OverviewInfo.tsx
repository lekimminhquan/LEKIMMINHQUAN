'use client'
import { Box, Image, rem, Text } from '@mantine/core'
import PlayerInfo from '@/public/data/playerInfo.json'
import { calculateAge, formatTime } from '@/public/utils/formatTime'
import { FaRegStar } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import FooballIcon from './IconComponents/FooballIcon'
import BirthDay from './IconComponents/BirthDay'
import Foot from './IconComponents/Foot'
import Height from './IconComponents/Height'
import Jersey from './IconComponents/Jersey'
const OverviewInfo = () =>{
  const [favorite, setFavorite] = useState<boolean>(false)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full h-fit grid-flow-row auto-rows-auto bg-[#020C20] md:max-h-[200px] rounded-md'>
      <div className='px-4 py-3 h-full min-w-[210px] relative flex items-center'>
        <div className='flex items-center gap-4'>
          <div className='w-[90px] h-[90px] overflow-hidden rounded-full border-1 bg-white border-[#FCFCFD] flex items-center justify-center'>
            <Image src={`https://img.uniscore.com/football/player/${PlayerInfo.data.player.id}/image/medium`} alt="imagePlayer" w='100%' h='100%' />
          </div>
          <div className='flex flex-col gap-2'>
            <Text color='white' fw={500} size='32px' ff='Oswald'>{PlayerInfo.data.player.name}</Text>
            <div className='flex items-center gap-3'>
              <Image src={`https://img.uniscore.com/football/team/${PlayerInfo.data.player.team.id}/image/small`} alt="imagePlayer" w='40px' h='40px' />
              <Box className='flex flex-col gap-2'>
                <Text color='white' fw={500} size='12px' ff='Oswald'>{PlayerInfo.data.player.team.name}</Text>
                <Text color='#8D8E92' fw={400} size='12px' ff='Be Vietnam Pro'>Contract until {formatTime(PlayerInfo.data.player.contractUntilTimestamp)}</Text>
              </Box>
            </div>
          </div>
        </div>
        {favorite ? 
          (<div className='absolute top-3 right-4 cursor-pointer' onClick={(e) => {
            e.stopPropagation()
            setFavorite(!favorite)
          }}>
            <FaStar style={{width: rem(16), height: rem(16), color:'yellow'}}/>
          </div>
          )
          : 
          (<div className='absolute top-3 right-4 cursor-pointer' onClick={(e) => {
            e.stopPropagation()
            setFavorite(!favorite)
          }}>
            <FaRegStar style={{width: rem(16), height: rem(16), color:'white'}}/>
          </div>)
        }
      </div>
      <div className='grid grid-cols-2 w-full h-fit border-l border-[#171B2E]'>
        <div className='flex flex-col w-full h-full border-r border-[#171B2E]'>
          <div className='flex flex-col p-2 gap-1 border-b border-[#171B2E] h-[66px] justify-center'>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Nationality</Text>
            <div className='flex items-center gap-2 mt-1'>
              <Image src='https://img.uniscore.com/football/country/gy0or5jh43qwzv3/image/small' alt="imagePlayer" w='30px' h='20px' />
              <Text color='white' fw={500} size='13px' ff='Oswald'>{PlayerInfo.data.player.nationality.name}</Text>
            </div>
          </div>  
          <div className='flex flex-col p-2 gap-2 border-b border-[#171B2E] h-[66px] justify-center'>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Height</Text>
            <div className='flex items-center gap-2'>
              <Height />
              <Text color='white' fw={500} size='13px' ff='Oswald'>{PlayerInfo.data.player.height} cm</Text>
            </div>
          </div>
          <div className='flex flex-col p-2 gap-2 h-[66px] justify-center'>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Jersey Number</Text>
            <div className='flex items-center gap-2'>
              <Jersey />
              <Text color='white' fw={500} size='13px' ff='Oswald'>19</Text>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full h-full'>  
          <div className='flex flex-col p-2 gap-2 border-b border-[#171B2E] h-[66px] justify-center'>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Date of birth</Text>
            <div className='flex items-start gap-2'>
              <BirthDay />
              <div className='flex flex-col gap-2'>
                <Text color='white' fw={500} size='13px' ff='Oswald' tt='uppercase'>{formatTime(PlayerInfo.data.player.dateOfBirthTimestamp)}</Text>
                <Text color='#8D8E92' fw={400} size='10px' ff='Be Vietnam Pro'>{ calculateAge(PlayerInfo.data.player.dateOfBirthTimestamp)} years old</Text>
              </div>
            </div>
          </div>
          <div className='flex flex-col p-2 gap-2 border-b border-[#171B2E] h-[66px] justify-center'>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Preferred Foot</Text>
            <div className='flex items-center gap-2'>
              <Foot />
              <Text color='white' fw={500} size='13px' ff='Oswald'>{PlayerInfo.data.player.preferredFoot}</Text>
            </div>
          </div>
          <div className='flex flex-col p-2 gap-2 h-[66px] justify-center'>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Position</Text>
            <div className='flex items-center gap-2'>
              <FooballIcon />
              <Text color='white' fw={500} size='13px' ff='Oswald'>{PlayerInfo.data.player.position}</Text>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}
export default OverviewInfo