import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import IssueSeverity from "./IssueSeverity";
import IssueState from "./IssueState";
import IssueShortDescription from "./IssueShortDescription";
import './IssueList.css'

function IssueListItem({issue, index}) {
    return (
        <React.Fragment>
            <div className='issueListItem'><strong>{index}</strong></div>
            <IssueState issue={issue}/>
            <div className='issueListItem'><Link to={`/issues/${issue.uuid}`}>{issue.issueNumber}</Link></div>
            <IssueShortDescription issue={issue} shotSymbolsCount={100}/>
            <IssueSeverity issue={issue}/>
        </React.Fragment>
    )
}

IssueListItem.propType = {
    issue: PropTypes.object.isRequired,
    index: PropTypes.number,
}

export default IssueListItem