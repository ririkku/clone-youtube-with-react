import React, {useEffect, useContext} from 'react'
import {useLocation} from 'react-router-dom'
import { fetchSelectedDate } from '../../apis'
import {Store} from '../../stores/index'

const VideoDetail = () => {
  
  const {globalState, setGlobalState} = useContext(Store)

  const location = useLocation()

  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('v')
    await fetchSelectedDate(id).then(res => {
      const item = res.data.items.shift()
      setGlobalState({type: 'SET_SELECTED', payload: {selected: item}})
    })
  }

  useEffect(() => {
    setSelectedVideo()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default VideoDetail
