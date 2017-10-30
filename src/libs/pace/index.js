import './style.scss'

window.paceOptions = {
  ajax: {
    trackMethods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  },
}
import Pace from 'pace-progress' // eslint-disable-line import/first

// TODO - use admin theme page loader for first loader ?
Pace.once('hide', () => {
  $('body')
    .removeClass('content-loading')
    .addClass('content-loaded')
})
