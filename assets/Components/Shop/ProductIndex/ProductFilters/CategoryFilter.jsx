import React from 'react';
import categories from '../../../../Config/categories.json';
import { useToggleBoolState } from '../../../../CustomHook/state/useToggleState';
import { CheckboxFields } from '../../../../UI/Form/CheckboxFields';
import { ExpandMoreIcon } from '../../../../UI/Icon/ExpandMoreIcon';
import { SiteConfig } from '../../../../Config/SiteConfig';
import { useTranslation } from 'react-i18next';

export const CategoryFilter = ({categoryIds, onChange}) => {
    const {t, i18n} = useTranslation('messages');
   
    const [isExpanded, toggleExpand] = useToggleBoolState(false);

    const labelValues = {};

    categories.forEach(category => {
        if(category.name.en !== SiteConfig.RECIPE_LABEL_EN) {
            labelValues[category.name[i18n.language]] = category.id.toString();
        }
    });

    return (
        <div className={'search-filter' + (isExpanded ? ' expanded': '')}>
            <button type="button" className={'search-filter-label' + (isExpanded ? ' expanded': '')} onClick={toggleExpand}>
                <span>{t('category')}{categoryIds.length > 0 && ' (1)'}</span>
                <ExpandMoreIcon />
            </button>
            {
                isExpanded && (
                    <CheckboxFields
                        name="categoryIds"
                        labelValues={labelValues}
                        onChange={onChange}
                        selectedValues={categoryIds}
                    />
                )
            }
        </div>
    )
}