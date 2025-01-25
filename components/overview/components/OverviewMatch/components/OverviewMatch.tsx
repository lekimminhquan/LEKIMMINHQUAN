import { Text, Image } from "@mantine/core"
import matchList from "@/public/data/matchList.json"
import { formatMatchTime } from "@/public/utils/formatTime"
import styles from '@/components/overview/Overview.module.scss'
import IconTable from "./IconTable"
const OverviewMatch = () => {
  const checkWin = (homeScore: number, awayScore: number) => {
    switch(true){
        case homeScore > awayScore:
          return 'linear-gradient(to right, #00289F, #001F7B, #091557)'
        case homeScore < awayScore:
          return '#2187E5'
        default:
          return '#0038E0'
    }
  }
  return (
    <div className="bg-[#020C20] flex flex-col rounded-lg mt-3 p-[10px] gap-3 mb-8">
      {matchList.data.events.map((match) => (
        <div key={match.id} className={styles.overviewMatchItem}>
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2 justify-center">
              <Text size="13px" ff="Be Vietnam Pro" fw={500} color="#8D8E92">{formatMatchTime(match.startTimestamp)}</Text>
              <Text size="13px" ff="Be Vietnam Pro" fw={500} color="#8D8E92">{match.status.type}</Text>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Image src={`https://img.uniscore.com/football/team/${match.homeTeam.id}/image/small`} alt="Chelsea" w={20} h={20} mr={10}/>
                <Text size="13px" ff="Be Vietnam Pro" fw={500} color="#8D8E92">{match.homeTeam.name}</Text>
              </div>
              <div className="flex items-center gap-1">
                <Image src={`https://img.uniscore.com/football/team/${match.awayTeam.id}/image/small`} alt="Chelsea" w={20} h={20} mr={10}/>
                <Text size="13px" ff="Be Vietnam Pro" fw={500} color="white">{match.awayTeam.name}</Text>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-[22px] h-[22px] rounded-tl-md rounded-tr-md bg-white px-[7px] py-[4px]" style={{background: checkWin(match.homeScore.display, match.awayScore.display)}}>
                <Text size="13px" ff="Be Vietnam Pro" fw={600} color="#FFFFFF">{match.homeScore.display}</Text>
              </div>
              <div className="flex items-center justify-center w-[22px] h-[22px] rounded-bl-md rounded-br-md bg-white px-[7px] py-[4px]" style={{background: checkWin(match.awayScore.display, match.homeScore.display)}}>
                <Text size="13px" ff="Be Vietnam Pro" fw={600} color="#FFFFFF">{match.awayScore.display}</Text>
              </div>
            </div>
            <IconTable />
          </div>
        </div>
      ))}
    </div>
  )
}

export default OverviewMatch