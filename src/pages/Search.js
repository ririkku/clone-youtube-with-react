import React, {useEffect, useContext} from 'react'
import Layout from '../components/Layout/Layout'
import {useLocation} from 'react-router-dom'
import { fetchSearchDate } from '../apis'
import {Store} from '../stores/index'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'

const Search = () => {

  const {globalState, setGlobalState} = useContext(Store)

  const location = useLocation()
  const setSearchResult = async () => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('query')
    if(query) {
      await fetchSearchDate(query).then(res => {
        setGlobalState({type: 'SET_SEARCHED', payload: {searched: res.data.items}})
      })
    }
  }

  useEffect(() => {
    setSearchResult()
  }, [location.search])

  return (
    <Layout>
      <VideoGrid>
        {
          globalState.searched ? globalState.searched.map((video, index) => {
            return <VideoGridItem 
              key={index} 
              id={video.id.videoId} 
              src={video.snippet.thumbnails.medium.url}
              title={video.snippet.title} />
          }) : <span>No Search Data</span>
        }
      </VideoGrid>
    </Layout>
  )
}

export default Search
