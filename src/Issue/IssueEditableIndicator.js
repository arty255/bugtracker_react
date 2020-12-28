import React from 'react'
import PropTypes from 'prop-types'

function IssueEditableIndicator({editableState}) {
    const classes = []
    if (!editableState) {
        classes.push('notEditable')
    }
    return (
        <span className={classes.join(' ')}>
            {editableState ? 'editable' : 'not editable'}
        </span>)
}

IssueEditableIndicator.propTyoe = {
    issue: PropTypes.bool.isRequired,
}

export default IssueEditableIndicator