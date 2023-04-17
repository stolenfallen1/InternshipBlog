import '../styles/Collection.css'
import { Link } from 'react-router-dom'
import { FiArrowRightCircle } from 'react-icons/fi'

const CollectionHeader = () => {
    return (
        <div className="collection-container">
            <div className="collection-header">
                <h1 className="collection-title">COLLECTIONS</h1>
                <Link to="/" className="header-btn"><FiArrowRightCircle/> Home</Link>
            </div>
        </div>
    )
}

export default CollectionHeader