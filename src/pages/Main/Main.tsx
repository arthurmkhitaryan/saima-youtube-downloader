import React from 'react'

// styles
import * as S from './Main.styled';
import { SaimaLogo } from '../../assets';

// hooks
import { useMainPage } from './useMainPage';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  const { 
    url,
    setUrl,
    newLink,
    validLink,
    handleInputLink
  } = useMainPage();

  return (
    <S.MainWrapper>
      <S.LogoWrapper>
        <S.LogoTitle>Created by</S.LogoTitle>
        <SaimaLogo />
      </S.LogoWrapper>
      <S.MainContent>
        <S.Title>Download Youtube and Coursera Videos <span>in Seconds</span></S.Title>
        <S.SubTitle>With just a few clicks, you can easily download videos and enjoy them without internet access or buffering issues.</S.SubTitle>
        <S.FormWrapper>
          <S.Input valid={validLink} type="text" value={url} onChange={(e: any) => setUrl(e.target.value)} placeholder='Video URL' />
          <S.Button onClick={handleInputLink}>Generate Link</S.Button>
          {!validLink && <S.NotValidLink>You can only link to YouTube and Coursera.</S.NotValidLink>}
        </S.FormWrapper>
        {newLink && <S.FormWrapper>
        <S.Input valid={true} type='text' defaultValue={newLink} />
          <S.Button navigate={true}><Link to={newLink}>Go To Link</Link></S.Button>
        </S.FormWrapper>}
      </S.MainContent>
    </S.MainWrapper>
  )
}

export default Main