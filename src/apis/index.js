import axios from 'axios'

const KEY = 'AIzaSyB9Fek7Ycl9-b9dNc8FqH9anLTmhZD1K70'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularDate = async () => {
  return await youtube.get('/videos', {
    params: {
      part: 'snippet',
      maxResult: 40,
      key: KEY,
      regionCode: 'JP',
      type: 'video',
      chart: 'mostPopular'
    }
  });
}