import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import Header from './../Header/Header'
import './App.css'

class App extends React.Component {
    state = {
        headerText: 'Name It',
        isExpanded: true,
    }

    handleInputChange = (inputText) => {
        this.setState({ isExpanded: !inputText })
    }

    render() {
        return (
            <div>
                <Header
                    isExpanded={this.state.isExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
            </div>
        )
    }
}

export default App
