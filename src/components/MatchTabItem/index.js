import './index.css'

const MatchTabItem = props => {
  const {each, activeTabIds, handleTabItem} = props
  const {tabId, displayText} = each
  const classNames = activeTabIds && 'active-tab-class-name'
  const tabBtn = () => {
    handleTabItem(tabId)
  }
  return (
    <li className="item-card">
      <button
        onClick={tabBtn}
        className={`item-name ${classNames}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default MatchTabItem
