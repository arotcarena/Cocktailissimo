import React from 'react';
import { SearchButton } from '../../../../UI/Button/SearchButton';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { InlineSearchTool } from './InlineSearchTool';
import { createPortal } from 'react-dom';


export const InlineSearchToolControl = () => {
    
    const [searchToolIsOpen, openSearchTool, closeSearchTool] = useOpenState();

    return (
            <>
                <SearchButton additionalClass={'header-search-link right-search-link' + (searchToolIsOpen ? ' hidden': '')} onClick={openSearchTool} />
                {
                    searchToolIsOpen && (
                        createPortal(
                            <InlineSearchTool close={closeSearchTool} />,
                            document.body
                        )
                    )
                }
            </>
    )
}

