const allPosts = [

...(airaPosts || []),
...(katherinePosts || []),
...(elishaPosts || []),
...(robynPosts || []),
...(andrewPosts || [])

];

const container = document.querySelector(".articles-grid");

container.innerHTML = "";

allPosts.forEach(post => {

const article = document.createElement("article");

article.className = "post-card";

article.innerHTML = `

<a href="article.html?id=${post.id}" style="text-decoration:none; color:inherit;">

<img
src="${post.image}"
alt="${post.title}"
loading="lazy"
/>

<div class="body">

<span class="chip">
${post.category}
</span>

<h4>
${post.title}
</h4>

<p>
Written by ${post.author}
</p>

<div class="meta">

<span>
${post.date}
</span>

<span>
${post.readTime}
</span>

</div>

</div>

</a>

`;

container.appendChild(article);

});
