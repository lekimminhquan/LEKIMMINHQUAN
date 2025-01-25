import React from 'react'
import OverviewContent from './components/OverviewContent'
import OverviewHeader from './components/OverviewHeader'

const Overview = () => {
  return (
    <div className="flex flex-col bg-black overflow-y-auto">
      <OverviewHeader />
      <OverviewContent />
    </div>
  )
}

export default Overview