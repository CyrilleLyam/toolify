import { NextResponse } from 'next/server';

/**
 * -----------------------
 * Available APIs
 * -----------------------
 * curl https://calendarific.com/api/v2/holidays
 * curl https://holidayapi.com/v1/holidays
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get('year') || '2025';
  const country = searchParams.get('country') || 'kh';

  if (!year) {
    return NextResponse.json({ error: 'Missing year parameter' }, { status: 400 });
  }

  const apiKey = process.env.HOLIDAY_API_KEY || 'te0ILbuhNf7UO2kevw6e910q8GPfnnQB'; // || "d935113b-7df2-4015-bb11-9efabec7b2ef";
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
  }

  const url = new URL('https://calendarific.com/api/v2/holidays');
  url.searchParams.append('country', country);
  url.searchParams.append('year', year);
  url.searchParams.append('pretty', 'true');
  url.searchParams.append('api_key', apiKey);

  const response = await fetch(url.toString());
  const data = await response.json();

  return NextResponse.json(data);
}
