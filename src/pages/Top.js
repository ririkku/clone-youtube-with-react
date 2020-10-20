import React, {useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import {fetchPopularDate} from '../apis/index'

const Top = () => {

  useEffect(() => {
    fetchPopularDate().then(res => {
      console.log(res);
    })
  }, []);

  return (
    <Layout>
      top page      
    </Layout>
  )
}

export default Top
