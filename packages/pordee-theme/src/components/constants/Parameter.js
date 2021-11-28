import Featured1Src from '../public/images/featured-1.png';
import Featured2Src from '../public/images/featured-2.png';
import Featured3Src from '../public/images/featured-3.png';

import SocialFacebookSrc from '../public/icons/social-facebook.png'
import SocialTwitterSrc from '../public/icons/social-twitter.png'
import SocialInstagramSrc from '../public/icons/social-instagram.png'
import SocialClubhouseSrc from '../public/icons/social-clubhouse.png'

export const Parameter = {
    MainCategoryCount: 5,
}

export const Months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

export const FeaturedCategoriesData = [
    {
        menuIndex: 2,
        image: Featured1Src,
    },
    {
        menuIndex: 3,
        image: Featured2Src,
    },
    {
        menuIndex: 4,
        image: Featured3Src,
    },
]

export const SocialContacts = [
    {
        label: 'Facebook',
        icon: SocialFacebookSrc,
        link: '',
    },
    {
        label: 'Twitter',
        icon: SocialTwitterSrc,
        link: '',
    },
    {
        label: 'Instagram',
        icon: SocialInstagramSrc,
        link: '',
    },
    {
        label: 'Clubhouse',
        icon: SocialClubhouseSrc,
        link: '',
    },
]
