import React, { useState } from 'react';
import { SuccessIcon } from '../Icon/SuccessIcon';
import { DangerIcon } from '../Icon/DangerIcon';
import { CopyIcon } from '../Icon/CopyIcon';
import '../../styles/UI/Utils/clipboardCopy.css';
import { useTranslation } from 'react-i18next';

export const ClipboardCopy = ({copyText, additionalClass, label, successMessage, errorMessage, timeout = 2000}) => {
    const {t} = useTranslation('messages');

    const [isCopied, setCopied] = useState(false);
    const [error, setError] = useState(false);

    const handleClick = async () => {
        if(isCopied) {
            return;
        }
        setError(null);
        navigator.clipboard.writeText(copyText).then(
          () => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, timeout);
          },
          () => {
            setError(true);
          },
        );
    }

    return (
        <div className={'clipboard-copy' + (additionalClass ? ' '+additionalClass: '')}>
            {
                isCopied && (
                    <div className="i-text clipboard-copy-success">
                        <SuccessIcon />
                        <span>
                            { successMessage ?? t('copied_to_clipboard') }
                        </span>
                    </div>
                )
            }
            {
                error && (
                    <div className="i-text clipboard-copy-error">
                        <DangerIcon />
                        <span>
                            { errorMessage ?? t('error.denied_authorization') }
                        </span>
                    </div>
                )
            }
            {
                !isCopied && !error && (
                    <button className="icon-button copy-button i-text" onClick={handleClick}> 
                        <CopyIcon />
                        <span>
                            { label ?? t('copy') }
                        </span>
                    </button>
                )
            }
        </div>
    )
}