/**
 * List all blogs in the database
 */

async function listBlogs() {
  try {
    console.log('📚 Fetching all blogs...\n');
    
    const response = await fetch('http://localhost:3000/api/blogs');
    const result = await response.json();

    if (result.success && result.blogs) {
      console.log(`Found ${result.blogs.length} blog(s):\n`);
      
      result.blogs.forEach((blog, index) => {
        console.log(`${index + 1}. ${blog.title}`);
        console.log(`   Slug: ${blog.urlSlug}`);
        console.log(`   Has featuredImage: ${blog.featuredImage ? '✅ Yes' : '❌ No'}`);
        console.log(`   Has imageUrl: ${blog.imageUrl ? '✅ Yes' : '❌ No'}`);
        console.log(`   Image field: ${blog.image || 'none'}`);
        console.log('');
      });
    } else {
      console.log('No blogs found or error:', result.error);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

listBlogs();
