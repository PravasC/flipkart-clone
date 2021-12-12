import React from 'react'

function CategoryHome({name , image}) {
    return (
        <div className="MainCatagoryDiv">
            <div className="MainCategoryImg">
                <img src={require(`../../images/Category/${image}`).default} />
            </div>
            <div className="MainCategoryName">
                {name}
            </div>
        </div>
    )
}

export default CategoryHome
