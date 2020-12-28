import React, {useEffect} from 'react'
import Context from "../context";
import Loader from "../Issue/Loader";
import IssueList from "../Issue/IssueList";


function Issues() {
    const [issues, setIssues] = React.useState([])
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/bugtracker_war_exploded/api/v0.1/issues')
            .then(response => response.json())
            .then(issues => {
                setTimeout(() => {
                    setIssues(issues)
                    setLoading(false)
                }, 500)
            })
    }, [])

    function removeIssue(uuid) {
        setIssues(issues.filter(issue => issue.uuid !== uuid))
    }

    return (
        <Context.Provider value={{removeIssue}}>
            <div className='wrapper'>
                {loading && <Loader/>}
                {issues.length ?
                    <IssueList issues={issues}/>
                    :
                    loading ? null : 'no data'}
            </div>
        </Context.Provider>
    )
}

export default Issues