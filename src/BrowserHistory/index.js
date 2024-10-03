import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = props
    // Set the history list in the state
    this.state = {searchInput: '', historyList: initialHistoryList}
  }

  // Handle search input changes
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  // Get filtered history list based on search input
  getFilteredHistoryList = () => {
    const {searchInput, historyList} = this.state

    return historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  // Delete history item by id
  deleteHistory = id => {
    const {historyList} = this.state
    // Filter out the item that is being deleted
    const filteredHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    // Update the state with the new filtered list
    this.setState({historyList: filteredHistoryList})
  }

  render() {
    const {searchInput} = this.state
    const filteredHistoryList = this.getFilteredHistoryList()

    return (
      <div>
        <div className="browser-history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="history-website-logo"
            className="history-website-logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search-img"
              className="search-img"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>

        {/* Check if the filtered list is empty */}
        {filteredHistoryList.length > 0 ? (
          <ul>
            {filteredHistoryList.map(eachItem => (
              <HistoryItem
                eachHistory={eachItem}
                key={eachItem.id}
                deleteHistory={this.deleteHistory} // Pass delete function
              />
            ))}
          </ul>
        ) : (
          <p className="no-history">There is no history to show</p> // Message when no items found
        )}
      </div>
    )
  }
}

export default BrowserHistory
