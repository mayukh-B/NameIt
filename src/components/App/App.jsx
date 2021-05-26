import React from 'react'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import SearchBox from '../SearchBox/SearchBox'
import Header from './../Header/Header'
import './App.css'

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {
    state = {
        headerText: 'Name It',
        isExpanded: true,
        suggestedNames: [],
    }

    handleInputChange = (inputText) => {
        this.setState({
            isExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        })
    }

    render() {
        return (
            <div>
                <Header
                    isExpanded={this.state.isExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App
