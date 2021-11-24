import { connect, useConnect } from "frontity";
import FrontityLink from "@frontity/components/link";

const LinkComponent = ({ children, ...props }) => {
    const { state, actions } = useConnect();

    const onClick = (event) => {
        if (props.disabled) {
            return
        }
        if (state.theme.isMobileMenuOpen) {
            actions.theme.closeMobileMenu();
        }
    };

    return (
        !props.disabled ? <FrontityLink {...props} onClick={onClick}>
            {children}
        </FrontityLink> : children
    );
};

export const Link = connect(LinkComponent, { injectProps: false });
