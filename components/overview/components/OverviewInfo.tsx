import { Box, Image, Text } from '@mantine/core'
import PlayerInfo from '@/public/data/playerInfo.json'
import { formatTime } from '@/public/utils/formatTime'
const OverviewInfo = () =>{
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full grid-flow-row auto-rows-auto'>
      <div className='px-4 py-3 h-full min-w-[210px] max-h-[200px] flex items-center'>
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
      </div>
      <div className='grid grid-cols-2 w-full h-full max-h-[200px] border border-[#171B2E]'>
        <div className='flex flex-col w-full h-full border-r border-[#171B2E]'>
          <div className='flex flex-col p-2 border-b border-[#171B2E]'>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Nationality</Text>
            <div className='flex items-center gap-2'>
              <Image src={`https://img.uniscore.com/football/country/${PlayerInfo.data.player.nationality.id}/image/small`} alt="imagePlayer" w='40px' h='40px' />
              <Text color='white' fw={500} size='13px' ff='Oswald'>{PlayerInfo.data.player.nationality.name}</Text>
            </div>
          </div>
          <div className='flex flex-col p-2 border-b border-[#171B2E]'>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Height</Text>
            <div className='flex items-center gap-2'>
              <Image src={`https://img.uniscore.com/football/country/${PlayerInfo.data.player.nationality.id}/image/small`} alt="imagePlayer" w='40px' h='40px' />
              <Text color='white' fw={500} size='13px' ff='Oswald'>{PlayerInfo.data.player.height}</Text>
            </div>
          </div>
          <div className='flex flex-col p-2'>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Jersey Number</Text>
            <div className='flex items-center gap-2'>
              <Image src={`https://img.uniscore.com/football/country/${PlayerInfo.data.player.nationality.id}/image/small`} alt="imagePlayer" w='40px' h='40px' />
              <Text color='white' fw={500} size='13px' ff='Oswald'>19</Text>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full h-full'>  
          <div className='flex flex-col p-2 border-b border-[#171B2E] '>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Date of birth</Text>
            <div className='flex items-center gap-2'>
              <Image src={`https://img.uniscore.com/football/country/${PlayerInfo.data.player.nationality.id}/image/small`} alt="imagePlayer" w='40px' h='40px' />
              <Text color='white' fw={500} size='13px' ff='Oswald'>{formatTime(PlayerInfo.data.player.dateOfBirthTimestamp)}</Text>
            </div>
          </div>
          <div className='flex flex-col p-2 border-b border-[#171B2E] '>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Preferred Foot</Text>
            <div className='flex items-center gap-2'>
              <Image src={`https://img.uniscore.com/football/country/${PlayerInfo.data.player.nationality.id}/image/small`} alt="imagePlayer" w='40px' h='40px' />
              <Text color='white' fw={500} size='13px' ff='Oswald'>{PlayerInfo.data.player.preferredFoot}</Text>
            </div>
          </div>
          <div className='flex flex-col p-2'>
            <Text color='#8D8E92' fw={300} size='11px' ff='Oswald'>Position</Text>
            <div className='flex items-center gap-2'>
              <Image src={`https://img.uniscore.com/football/country/${PlayerInfo.data.player.nationality.id}/image/small`} alt="imagePlayer" w='40px' h='40px' />
              <Text color='white' fw={500} size='13px' ff='Oswald'>{PlayerInfo.data.player.position}</Text>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}
export default OverviewInfo