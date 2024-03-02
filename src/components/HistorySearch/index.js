import './index.css'

const HistoryItem = props => {
  const {initialHistoryList, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = initialHistoryList
  const onDelete = () => {
    // console.log('Clicked delete', id)
    onDeleteHistory(id)
  }
  return (
    <li className="list-items">
      <div className="history-content">
        <p className="time-zone">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="media-logo" />
        <p className="website-title">{title}</p>
        <p className="url-result">{domainUrl}</p>
      </div>
      <button type="button" className="button-container" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
          onClick={onDelete}
        />
      </button>
    </li>
  )
}

export default HistoryItem
