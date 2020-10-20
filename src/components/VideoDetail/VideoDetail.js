import React, {useContext} from 'react'
import {Store} from '../../stores/index'
import VideoPlay from '../VideoPlay/VideoPlay'
import Style from './VideoDetail.module.scss'
import Linkfy from 'react-linkify'

const VideoDetail = () => {
  
  const {globalState} = useContext(Store)

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
