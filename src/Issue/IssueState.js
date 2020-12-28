import React from 'react'
import PropTypes from 'prop-types'
import './IssueState.css'

function IssueState({issue}) {
    const stateClasses = ["icon"];
    if (issue.currentState !== 'FIXED') {
        stateClasses.push('red')
    } else if (issue.currentState === 'FIXED') {
        stateClasses.push('green')
    }

    return (
        <div className="stateWrapper">
            <div className={stateClasses.join(' ')}/>
            <div>{issue.currentState}</div>
        </div>
    )
}

IssueState.propTypes = {
    issue: PropTypes.object.isRequired,
    currentState: PropTypes.string
}

export default IssueState