import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
import { join } from 'path';
import * as fs from 'fs';

export const dynamic = 'force-dynamic';

const poppinsBlackPath = join(process.cwd(), 'public/Poppins-Black.ttf');
let poppinsBlack = fs.readFileSync(poppinsBlackPath);

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const message = searchParams.get('message') ?? '';
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex', // Use flex layout
          flexDirection: 'row', // Align items horizontally
          alignItems: 'stretch', // Stretch items to fill the container height
          width: '100%',
          height: '100vh', // Full viewport height
          backgroundColor: '#F098C6',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingLeft: 24,
            paddingRight: 24,
            lineHeight: 1.2,
            fontSize: 36,
            color: 'black',
            flex: 1,
            overflow: 'hidden',
            marginTop: 24,
          }}
        >
          <div
            style={{
              color: '#000000',
              fontSize: 72,
              marginBottom: 12,
              display: 'flex',
              textTransform: 'uppercase',
            }}
          >
            <strong>Name: </strong>
            <strong>{message}</strong>
          </div>
          {/* <div
            style={{
              display: 'flex',
              overflow: 'hidden',
            }}
          >
            {message}
          </div> */}
        </div>
      </div>
    ),
    {
      width: 1528,
      height: 800,
      fonts: [
        {
          name: 'Poppins',
          data: poppinsBlack,
          weight: 900,
          style: 'normal',
        },
      ],
    }
  );
}
