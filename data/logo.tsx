import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 287 317"
      {...props}
    >
      <path
          fill='#7367F0'
          d='M138.37 254.52c8.73 8.6 16 14.74 28.37 18.29 16.65-4.93 26.05-16 28.2-18.17l.12-.12c-8.49.5-10-3.8-22.71-5.27-6-.69-4.26-1.81-5.64-67.31-1.38 65.61.37 66.62-5.64 67.31-12.37 1.42-14.42 5.76-22.72 5.27h.02z'
      ></path>
      <path
          fill='#7367F0'
          d='M201.38 272.7l52.7-30.43a62.107 62.107 0 00-58.37 16.5 61.709 61.709 0 01-24.66 15.14 60.91 60.91 0 0030.33-1.21z'
      ></path>
      <path
          fill='#7367F0'
          d='M171.05 273.91a61.709 61.709 0 0024.66-15.14 63.027 63.027 0 019.19-7.58 19.653 19.653 0 01-9.83 3.32c-2.25 2.28-11.62 13.35-28.32 18.29-12.36-3.55-19.64-9.69-28.37-18.29a19.554 19.554 0 01-9.82-3.32 62.417 62.417 0 019.18 7.58 62.076 62.076 0 0059.87 16.12l3.79-2.19a60.908 60.908 0 01-30.35 1.21z'
      ></path>
      <path
          fill='#7367F0'
          d='M137.72 258.77a62.1 62.1 0 00-58.37-16.5l72.71 42a29.366 29.366 0 0029.32 0l16.21-9.36a62.083 62.083 0 01-59.87-16.14z'
      ></path>
      <path
          fill='#7367F0'
          d='M147.51 121.74c12.61-3.25 17.7-9.76 23.52-15.26-15.18 1.92-19.34-5.29-31.81-7.54a45.5 45.5 0 00-37.11 9.86l21.3 12.3a42.663 42.663 0 0024.1.64z'
      ></path>
      <path
          fill='#7367F0'
          d='M127.05 123.2a44.997 44.997 0 0043.43-11.7 44.846 44.846 0 0111.15-8.16 34.293 34.293 0 01-10.63 3.14c-5.82 5.5-10.91 12-23.52 15.26a42.663 42.663 0 01-24.1-.64l7.3 4.22-3.63-2.12z'
      ></path>
      <path
          fill='#7367F0'
          d='M127.05 123.2l39.67 22.91 64.6-37.3a45.07 45.07 0 00-60.84 2.69 44.997 44.997 0 01-43.43 11.7z'
      ></path>
      <path
          fill={'#574c42'}
          d='M149.61 37.25a34.211 34.211 0 0134.21 0l78 45a9.773 9.773 0 013.581 13.353 9.773 9.773 0 01-3.581 3.577l-88.16 50.9 14.79 8.54a4.86 4.86 0 004.89 0l81-46.75a24.435 24.435 0 0012.22-21.16 24.43 24.43 0 00-12.22-21.16l-92.96-53.62a29.31 29.31 0 00-29.32 0l-92.9 53.63a24.44 24.44 0 000 42.32l202.61 117a9.774 9.774 0 014.892 8.465 9.767 9.767 0 01-4.892 8.465l-78 45a34.174 34.174 0 01-34.21 0l-78-45a9.778 9.778 0 01-3.574-13.351 9.778 9.778 0 013.574-3.579L159.82 178 145 169.42a4.86 4.86 0 00-4.89 0l-81 46.75a24.435 24.435 0 00-12.22 21.16 24.434 24.434 0 0012.22 21.16L152 312.12a29.314 29.314 0 0029.32 0l92.89-53.63a24.435 24.435 0 0012.22-21.16 24.435 24.435 0 00-12.22-21.16l-202.62-117a9.78 9.78 0 010-16.93l78.02-44.99z'
      ></path>
    </chakra.svg>
  )
}
