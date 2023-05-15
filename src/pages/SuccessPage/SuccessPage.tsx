import React, { useEffect } from 'react';

//hooks
import { useLocation, useNavigate } from 'react-router-dom';

//styles 
import * as S from './SuccessPage.styled';
import { SuccessLogo } from '../../assets';

const SuccessPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const downloadFile = (fileUrl: string, id: string) => {
        var tempLink = document.createElement('a');
        console.log({ fileUrl })
        tempLink.href = fileUrl;
        tempLink.setAttribute('download', `video-${id}`);
        tempLink.click();
    }

    useEffect(() => {
        if (location.state) {
            const { id, url } = location.state;
            if (id && url) {
                downloadFile(url, id);
                window.history.replaceState({}, document.title)
            }
        } else {
          navigate('/')
        }
    }, [location, navigate])

    return (
        <S.SuccessPageWrapper>
            <S.SuccessContent>
                <SuccessLogo />
                <S.SuccessTitle>Success</S.SuccessTitle>
                <S.SuccessMessage>Congratulations! Your video has been successfully downloaded and saved to your device.</S.SuccessMessage>
                <S.SuccessButton onClick={() => navigate('/')}>Back Homepage</S.SuccessButton>
            </S.SuccessContent>
        </S.SuccessPageWrapper>
    );
}

export default SuccessPage;