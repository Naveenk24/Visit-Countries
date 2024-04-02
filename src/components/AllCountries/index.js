import './index.css'

export default function AllCountries(props) {
  const {countriesDetails, getVisitedCountry} = props
  const {id, name, isVisited} = countriesDetails

  const onClickTheVisitButton = () => {
    getVisitedCountry(id)
  }

  return (
    <li className="all-countries-items">
      <p>{name}</p>
      {isVisited ? (
        <p className="visited-element">Visited</p>
      ) : (
        <button
          type="button"
          onClick={onClickTheVisitButton}
          className="all-countries-button"
        >
          Visit
        </button>
      )}
    </li>
  )
}
