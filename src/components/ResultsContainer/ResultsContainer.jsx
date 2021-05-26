import './ResultsContainer.css'
import NameCard from '../NameCard/NameCard'
const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    })
    return <div className="result-container">{suggestedNameJsx}</div>
}

export default ResultsContainer
