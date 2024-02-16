import React from 'react';
import i18n from '../../entrypoints/i18n';
import { CheckboxFields } from '../Form/CheckboxFields';
import { ExpandMoreIcon } from '../Icon/ExpandMoreIcon';
import { useToggleBoolState } from '../../CustomHook/state/useToggleState';
import { t } from 'i18next';

export const SubCategoryFilter = ({parentCategory, subCategoryIds, onChange}) => {
   
    const [isExpanded, toggleExpand] = useToggleBoolState();

    const labelValues = {};
    parentCategory.subCategories.forEach(subCategory => {
        labelValues[subCategory.name[i18n.language]] = subCategory.id.toString()
    });

    return (
        <div className={'search-filter' + (isExpanded ? ' expanded': '')}>
            <button type="button" className={'search-filter-label' + (isExpanded ? ' expanded': '')} onClick={toggleExpand}>
                <span>{t('category', {ns: 'messages'})}{subCategoryIds.length > 0 && ' (1)'}</span>
                <ExpandMoreIcon />
            </button>
            {
                isExpanded && (
                    <CheckboxFields
                        name="subCategoryIds"
                        labelValues={labelValues}
                        onChange={onChange}
                        selectedValues={subCategoryIds}
                    />
                )
            }
        </div>
    )
}