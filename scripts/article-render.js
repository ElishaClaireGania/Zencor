// Get article ID from URL
const params = new URLSearchParams(window.location.search);

const id = parseInt(params.get("id"));


// Combine all posts
const allPosts = [

...(airaPosts || []),
...(katherinePosts || []),
...(elishaPosts || []),
...(robynPosts || []),
...(andrewPosts || [])

];


// Find the correct post
const post = allPosts.find(p => p.id === id);


// Select container
const container = document.getElementById("article-container");


// Display post
if(post){

// Update page title (SEO)
document.title = post.title + " | Zencor Blog";

container.innerHTML = `

<h1>${post.title}</h1>

<div class="article-meta">

<strong>Author:</strong> ${post.author}<br>

${post.date} • ${post.readTime}

</div>

<img src="${post.image}" alt="${post.title}" loading="lazy">

${post.content}

`;

}


// If article not found
else{

container.innerHTML = `

<h2>Article Not Found</h2>

<p>The article you are looking for does not exist.</p>

<a href="blog.html">Go back to blog</a>

`;

}
