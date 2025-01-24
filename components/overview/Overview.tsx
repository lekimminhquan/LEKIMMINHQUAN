import React from 'react'
import OverviewHeader from './components/OverviewHeader'
import OverviewContent from './components/OverviewContent'

const Overview = () => {
  return (
    <div className="flex flex-col h-screen bg-black">
      <OverviewHeader />
      <OverviewContent />
    </div>
  )
}

export default Overview