import React from "react";

function IssueDetail() {
    const [issue, setIssue] = React.useState('')

    return (
        <form>
            <div>
                <div>
                    <label htmlFor="issueNumber">Issue number</label>
                    <input id="issueNumber"/>
                </div>
                <div>
                    <label htmlFor="currentState"></label>
                    <input id="currentState"/>
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="issueDescription">Issue description</label>
                    <input id="issueDescription"/>
                </div>
                <div>
                    <label htmlFor="productVersion">Product Version</label>
                    <input id="productVersion"/>
                </div>
                <div>
                    <label htmlFor="reproduceSteps">Reproduce steps</label>
                    <input id="reproduceSteps"/>
                </div>
                <div>
                    <label htmlFor="existedResult">Existed result</label>
                    <input id="existedResult"/>
                </div>
                <div>
                    <label htmlFor="expectedResult">Expected result</label>
                    <input id="expectedResult"/>
                </div>
                <div>
                    <label htmlFor="severity">Severity</label>
                    <input id="severity"/>
                </div>
                <div>
                    <label htmlFor="fixVersion">Expected fix version</label>
                    <input id="fixVersion"/>
                </div>
            </div>
            <button>Save</button>
        </form>
    )
}

export default IssueDetail