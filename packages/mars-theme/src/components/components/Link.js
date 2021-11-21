import { connect, useConnect } from "frontity";
import FrontityLink from "@frontity/components/link";

/**
 * The MarsLink component, which is a wrapper on top of the {@link Link}
 * component.
 *
 * @param props - It accepts the same props than the {@link Link} component.
 *
 * @example
 * ```js
 * <MarsLink link="/some-post">
 *   <div>Some Post</div>
 * </MarsLink>
 * ```
 *
 * @returns A {@link Link} component, which returns an HTML anchor element.
 */
const LinkComponent = ({ children, ...props }) => {
  const { state, actions } = useConnect();

  /**
   * A handler that closes the mobile menu when a link is clicked.
   */
  const onClick = (event) => {
    if (props.disabled) {
      return
    }
    event.stopPropagation();
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
