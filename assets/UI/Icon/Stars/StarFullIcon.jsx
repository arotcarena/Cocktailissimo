import React from 'react';

export const StarFullIcon = ({additionalClass, ...props}) => {
    return (
        <svg className={'icon i-star' + (additionalClass ? ' ' + additionalClass: '')} {...props} enableBackground="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g id="star">
                <path fill="currentColor" d="m29.911 13.75-6.229 6.072 1.471 8.576c.064.375-.09.754-.398.978-.174.127-.381.191-.588.191-.159 0-.319-.038-.465-.115l-7.702-4.049-7.701 4.048c-.336.178-.745.149-1.053-.076-.308-.224-.462-.603-.398-.978l1.471-8.576-6.23-6.071c-.272-.266-.371-.664-.253-1.025s.431-.626.808-.681l8.609-1.25 3.85-7.802c.337-.683 1.457-.683 1.794 0l3.85 7.802 8.609 1.25c.377.055.69.319.808.681s.019.758-.253 1.025z">
                </path>
            </g>
        </svg>
    )
}



