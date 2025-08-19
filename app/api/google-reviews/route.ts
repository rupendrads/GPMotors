// app/api/google-reviews/route.ts
import { NextResponse } from "next/server";
import fs from 'fs/promises';
import path from 'path';

// Define proper types for Google Places API response
interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlacesResult {
  name: string;
  rating: number;
  reviews: GoogleReview[];
}

interface GooglePlacesResponse {
  result: GooglePlacesResult;
  status: string;
  error_message?: string;
}

interface CachedReviews {
  data: GooglePlacesResponse;
  lastFetched: string;
  nextFetchDate: string;
}

const CACHE_FILE_PATH = path.join(process.cwd(), 'cached-reviews.json');

function getNextMonday(): Date {
  const today = new Date();
  const daysUntilMonday = (1 + 7 - today.getDay()) % 7;
  const nextMonday = new Date(today);
  nextMonday.setDate(today.getDate() + (daysUntilMonday || 7));
  nextMonday.setHours(0, 0, 0, 0);
  return nextMonday;
}

function isMonday(): boolean {
  return new Date().getDay() === 1;
}

async function readCache(): Promise<CachedReviews | null> {
  try {
    const fileContent = await fs.readFile(CACHE_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.log('No cache file found or error reading cache', error);
    return null;
  }
}

async function writeCache(data: GooglePlacesResponse): Promise<void> {
  try {
    const cacheData: CachedReviews = {
      data,
      lastFetched: new Date().toISOString(),
      nextFetchDate: getNextMonday().toISOString(),
    };
    await fs.writeFile(CACHE_FILE_PATH, JSON.stringify(cacheData, null, 2));
  } catch (error) {
    console.error('Error writing cache:', error);
  }
}

async function shouldFetchNewData(cache: CachedReviews | null): Promise<boolean> {
  if (!cache) return true;
  
  const now = new Date();
  const nextFetchDate = new Date(cache.nextFetchDate);
  
  // If it's Monday and we haven't fetched this Monday yet
  return isMonday() && now >= nextFetchDate;
}

async function fetchGoogleReviews(): Promise<GooglePlacesResponse> {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?fields=name,rating,reviews&place_id=ChIJo796dWALdkgRmymnES30qoU&key=AIzaSyCixNnRQ2x_zHJ8iI-mUN0lsBurTLh_gyk`;
  
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  return await res.json() as GooglePlacesResponse;
}

export async function GET(request: Request) {
  console.log('Google Reviews API called at:',request, new Date().toISOString());
  
  try {
    // Read cached data
    const cache = await readCache();
    
    // Check if we need to fetch new data
    const shouldFetch = await shouldFetchNewData(cache);
    
    if (shouldFetch) {
      console.log('Fetching new Google Reviews data...');
      
      // Fetch new data from Google API
      const data = await fetchGoogleReviews();
      
      if (data.status !== "OK") {
        // If API call fails but we have cache, return cache
        if (cache) {
          console.log('API failed, returning cached data');
          return NextResponse.json({
            ...cache.data,
            fromCache: true,
            lastFetched: cache.lastFetched,
          });
        }
        
        return NextResponse.json({
          error: data.status,
          returnedStatus: 500,
        }, { status: 500 });
      }
      
      // Save new data to cache
      await writeCache(data);
      
      return NextResponse.json({
        ...data,
        fromCache: false,
        lastFetched: new Date().toISOString(),
      });
    } else {
      // Return cached data
      console.log('Returning cached Google Reviews data');
      return NextResponse.json({
        ...cache!.data,
        fromCache: true,
        lastFetched: cache!.lastFetched,
        nextFetchDate: cache!.nextFetchDate,
      });
    }
  } catch (err) {
    console.log("ERROR: API - ", (err as Error).message);
    
    // Try to return cached data if available
    const cache = await readCache();
    if (cache) {
      console.log('Error occurred, returning cached data');
      return NextResponse.json({
        ...cache.data,
        fromCache: true,
        lastFetched: cache.lastFetched,
        error: 'API error, showing cached data',
      });
    }

    return NextResponse.json({
      error: (err as Error).message,
      returnedStatus: 500,
    }, { status: 500 });
  }
}
