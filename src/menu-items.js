import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FormatUnderlinedOutlinedIcon from '@material-ui/icons/FormatUnderlinedOutlined';
import GamesOutlinedIcon from '@material-ui/icons/GamesOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import CallToActionOutlinedIcon from '@material-ui/icons/CallToActionOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import FormatColorTextOutlinedIcon from '@material-ui/icons/FormatColorTextOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import EditAttributesOutlinedIcon from '@material-ui/icons/EditAttributesOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TranslateIcon from '@material-ui/icons/Translate';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';

const icons = {
    NavigationOutlinedIcon: NavigationOutlinedIcon,
    HomeOutlinedIcon: HomeOutlinedIcon,
    FormatUnderlinedOutlinedIcon: FormatUnderlinedOutlinedIcon,
    GamesOutlinedIcon: GamesOutlinedIcon,
    LoyaltyOutlinedIcon: LoyaltyOutlinedIcon,
    ForumOutlinedIcon: ForumOutlinedIcon,
    DescriptionOutlinedIcon: DescriptionOutlinedIcon,
    GridOnOutlinedIcon: GridOnOutlinedIcon,
    TableChartOutlinedIcon: TableChartOutlinedIcon,
    AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
    CallToActionOutlinedIcon: CallToActionOutlinedIcon,
    NotificationsNoneOutlinedIcon: NotificationsNoneOutlinedIcon,
    AppsOutlinedIcon: AppsOutlinedIcon,
    SmsOutlinedIcon: SmsOutlinedIcon,
    FilterVintageOutlinedIcon: FilterVintageOutlinedIcon,
    FormatColorTextOutlinedIcon: FormatColorTextOutlinedIcon,
    ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
    LayersOutlinedIcon: LayersOutlinedIcon,
    BlockOutlinedIcon: BlockOutlinedIcon,
    ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
    FiberManualRecordOutlinedIcon: FiberManualRecordOutlinedIcon,
    EditAttributesOutlinedIcon: EditAttributesOutlinedIcon,
    FaceOutlinedIcon: FaceOutlinedIcon,
    RadioButtonUncheckedOutlinedIcon: RadioButtonUncheckedOutlinedIcon,
    QuestionAnswerOutlinedIcon: QuestionAnswerOutlinedIcon,
    AccountCircleOutlinedIcon: AccountCircleOutlinedIcon,
    ShoppingCartOutlinedIcon: ShoppingCartOutlinedIcon,
    MailOutlineRoundedIcon: MailOutlineRoundedIcon,
    SpeakerNotesOutlinedIcon: SpeakerNotesOutlinedIcon,
    CardGiftcardOutlinedIcon: CardGiftcardOutlinedIcon,
    ErrorOutlineRoundedIcon: ErrorOutlineRoundedIcon,
    HourglassEmptyRoundedIcon: HourglassEmptyRoundedIcon,
    MonetizationOnOutlinedIcon: MonetizationOnOutlinedIcon,
    AssignmentIndOutlinedIcon: AssignmentIndOutlinedIcon,
    SecurityOutlinedIcon: SecurityOutlinedIcon,
    HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
    TranslateIcon: TranslateIcon,
    FormatListNumberedRtlIcon: FormatListNumberedRtlIcon,
};

export default {
    items: [
        {
            id: 'navigation',
            title: 'Sinapsis',
            caption: 'Dashboard & Widgets',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    icon: icons['HomeOutlinedIcon'],
                    url: '/dashboard/default',
                }
            ],
        },
        {
            id: 'application',
            title: 'Application',
            caption: 'Prebuild Application',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'user',
                    title: 'User',
                    type: 'collapse',
                    icon: icons['AccountCircleOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                    children: [
                        {
                            id: 'account',
                            title: 'Account',
                            type: 'item',
                            url: '/user/account',
                        },
                        {
                            id: 'profile',
                            title: 'Profile',
                            type: 'item',
                            url: '/user/profile',
                        },
                        {
                            id: 'socialprofile',
                            title: 'Socialprofile',
                            type: 'item',
                            url: '/user/socialprofile',
                        },
                        {
                            id: 'card',
                            title: 'Card',
                            type: 'item',
                            url: '/user/card',
                        },
                        {
                            id: 'list',
                            title: 'List',
                            type: 'item',
                            url: '/user/list',
                        },
                    ],
                }
            ],
        },
        {
            id: 'ui-forms',
            title: 'Forms & Tables',
            type: 'group',
            icon: icons['ForumOutlinedIcon'],
            children: [
                {
                    id: 'tables',
                    title: 'Table',
                    type: 'collapse',
                    icon: icons['TableChartOutlinedIcon'],
                    children: [
                        {
                            id: 'table-basic',
                            title: 'Basic Table',
                            type: 'item',
                            url: '/tables/table-basic',
                        }
                    ],
                }
            ],
        },
        {
            id: 'pages',
            title: 'Pages',
            caption: 'Prebuild Pages',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'multi-language',
                    title: 'Multi-Language',
                    type: 'item',
                    url: '/multi-language',
                    icon: icons['TranslateIcon'],
                },
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: icons['SecurityOutlinedIcon'],
                    children: [
                        {
                            id: 'login-1',
                            title: 'Login',
                            type: 'item',
                            url: '/application/login',
                            target: true,
                        }
                    ],
                },
                {
                    id: 'documentation',
                    title: 'Documentation',
                    type: 'item',
                    url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
                    icon: icons['HelpOutlineOutlinedIcon'],
                    chip: {
                        label: 'Help?',
                        color: 'primary',
                    },
                    external: true,
                    target: true,
                },
            ],
        },
        {
            id: 'utils',
            title: 'Utilities',
            type: 'group',
            icon: icons['AccountTreeOutlinedIcon'],
            children: [
                {
                    id: 'util-icons',
                    title: 'Icons',
                    type: 'item',
                    url: '/utils/util-icons',
                    icon: icons['AppsOutlinedIcon'],
                },
                {
                    id: 'util-typography',
                    title: 'Typography',
                    type: 'item',
                    url: '/utils/util-typography',
                    icon: icons['FormatColorTextOutlinedIcon'],
                },
            ],
        },
        {
            id: 'support',
            title: 'Sidebar Features',
            type: 'group',
            icon: icons['ContactSupportOutlinedIcon'],
            children: [
                {
                    id: 'menu-level',
                    title: 'Level 0',
                    type: 'collapse',
                    icon: icons['LayersOutlinedIcon'],
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Level 1',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Level 2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Level 3',
                                            type: 'collapse',
                                            children: [
                                                {
                                                    id: 'menu-level-4.1',
                                                    title: 'Level 4',
                                                    type: 'collapse',
                                                    children: [
                                                        {
                                                            id: 'menu-level-5.1',
                                                            title: 'Level 5',
                                                            type: 'collapse',
                                                            children: [
                                                                {
                                                                    id: 'menu-level-6.1',
                                                                    title: 'Level 6',
                                                                    type: 'collapse',
                                                                    children: [
                                                                        {
                                                                            id: 'menu-level-7.1',
                                                                            title: 'Level 7',
                                                                            type: 'collapse',
                                                                            children: [
                                                                                {
                                                                                    id: 'menu-level-8.1',
                                                                                    title: 'Level 8',
                                                                                    type: 'item',
                                                                                    url: '#',
                                                                                },
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'menu-level-subtitle',
                    title: 'Caption Levels',
                    caption: 'I am Subtitle',
                    type: 'collapse',
                    icon: icons['LayersOutlinedIcon'],
                    children: [
                        {
                            id: 'sub-menu-level-1.1',
                            title: 'Level 1',
                            caption: 'I am level 1 subtitle',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'sub-menu-level-2.1',
                                    title: 'Level 2',
                                    caption: 'I am level 2 subtitle',
                                    type: 'item',
                                    url: '#',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'disabled-menu',
                    title: 'Disabled Menu',
                    type: 'item',
                    url: '#',
                    icon: icons['BlockOutlinedIcon'],
                    disabled: true,
                },
                {
                    id: 'oval-chip-menu',
                    title: 'Oval Chip',
                    type: 'item',
                    url: '#',
                    icon: icons['FiberManualRecordOutlinedIcon'],
                    chip: {
                        label: '9',
                        color: 'primary',
                    },
                },
                {
                    id: 'rounded-chip-menu',
                    title: 'Rounded Chip',
                    type: 'item',
                    url: '#',
                    icon: icons['EditAttributesOutlinedIcon'],
                    chip: {
                        label: 'Rounded',
                        color: 'secondary',
                    },
                },
                {
                    id: 'avatar-chip-menu',
                    title: 'Avatar Chip',
                    type: 'item',
                    url: '#',
                    icon: icons['FaceOutlinedIcon'],
                    chip: {
                        label: 'Coded',
                        color: 'primary',
                        avatar: 'C',
                        size: 'small',
                    },
                },
                {
                    id: 'outline-chip-menu',
                    title: 'Outline Chip',
                    type: 'item',
                    url: '#',
                    icon: icons['RadioButtonUncheckedOutlinedIcon'],
                    chip: {
                        label: 'Outline',
                        variant: 'outlined',
                        color: 'primary',
                    },
                },
            ],
        },
    ],
};
