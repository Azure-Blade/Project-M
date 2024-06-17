import Image from 'next/image';

export default function Logo() {
  // Why we use the image tag https://nextjs.org/docs/pages/api-reference/components/image
  return <Image height={48} width={48} src="/logo.png" alt="Logo" />;
}
