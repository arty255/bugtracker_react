import React, {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState('')
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddIssue({onCreate}) {
    const input = useInputValue('')

    function onIssueSubmitHandler(event) {
        event.preventDefault();
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form onSubmit={onIssueSubmitHandler}>
            <input {...input.bind}/>
            <button type='submit'>submit</button>
        </form>
    )
}

AddIssue.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddIssue