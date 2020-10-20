import React, {useContext} from 'react'
import {Store} from '../../stores/index'
import SideListItem from '../SideListItem/SideListItem'
import Style from './SideList.module.scss'

const SideList = () => {

  const {globalState} = useContext(Store)

  return (
    <div className={Style.sidenav}>
      {
        globalState.related ? globalState.related.map((video, index) => {
          return (
            <SideListItem 
              key={index}
              id={video.id.videoId}
              src={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            />
          )
        }) : <span>No Related Data</span>
      }
    </div>
  )
}

export default SideList
