import './index.css'

const HistoryItem = props => {
  const {eachHistory, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachHistory

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <p className="history-time">{timeAccessed}</p>
      <div className="history-item-details">
        <div className="history-details">
          <img src={logoUrl} alt={`${title} logo`} className="google-img" />
          <p className="history-name">{title}</p>
          <p className="history-site">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="delete-container"
          onClick={onDeleteHistory}
          aria-label="Delete history item"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
