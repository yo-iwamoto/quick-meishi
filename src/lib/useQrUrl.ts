import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export const useQrUrl = (target: string | null) => {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (target === null) return;

    QRCode.toDataURL(target).then(setUrl);
  }, [target]);

  return url;
};
