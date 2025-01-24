
import { OverviewMatch } from "../../OverviewMatch"
import OverviewInfo from "./OverviewInfo"
import OverviewTranfer from "./OverviewTranfer"


const OverviewContent = () => {
  return (
    <div className='w-full h-full px-3 md:px-8 '>
      <OverviewInfo />
      <OverviewTranfer />
      <OverviewMatch />
    </div>
  )
}

export default OverviewContent