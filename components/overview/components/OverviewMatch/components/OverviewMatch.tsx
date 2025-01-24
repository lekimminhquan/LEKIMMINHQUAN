import { Text, Image } from "@mantine/core"
import matchList from "@/public/data/matchList.json"
import { formatMatchTime } from "@/public/utils/formatTime"
const OverviewMatch = () => {
  return (
    <div className="bg-[#020C20] flex flex-col rounded-lg mt-3 p-[10px] gap-3 mb-8">
      {matchList.data.events.map((match) => (
        <div key={match.id} className="flex w-full h-full rounded-lg max-h-[66px] justify-between items-center p-[10px] bg-gradient-to-r from-[#0A1F5566] via-[#102C7366] to-[#0C1A4C66] border border-transparent">
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
          <div className="flex flex-col gap-2 items-center justify-center">
            <Text size="13px" ff="Be Vietnam Pro" fw={500} color="#8D8E92">{match.homeScore.display}</Text>
            <Text size="13px" ff="Be Vietnam Pro" fw={500} color="#8D8E92">{match.awayScore.display}</Text>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OverviewMatch