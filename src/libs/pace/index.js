import './style.scss'

window.paceOptions = {
  ajax: {
    trackMethods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  },
}
import Pace from 'pace-progress' // eslint-disable-line import/first

Pace.once('hide', () => {
  console.log('done!')
  $('body')
    .removeClass('content-loading')
    .addClass('content-loaded')
})
