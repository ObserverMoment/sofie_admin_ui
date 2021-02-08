import Image from 'next/image'

const Logo = ({ width = 64, height = 64 }) => (
  <Image src="/spotme_logo.svg" alt="logo" width={width} height={height} />
)

export default Logo
