import React from 'react'
import { Button } from '../ButtonElement'
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'
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
} from './InfoElements'

const InfoSection = ({lightBg, id, topLine, lightText, darkText, headline, description, buttonLabel}) => {
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
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        // The preferred screen name goes next: 
                        screenName="Wizards_DnD"
                        // Style options goes here:
                        options={{ height: "600px" }}
                    />
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>  
        </>
    )
}

export default InfoSection
