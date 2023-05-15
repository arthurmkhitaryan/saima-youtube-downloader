import React, { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getLinkById } from '../../lib/controller';
import { useDownloadLink } from './useDownloadLink';

//components
import { Spinner } from '../../components';

//styles
import * as S from './DownloadLink.styled';


const DownloadLink: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { 
    handleDownloadYoutube,
    handleDownloadCoursera
  } = useDownloadLink(id);

  const handleDownload = useCallback(async (url: string) => {
    try {
      if (url) {
        if (url.includes('youtube')) {
          handleDownloadYoutube(url)
        } else if (url.includes('coursera')) {
          handleDownloadCoursera(url)
        }
      }
    } catch (error) {
      navigate('/expired')
      console.error('Error downloading video:', error);
    }
  }, [handleDownloadCoursera, handleDownloadYoutube, navigate]);

  const handleGetLinkById = useCallback(async () => {
    if (id) {
      const link = await getLinkById(id);
      if (link?.initialLink) {
        handleDownload(link.initialLink)
      }
    }
  }, [id, handleDownload])
  
  useEffect(() => {
    handleGetLinkById();
  }, [handleGetLinkById])


  return (
    <S.DownloadLinkWrapper>
      <h1>Please Wait...</h1>
      <Spinner />
    </S.DownloadLinkWrapper>
  )
}

export default DownloadLink;