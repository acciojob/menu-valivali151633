import React from "react";


const Filters = ({ categories, selectedCategory, setSelectedCategory }) => {

    return <div className="categories">
        {
            categories.map(category => {
                    
                return (
                    <div className="category">
                        <input
                            id={category}
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) => (setSelectedCategory(e.target.value))}
                        />
                        <label
                            htmlFor={category}>
                            {category}
                        </label>

                    </div>
                 )
            })
       }
</div>
}


export default Filters;