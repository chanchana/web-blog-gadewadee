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
        link: 'https://www.facebook.com/Gademaru/?show_switched_toast=1&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0',
    },
    {
        label: 'Twitter',
        icon: SocialTwitterSrc,
        link: 'https://twitter.com/gadewadee_maru',
    },
    {
        label: 'Instagram',
        icon: SocialInstagramSrc,
        link: 'https://www.instagram.com/gadewadee_marumura',
    },
    {
        label: 'Clubhouse',
        icon: SocialClubhouseSrc,
        link: 'https://www.clubhouse.com/@kritinee',
    },
]
