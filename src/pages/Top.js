import React, {useEffect, useContext} from 'react'
import Layout from '../components/Layout/Layout'
import {fetchPopularDate} from '../apis/index'
import {Store} from '../stores/index'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'

const Top = () => {

  const {globalState, setGlobalState} = useContext(Store)

  useEffect(() => {
    fetchPopularDate().then(res => {
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
    })
  }, [])

  return (
    <Layout>
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular, index) => {
            return (
              <VideoGridItem 
                key={index}
                id={popular.id}
                src={popular.snippet.thumbnails.standard.url}
                title={popular.snippet.title} />
            )
          })
        }
      </VideoGrid>
            
    </Layout>
  )
}

export default Top
