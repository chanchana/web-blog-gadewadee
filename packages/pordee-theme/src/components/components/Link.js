import { connect, useConnect } from "frontity";
import FrontityLink from "@frontity/components/link";

const LinkComponent = ({ children, ...props }) => {
    const { state, actions } = useConnect();

    const onClick = () => {
        if (props.disabled) {
            return
        }
    };

    return (
        !props.disabled ? <FrontityLink {...props} link={props.link || '/'} onClick={onClick}>
            {children}
        </FrontityLink> : children
    );
};

export const Link = connect(LinkComponent, { injectProps: false });
