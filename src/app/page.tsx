import { Metadata } from 'next';
import Looney from '@/app/components/Looney';

const postUrl = `https://mad-frames.vercel.app/api/echo`;

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `https://mad-frames.vercel.app/api/images/start?date=${Date.now()}`;
  return {
    title: 'Echo the Dolphin',
    description: 'Type something and Echo will say it back!',
    openGraph: {
      title: 'Echo the Dolphin',
      images: [imageUrl],
    },
    other: {
      'fc:frame': 'vNext',
      'fc:frame:image': imageUrl,
      'fc:frame:post_url': postUrl,
      'fc:frame:input:text': 'Type something here...',
      'fc:frame:button:1': '🐬 Echo',
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col text-center lg:p-16">
      <Looney />
    </main>
  );
}
