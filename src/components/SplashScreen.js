import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { applySpec, path } from 'ramda'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

import withRoot from '../withRoot'
import loadEstabilishmentData from '../store/actions/control'

const styles = () => ({
  root: {
    textAlign: 'center',
  },
})

class SplashScreen extends Component {
  loadEstabilishment = () => {
    const { loadEstabilishment, domain } = this.props
    loadEstabilishment(domain)
  }

  componentDidMount() {
    this.loadEstabilishment()
  }

  render() {
    const { isLoading } = this.props

    if (isLoading) {
      const { classes } = this.props

      return (
        <Fragment>
          <Typography variant="display4" gutterBottom className={classes.root}>
            Servir.me is loading
          </Typography>
        </Fragment>
      )
    }

    return this.props.children
  }
}

SplashScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  domain: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadEstabilishment: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

const mapStateToProps = applySpec({
  isLoading: path(['control', 'loading']),
})

const mapDispatchToProps = applySpec({
  loadEstabilishment: loadEstabilishmentData,
})

export default withRoot(withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)))
