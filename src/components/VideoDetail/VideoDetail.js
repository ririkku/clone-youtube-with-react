import React, {useEffect, useContext} from 'react'
import {useLocation} from 'react-router-dom'
import { fetchSelectedDate } from '../../apis'
import {Store} from '../../stores/index'
import VideoPlay from '../VideoPlay/VideoPlay'
import Style from './VideoDetail.module.scss'
import Linkfy from 'react-linkify'

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

  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkfy>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkfy>
    </div>
  ) : <span>No Data</span>
}

export default VideoDetail
