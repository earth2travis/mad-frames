import { Metadata } from 'next';
import Looney from '@/app/components/Looney';

const postUrl = `https://mad-frames.vercel.app/api/echo`;

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `https://mad-frames.vercel.app/api/images/start?date=${Date.now()}`;
  return {
    title: 'Mad Frames',
    description: 'The World&apos;s Greatest Frame',
    openGraph: {
      title: 'Mad Frames',
      images: [imageUrl],
    },
    other: {
      'fc:frame': 'vNext',
      'fc:frame:image': imageUrl,
      'fc:frame:post_url': postUrl,
      'fc:frame:input:text': 'Name of Person',
      'fc:frame:button:1': 'Use Name',
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
