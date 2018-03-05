import { post } from './api'
import FINISHED_LOADING from '../actionTypes/control'
import insertDynamicData from '../../dynamic'

export default dispatch => domain =>
  // get(`/estabilishment/${domain}`)
  post('https://httpbin.org/post', {
    domain,
    id: 1,
    name: 'Padaria do Matheus',
    description: 'Matheus description',
    url: 'http://192.168.0.102:8081/',
    faviconUrl: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png',
  }, { dispatch })
    .then(x => x.data.json)
    .tap(insertDynamicData)
    .tap(estabilishment => dispatch({
      type: FINISHED_LOADING,
      estabilishment,
    }))
