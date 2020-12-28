import React from 'react'
import PropTypes from 'prop-types'
import './IssueSeverity.css'

function IssueSeverity({issue}) {
    const iconClasses = ["icon"]
    if (issue.severity === 'BLOCKER') {
        iconClasses.push("black")
    } else if (issue.severity === 'CRITICAL') {
        iconClasses.push("red")
    } else if (issue.severity === 'MEDIUM') {
        iconClasses.push("orange")
    } else if (issue.severity === 'MINOR') {
        iconClasses.push("yellow")
    } else if (issue.severity === 'TRIVIAL') {
        iconClasses.push("green")
    } else if (issue.severity === 'UNRATED') {
        iconClasses.push("gray")
    }

    return (
        <div className="severityWrapper">
            <div className={iconClasses.join('')}/>
            <div>{issue.severity}</div>
        </div>
    )
}

IssueSeverity.propTypes = {
    issue: PropTypes.object.isRequired,
    severity: PropTypes.string
}

export default IssueSeverity