import React from 'react';

//styles 
import * as S from './ExpiredPage.styled';
import { ExpiredLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';

const ExpiredPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <S.ExpiredPageWrapper>
            <S.ExpiredContent>
                <ExpiredLogo />
                <S.ExpiredTitle>Failed</S.ExpiredTitle>
                <S.ExpiredMessage>We're sorry, but the download link you're trying to access has either expired or does not exist.</S.ExpiredMessage>
                <S.ExpiredButton onClick={() => navigate('/')}>Back Homepage</S.ExpiredButton>
            </S.ExpiredContent>
        </S.ExpiredPageWrapper>
    );
}

export default ExpiredPage;