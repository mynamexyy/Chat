import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


class Counter extends Component {
    render() {
        const { data } = this.props
        console.log(this.props)
        return (<div className={'main'}>
                    <span className={'value'}>{data.count}</span>
                    <button className={'btn'} onClick={this.props.onIncreaseClick}>增加</button>
                    <button className={'btn'} onClick={this.props.onReduceClick}>减少</button>
                </div>)
    }
}
Counter.propTypes = {
    value: PropTypes.number
}

const increaseAction = { type: 'increase' }
const reduceAction = { type: 'reduce' }

function mapStateToProps(state) {
    return {
        data: state.AddReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onReduceClick: () => dispatch(reduceAction)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)