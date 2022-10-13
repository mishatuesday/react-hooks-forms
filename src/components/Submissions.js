import React from 'react'
import NameItem from './NameItem'

function Submissions({submissions}) {
        const theSubmissions = submissions.map(submission =>
        <NameItem key={submission} name={submission}/>
        )

        return (
            <div><h1>Submissions:</h1>{theSubmissions}</div>
        )
}

export default Submissions;