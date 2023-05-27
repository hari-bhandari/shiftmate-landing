import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'ShiftMate',
    description: 'The Essential Shift Management Tool for Small Businesses',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
        <>
          Developed by{' '}
          <Link href="https://twitter.com/Pagebakers">Eelco Wiersma</Link>
        </>
    ),
    links: [
      {
        href: 'mailto:hello@shiftmate.com',
        label: 'Contact',
      },
      {
        href: 'https://facebook.com/shiftmate',
        label: <FaFacebook size="14" />,
      },
      {
        href: 'https://instagram.com/shiftmate',
        label: <FaInstagram size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start Managing Shifts with ShiftMate',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'ShiftMate strictly follows WAI-ARIA standards, ensuring it is accessible for all users.',
      },
      {
        icon: FiCheck,
        title: 'Customizable',
        description:
            'Easily adapt ShiftMate to match your brand aesthetics with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Flexible',
        description:
            'Craft your ShiftMate components to fit your needs and mix them together to create new functionality.',
      },
      {
        icon: FiCheck,
        title: 'Efficient',
        description:
            'ShiftMate is designed to eliminate unnecessary tasks and increase your productivity, allowing you to manage shifts effortlessly.',
      },
    ],
  },
}

export default siteConfig
