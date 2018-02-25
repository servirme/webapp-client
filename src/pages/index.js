import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import withRoot from '../withRoot'

const styles = () => ({
  root: {
    textAlign: 'center',
  },
})

class Index extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Typography type="display4" gutterBottom>
          Servir.me is ready to be used
        </Typography>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Index))
