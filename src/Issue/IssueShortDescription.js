import React from 'react';
import PropTypes from 'prop-types'
import './IssueShortDescription.css'

function IssueShortDescription({issue, shotSymbolsCount = 100}) {
    let [shortDescription, setShortDescription] = React.useState(true)
    const arrowClasses = ['descriptionControls']


    function changeView() {
        setShortDescription(
            shortDescription = !shortDescription
        )
    }

    function findStringEndSymbol() {
        const deviation = shotSymbolsCount / 10;
        let stringSize = issue.description.size;
        if (stringSize < shotSymbolsCount) {
            return stringSize;
        }
        let dotIndex = issue.description.indexOf('.', shotSymbolsCount - deviation);
        if (dotIndex !== -1) {
            return dotIndex + 1;
        }
        let spaceIndex = issue.description.indexOf(' ', shotSymbolsCount - deviation);
        if (spaceIndex !== -1) {
            return spaceIndex;
        }
        return shotSymbolsCount;
    }

    if (shortDescription) {
        arrowClasses.push('plus')
    } else {
        arrowClasses.push('minus')
    }

    return (
        <div className='issueDescription'>
            {shortDescription ?
                issue.description.substring(0, findStringEndSymbol())
                :
                issue.description}
            <div className="descriptionControlsContainer">
                <div onClick={changeView} className={arrowClasses.join(' ')}/>
            </div>
        </div>
    )
}

IssueShortDescription.propTypes = {
    issue: PropTypes.object.isRequired,
    description: PropTypes.string,
    shotSymbolsCount: PropTypes.number.isRequired
}

export default IssueShortDescription