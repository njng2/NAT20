import React from 'react'
import { Button } from '../ButtonElement'
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
} from './TwitchElements'

const TwitchWidget = ({lightBg, id, topLine, lightText, darkText, headline, description, buttonLabel}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText ={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='/login'>{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <TwitchEmbed
                        channel="moonstar_x"
                        id="moonstar_x"
                        theme="dark"
                        muted
                        onVideoPause={() => console.log(':(')}
                        
                    />
                    {/* <TwitchChat channel="moonstar_x" theme="dark" /> */}
                    {/* <TwitchChat channel="moonstar_x" theme="dark" />
                    <TwitchClip clip="WealthyBumblingKimchiItsBoshyTime" parent={['mycoolsite.com, anotherawesomesite.net']} />
                    <TwitchPlayer video="333014765" /> */}
                    </Column2>
                </InfoRow>
                
            </InfoWrapper>
        </InfoContainer>  
        </>
    )
}

export default TwitchWidget
