import {
  AiOutlineContacts,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { ImBlog } from 'react-icons/im'

const navBarItems = [
  {
    isExternalLink: false,
    text: 'Home',
    to: '/',
    icon: <AiOutlineHome className="navbar-icon" />
  },
  {
    isExternalLink: false,
    text: 'About',
    to: '/about',
    icon: <AiOutlineUser className="navbar-icon" />
  },
  {
    isExternalLink: false,
    text: 'Projects',
    to: '/project',
    icon: <AiOutlineFundProjectionScreen className="navbar-icon" />
  },
  {
    isExternalLink: false,
    text: 'Resume',
    to: '/resume',
    icon: <CgFileDocument className="navbar-icon" />
  },
  {
    isExternalLink: true,
    text: 'Blogs',
    to: 'https://soumyajitblogs.vercel.app/',
    icon: <ImBlog className="navbar-icon" />,
    external: true
  },
  {
    isExternalLink: false,
    text: 'Contact',
    to: '/contact',
    icon: <AiOutlineContacts className="navbar-icon" />
  }
]

export default navBarItems
