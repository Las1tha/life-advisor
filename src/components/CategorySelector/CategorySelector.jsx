import './CategorySelector.css';
import { CATEGORIES, CATEGORY_LABEL, CATEGORY_INFO } from '../../data/adviceData.js'

const CategorySelector = () => {
    return (
        <div className='category-selector'>
            <h3 className="category-title">Choose your Category</h3>
            <div className="category-grid">
                {Object.values(CATEGORIES).map((category) => (
                    <button
                    key={category}
                    className={`category-button ${category}`}
                    aria-label={`Select ${CATEGORY_LABEL[category]} category`}
                    >
                        <span className="category-icon">
                            {CATEGORY_INFO[category].icon}
                        </span>
                        <span className="category-label">
                            {CATEGORY_LABEL[category]}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategorySelector;