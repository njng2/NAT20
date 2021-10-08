import React, {useState} from 'react'
import Video from '../../media/video.mp4'
import {Button} from '../ButtonElement'
import {
    BannerContainer,
    BannerBg,
    VideoBg,
    BannerContent,
    BannerH1, 
    BannerP,
    BannerBtnWrapper,
    ArrowForward,
    ArrowRight
} from './BannerElements';

const BannerSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <BannerContainer>
            <BannerBg>
                <VideoBg autoPlay loop muted src={Video} type='video.mp4' />
            </BannerBg>
            <BannerContent>
                <BannerH1>Welcome Adventurers!</BannerH1>
                <BannerP>
                    Creating your hero has never been easy before! Start building today!
                </BannerP>
                <BannerBtnWrapper>
                    <Button to='/signup' onMouseEnter={onHover} onMouseLeave = {onHover}
                    primary='true'
                    dark='true'>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </BannerBtnWrapper>
            </BannerContent>
        </BannerContainer>
    )
}

export default BannerSection
