import { styled, Tab as MUITab, Tabs as MUITabs } from '@mui/material'
import { useState } from 'react'
import ExcuseGenerator from './ExcuseGenerator'
import PromiseGenerator from './PromiseGenerator'

const Tab = (props) => (
  <MUITab
    disableRipple
    sx={{
      fontSize: 16
    }}
    {...props}
  />
)

const Tabs = styled(MUITabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  }
})

const Generators = () => {
  const [tab, setTab] = useState('excuses')

  const onTabChange = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <>
      <Tabs value={tab} onChange={onTabChange} centered>
        <Tab label="Excuses" value="excuses" />
        <Tab label="Promises" value="promises" />
      </Tabs>
      {tab === 'excuses' && <ExcuseGenerator />}
      {tab === 'promises' && <PromiseGenerator />}
    </>
  )
}

export default Generators
