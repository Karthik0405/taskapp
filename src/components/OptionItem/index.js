import './index.css'

const OptionItem = props => {
  const {eachItem, renderAciveTab, isActive} = props
  const activeTab = () => {
    renderAciveTab(eachItem.displayText)
  }
  return (
    <li>
      {isActive ? (
        <button type="button" className="active-button" onClick={activeTab}>
          {eachItem.displayText}
        </button>
      ) : (
        <button type="button" className="tag-button" onClick={activeTab}>
          {eachItem.displayText}
        </button>
      )}
    </li>
  )
}

export default OptionItem
