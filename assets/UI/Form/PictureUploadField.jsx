import React, {useCallback, useEffect, useState} from 'react'
import { PlusIcon } from '../Icon/Quantity/PlusIcon';
import { TrashButton } from '../Button/TrashButton';
import resizeImage from 'smart-img-resize';
import { Loader } from '../Icon/Loader';
import { useDropzone } from 'react-dropzone';
import { useOpenState } from '../../CustomHook/state/useOpenState';
import { EditIcon } from '../Icon/EditIcon';
import { useTranslation } from 'react-i18next';


/**
 * 
 * @param {array} errors 
 * @returns 
 */
export const PictureUploadField = ({children, name, errors, setErrors, resizeWidth = 500, resizeHeight = 500, defaultBase64img = '', onChange = null}) => {
  const {t} = useTranslation('messages');

  useEffect(() => {
      setSelectedImg(defaultBase64img);
      setHiddenImg(defaultBase64img);
  }, [defaultBase64img]);

  const [selectedImg, setSelectedImg] = useState(null);
  const [hiddenImg, setHiddenImg] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleDelete = () => {
    setSelectedImg(null);
    setHiddenImg('');
    if(onChange) {
      onChange('');
    }
  };

  const onDrop = useCallback(acceptedFiles => {
    const img = acceptedFiles[0];
    
    //validation
    setErrors([]);
    if(!img) {
      return;
    }
    if(!['image/jpg', 'image/jpeg', 'image/png'].includes(img.type)) {
      setErrors([t('assert.file.format', {ns: 'constraints', accepted_formats: 'jpg, jpeg, png'})]);
      return;
    }
    //resize
    setLoading(true);
    resizeImage(img, {
        outputFormat: 'jpeg',
        targetWidth: resizeWidth,
        targetHeight: resizeHeight,
        crop: true
    }, (error, b64img) => {
        if (error) {
            setErrors(errors => [...errors, t('error.temporary_failure')]);
            return;
        }
        // on affiche l'image redimensionnée
        setSelectedImg(b64img);
        setLoading(false);
        
        //2 façons d'utiliser l'image
        //Pour submit classique : on met l'image redimensionnée dans un input hidden
        setHiddenImg(b64img);
        //Pour submit javascript
        if(onChange) {
          onChange(b64img);
        }
    });
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop, multiple: false});


  const [mouseIsOver, setMouseOver, setMouseLeave] = useOpenState(false);

  return (
    <div className="form-group">
      <label className="form-upload-label">{children}</label>
      <div className="form-upload-wrapper" {...getRootProps()} onMouseOver={setMouseOver} onMouseLeave={setMouseLeave}>
        <input disabled={isLoading} {...getInputProps()} />
        {
          selectedImg && <img className={'form-upload-img' + (isLoading || mouseIsOver ? ' light': '')} src={selectedImg} alt={t('selected_image')} />
        }
        {
          isLoading && <Loader />
        }
        {
          !isLoading && !selectedImg && <PlusIcon />
        }
        {
          mouseIsOver && selectedImg && !isLoading && <EditIcon />
        }
      </div>
      {
        errors.length > 0 && (
          <div className="admin-form-error">
              <ul>
                  {
                    errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))
                  }
              </ul>
          </div>
        )
      }
      {
        selectedImg && <TrashButton additionalClass="form-upload-trash-button" onClick={handleDelete} />
      }

      <input type="hidden" name={name} value={hiddenImg ?? ''} />
    </div>
  )
}