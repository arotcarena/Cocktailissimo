import React from 'react';

export const ChartDownIcon = ({additionalClass, ...props}) => {
    return (
        <svg className={'icon i-chart-down' + (additionalClass ? ' ' + additionalClass: '')} {...props} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g id="_03_shrinking_graph" data-name="03 shrinking graph">
                <path fill="currentColor" d="m29 15.93v7.07h-7.2v-1.93h3.93l-7.28-7.16-5.92 5.81-9.53-9.35 1.39-1.37 8.14 8 5.92-5.81 8.55 8.42v-3.68z">
                </path>
            </g>
        </svg>
    )
}