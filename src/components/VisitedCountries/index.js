import './index.css'

export default function VisitedCountries(props) {
  const {visitedCountriesDetails, removeTheVisitedCountries} = props

  const {id, name, imageUrl} = visitedCountriesDetails

  const onClickRemoveButton = () => {
    removeTheVisitedCountries(id)
  }

  return (
    <li className="visited-countries-list-item">
      <div className="visited-countries-container">
        <img src={imageUrl} alt="thumbnail" />
        <div className="visited-countries-card">
          <p className="visit-countries-name">{name}</p>
          <button
            type="button"
            className="remove-button"
            onClick={onClickRemoveButton}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
