import { connect, styled } from "frontity";
import { ScrollUp, FeaturedMedia } from "../components";
import { Font } from "../constants/Font";
import { Tags } from "./Tags";
import { Months } from "../constants/Parameter";
import { Color } from "../constants/Color";
import { Text } from "../constants/Text";
import { useState, useEffect } from 'react';
import { getRelatedPosts } from "../utils/RelatedPost";
import { PostList } from './PostList';
import { useResponsive } from "../hooks/useResponsive";
import { mobileMediaQuery } from "../utils/MediaQuery";
import { IsMobileOrTablet, IsDesktop } from "./Responsive";
import { FacebookShareButton, LineShareButton, TwitterShareButton } from "react-share";
import SocialFacebookSrc from '../public/icons/social-facebook.png'
import SocialTwitterSrc from '../public/icons/social-twitter.png'
import SocialLineSrc from '../public/icons/social-line.png'

const PostComponent = ({ state, actions, libraries }) => {
    const [relatedPosts, setRelatedPosts] = useState(null)
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const author = state.source.author[post.author];
    const date = new Date(post.date);

    const Html2React = libraries.html2react.Component;
    const { isTablet } = useResponsive();
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        if (state && post && data.isReady) {
            const numberOfRelatedPosts = isTablet ? 4 : 3;
            getRelatedPosts(state, actions, post, numberOfRelatedPosts).then(posts => {
                if (posts.length > 0) {
                    setRelatedPosts(posts);
                }
            });
        }
    }, [state, post, data.isReady, isTablet]);

    useEffect(() => {
        if (window) {
            setCurrentUrl(decodeURI(window.location.href));
        }
    }, [])

    const share = (
        <ShareContainer>
            <div>{Text.Share}</div>
            <TwitterShareButton url={currentUrl}>
                <ShareIcon src={SocialTwitterSrc} />
            </TwitterShareButton>
            <FacebookShareButton url={currentUrl}>
                <ShareIcon src={SocialFacebookSrc} />
            </FacebookShareButton>
            <LineShareButton url={currentUrl}>
                <ShareIcon src={SocialLineSrc} />
            </LineShareButton>
        </ShareContainer>
    )

    return data.isReady && (
        <Container>
            <PostContainer>
                <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <TagsContainer><Tags item={post} /></TagsContainer>

                <IsDesktop>
                    <DateAuthor>
                        {date.getDate()} {Months[date.getMonth()]} {date.getFullYear() + 543}&nbsp;&nbsp;|&nbsp;&nbsp;{author.name}
                    </DateAuthor>
                    <FeaturedMedia id={post.featured_media} height="320px" />
                </IsDesktop>
                <IsMobileOrTablet>
                    <FeaturedMedia id={post.featured_media} height="284px" />
                    <DateAuthor>
                        {date.getDate()} {Months[date.getMonth()]} {date.getFullYear() + 543}&nbsp;&nbsp;|&nbsp;&nbsp;{author.name}
                    </DateAuthor>
                </IsMobileOrTablet>

                {data.isAttachment ? (
                    <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
                ) : (
                    <Content>
                        <Html2React html={post.content.rendered} />
                    </Content>
                )}
                {share}
            </PostContainer>
            {relatedPosts && 
                <RelatedContainer>
                    <DividerContainer>
                        <Divider />
                    </DividerContainer>
                    <RelatedText>{Text.PostRelated}</RelatedText>
                    <PostList posts={relatedPosts} />
                </RelatedContainer>
            }
            <ScrollUp />
        </Container>
    );
};

export const Post = connect(PostComponent);

const Container = styled.div`
`;

const DateAuthor = styled.div`
    font-family: ${Font.IBMPlexSans};
    font-size: 14px;
    line-height: 23px;
    margin-bottom: 8px;

    ${mobileMediaQuery} {
        margin-top: 12px;
        margin-bottom: 0;
    }
`;
const PostContainer = styled.div`
    max-width: 720px;
    padding: 56px 24px 8px;
    margin: auto;

    ${mobileMediaQuery} {
        padding: 24px 16px 0;
    }
`;

const TagsContainer = styled.div`
    text-align: center;
    margin-right: -12px;
    margin-top: 16px;
    margin-bottom: 24px;

    ${mobileMediaQuery} {
        margin-top: 12px;
        margin-bottom: 12px;
    }
`;

const Title = styled.h1`
    font-family: ${Font.IBMPlexSans};
    margin: 0;
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 28px;
    line-height: 42px;
    font-weight: 400;
    text-align: center;
    max-width: 526px;
    margin: auto;

    ${mobileMediaQuery} {
        font-weight: 600;
        font-size: 18px;
        line-height: 140%;
    }
`;

const ShareContainer = styled.div`
    display: grid;
    width: 100%;
    margin: 40px auto 64px;
    justify-content: center;
    font-family: ${Font.IBMPlexSans};
    font-size: 16px;
    line-height: 24px;
    grid-auto-flow: column;
    gap: 12px;

    ${mobileMediaQuery} {
        margin: 32px auto;
        font-size: 14px;
        gap: 8px;
    }
`

const ShareIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;

    ${mobileMediaQuery} {
        width: 20px;
        height: 20px;
    }
`

const RelatedContainer = styled.div`
    width: 100%;
    max-width: 1184px;
    margin-bottom: 28px;
`;

const RelatedText = styled.dev`
    font-family: ${Font.IBMPlexSans};
    display: flex;
    font-size: 24px;
    line-height: 110%;
    width: 100%;
    margin: 56px 0 8px;
    font-weight: 600;
    justify-content: center;

    ${mobileMediaQuery} {
        margin: 32px 0 8px;
        font-size: 16px;
    }
`;

const DividerContainer = styled.div`
    padding: 0 24px;
    
    ${mobileMediaQuery} {
        padding: 0 16px;
    }
`;

const Divider = styled.div`
    height: 1px;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
`;

const Content = styled.div`
    word-break: break-word;
    font-size: 16px;
    line-height: 29px;
    color: ${Color.Black75};
    margin-top: 40px;
    
    ${mobileMediaQuery} {
        margin-top: 32px;
        font-size: 16px;
        line-height: 200%;
    }

    * {
        max-width: 100%;
    }

    p {
        font-style: normal;
        font-weight: normal;
    }

    img {
        width: 536px;
        object-fit: cover;
        object-position: center;
    }

    figure {
        margin: 24px auto;
        width: 100%;
        text-align: center;

        figcaption {
            font-size: 0.7em;
        }
    }

    iframe {
        display: block;
        margin: auto;
    }

    blockquote {
        margin: 16px 0;
        background-color: rgba(0, 0, 0, 0.1);
        border-left: 4px solid rgba(12, 17, 43);
        padding: 4px 16px;
    }

    a {
        color: ${Color.PinkDark};

        &:hover {
            text-decoration: underline;
        }
    }

    /* Input fields styles */

    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="tel"],
    input[type="number"],
    input[type="date"],
    textarea,
    select {
        display: block;
        padding: 6px 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 4px;
        outline-color: transparent;
        transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        margin: 8px 0 4px 0;

        &:focus {
            outline-color: #1f38c5;
        }
    }

    input[type="submit"] {
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid #1f38c5;
        padding: 12px 36px;
        font-size: 14px;
        line-height: 1.42857143;
        border-radius: 4px;
        color: #fff;
        background-color: #1f38c5;
    }

    /* WordPress Core Align Classes */

    @media (min-width: 420px) {
        img.aligncenter,
        img.alignleft,
        img.alignright {
            width: auto;
        }

        .aligncenter {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        .alignright {
            float: right;
            margin-left: 24px;
        }

        .alignleft {
            float: left;
            margin-right: 24px;
        }
    }
`;
