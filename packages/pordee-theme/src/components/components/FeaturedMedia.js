import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import { mobileMediaQuery } from "../utils/MediaQuery";

const FeaturedMediaComponent = ({ state, id, height }) => {
    const media = state.source.attachment[id];

    if (!media) return null;

    const srcset =
        Object.values(media.media_details.sizes)
            .map((item) => [item.source_url, item.width])
            .reduce(
                (final, current, index, array) =>
                    final.concat(
                        `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
                    ),
                ""
            ) || null;

    return (
        <Container height={height} isAmp={state.frontity.mode === "amp"}>
            <StyledImage
                alt={media.title.rendered}
                src={media.source_url}
                srcSet={srcset}
                width={media?.media_details?.width}
                height={media?.media_details?.height}
            />
        </Container>
    );
};

export const FeaturedMedia = connect(FeaturedMediaComponent);

const Container = styled.div`
    height: ${props => props.height || '240px'};
    ${({ isAmp }) => isAmp && "position: relative;"};

    ${mobileMediaQuery} {
        height: ${props => props.height || '200px'};
    }
`;

const StyledImage = styled(Image)`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
