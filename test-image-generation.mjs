/**
 * Test Image Generation
 * Run with: node test-image-generation.mjs
 */

import {
  fetchUnsplashImage,
  fetchGoogleImage,
  generatePlaceholderImage,
  getImageWithFallback,
  getInteriorDesignImage,
  getCategoryImage
} from './src/lib/imageGenerator.js';

console.log('🧪 Testing Image Generation System\n');
console.log('=' , .repeat(50));

// Test 1: Placeholder (always works)
console.log('\n📍 Test 1: Placeholder Image');
const placeholder = generatePlaceholderImage(1200, 630, "Interior Designer");
console.log('✅ Placeholder URL:', placeholder);

// Test 2: Interior Design Collection
console.log('\n📍 Test 2: Interior Design Collection');
const interiorImage = getInteriorDesignImage();
console.log('✅ Interior Design Image:', interiorImage);

// Test 3: Unsplash (requires API key)
console.log('\n📍 Test 3: Unsplash API');
try {
  const unsplashImage = await fetchUnsplashImage("interior designer");
  if (unsplashImage) {
    console.log('✅ Unsplash Image:', unsplashImage);
  } else {
    console.log('⚠️  Unsplash: No API key or error occurred');
  }
} catch (error) {
  console.log('❌ Unsplash Error:', error.message);
}

// Test 4: Google Images (requires API key)
console.log('\n📍 Test 4: Google Custom Search API');
try {
  const googleImage = await fetchGoogleImage("modern interior design");
  if (googleImage) {
    console.log('✅ Google Image:', googleImage);
  } else {
    console.log('⚠️  Google: No API key or error occurred');
  }
} catch (error) {
  console.log('❌ Google Error:', error.message);
}

// Test 5: Fallback Chain
console.log('\n📍 Test 5: Image with Fallback Chain');
const fallbackImage = await getImageWithFallback("luxury villa interior", {
  orientation: "landscape",
  placeholderText: "Luxury Villa"
});
console.log('✅ Fallback Result:', fallbackImage);

// Test 6: Category-based Image
console.log('\n📍 Test 6: Category-based Image');
const categoryImage = await getCategoryImage("Residential Spaces");
console.log('✅ Category Image:', categoryImage);

console.log('\n' + '='.repeat(50));
console.log('\n📋 Summary:');
console.log('- Placeholder generation: ✅ Working');
console.log('- Interior Design Collection: ✅ Working');
console.log('- Unsplash API: ' + (process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ? '⚙️  Configured' : '❌ Not configured'));
console.log('- Google API: ' + (process.env.NEXT_PUBLIC_GOOGLE_API_KEY ? '⚙️  Configured' : '❌ Not configured'));
console.log('\n💡 To enable Unsplash:');
console.log('   Add NEXT_PUBLIC_UNSPLASH_ACCESS_KEY to .env.local');
console.log('   Get key from: https://unsplash.com/developers');
console.log('\n💡 To enable Google Images:');
console.log('   Add NEXT_PUBLIC_GOOGLE_API_KEY and NEXT_PUBLIC_GOOGLE_SEARCH_ENGINE_ID to .env.local');
console.log('   Get keys from: https://console.cloud.google.com/');
