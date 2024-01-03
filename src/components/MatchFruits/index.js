import './index.css'

const MatchFruits = props => {
  const {each, handleThumbnailImgUrl} = props
  const {id, thumbnailUrl} = each
  const handleUrl = () => {
    handleThumbnailImgUrl(id)
  }
  return (
    <li className="reference-btn-img-card">
      <button
        className="reference-btn"
        onClick={handleUrl}
        type="button"
        aria-label="Save"
      >
        <img className="reference-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchFruits
