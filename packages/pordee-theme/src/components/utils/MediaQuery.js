import { breakpoint } from '../hooks/useResponsive'

export const mobileMediaQuery = `@media (max-width: ${breakpoint.maxMobile}px)`
export const tabletMediaQuery = `@media (min-width: ${breakpoint.maxMobile + 1}px) and (max-width: ${breakpoint.maxTablet}px)`
export const desktopMediaQuery = `@media (min-width: ${breakpoint.maxTablet + 1}px)`
export const mobileOrTabletMediaQuery = `@media (max-width: ${breakpoint.maxTablet}px)`
export const tabletOrDesktopMediaQuery = `@media (min-width: ${breakpoint.maxMobile + 1}px)`