import { useState, useEffect } from 'react';

export const breakpoint = {
    maxMobile: 449,
    maxTablet: 999,
}

export const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(false);

    const getWidth = () => window.innerWidth;

    const setResponsive = () => {
        const width = getWidth();
        let mobile = false;
        let tablet = false;
        let desktop = false;
        if (width <= breakpoint.maxMobile) {
            mobile = true;
        } else if (width <= breakpoint.maxTablet) {
            tablet = true;
        } else {
            desktop = true;
        }
        setIsMobile(mobile);
        setIsTablet(tablet);
        setIsDesktop(desktop);
        setIsMobileOrTablet(mobile || tablet);
        setIsTabletOrDesktop(tablet || desktop);
    };

    useEffect(() => {
        setResponsive();
        window.addEventListener('resize', setResponsive);
        return () => window.removeEventListener('resize', setResponsive);
    }, []);

    return ({
        isMobile,
        isTablet,
        isDesktop,
        isMobileOrTablet,
        isTabletOrDesktop,
    })
}