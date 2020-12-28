import React from 'react'
import IssueListItem from './IssueListItem'
import PropTypes from 'prop-types'
import './IssueList.css'

function IssueList(props) {
    return (
        <div>

            <div className="issue-container">
                <div className='header'>No</div>
                <div className='header'>Status</div>
                <div className='header'>Name</div>
                <div className='header'>Description</div>
                <div className='header'>Controls</div>
                {
                    props.issues.map((issue, index) => {
                        return <IssueListItem
                            issue={issue} key={issue.uuid}
                            index={index + 1}/>
                    })
                }
            </div>
        </div>
    )
}

IssueList.propTypes = {
    issues: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default IssueList