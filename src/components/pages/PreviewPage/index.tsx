import { useQrUrl } from '../../../lib/useQrUrl';
import { k } from '@kuma-ui/core';

export function PreviewPage() {
  const portfolioUrl = new URLSearchParams(window.location.search).get(
    'portfolioUrl',
  );

  const url = useQrUrl(portfolioUrl);

  if (url === null) {
    return <k.p>loading...</k.p>;
  }

  return (
    <k.main minHeight='calc(100vh - 49px)' bgColor='colors.gray' p={24}>
      <k.div
        mx='auto'
        bgColor='colors.white'
        p={20}
        display='flex'
        flexDir='column'
        justify='center'
        alignItems='center'
        gap={20}
        style={{ height: 455, width: 275 }}
      >
        <k.img
          alt={`${portfolioUrl}のQRコード`}
          src={url}
          style={{ width: '100%', aspectRatio: '1/1' }}
        />

        <k.p fontFamily='monospace' fontWeight={700} fontSize={24}>
          Yo Iwamoto
        </k.p>

        <k.p>Web Application Developer</k.p>
      </k.div>
    </k.main>
  );
}
