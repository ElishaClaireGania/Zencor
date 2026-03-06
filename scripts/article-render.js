document.addEventListener("DOMContentLoaded", function () {
  // Get article ID from URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const loadingEl = document.getElementById("loading-state");
  const contentEl = document.getElementById("article-content");
  const articleWrapper = document.getElementById("article-container");

  // Check if ID is valid
  if (isNaN(id)) {
    showError("Invalid article ID");
    return;
  }

  const allPosts = [
    ...(typeof airaPosts !== "undefined" ? airaPosts : []),
    ...(typeof katherinePosts !== "undefined" ? katherinePosts : []),
    ...(typeof elishaPosts !== "undefined" ? elishaPosts : []),
    ...(typeof robynPosts !== "undefined" ? robynPosts : []),
    ...(typeof andrewPosts !== "undefined" ? andrewPosts : []),
  ];

  if (allPosts.length === 0) {
    console.error(
      "No blog posts found. Check that blog.js is loaded before article.js",
    );
    showError("Blog posts not loaded");
    return;
  }

  const post = allPosts.find((p) => p.id === id);

  if (loadingEl) loadingEl.style.display = "none";
  if (contentEl) contentEl.style.display = "block";
  if (post) {
    document.title = post.title + " | Zencor Blog";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
      );
    }

    contentEl.innerHTML = `
      <div class="article-header">
        <span class="chip">
          <i class="fa-solid fa-tag"></i> ${post.category || "General"}
        </span>
        <h1>${post.title}</h1>
        <div class="article-meta">
          <span>
            <i class="fa-regular fa-user"></i> ${post.author || "Zencor Team"}
          </span>
          <span>
            <i class="fa-regular fa-calendar"></i> ${post.date || "2026"}
          </span>
          <span>
            <i class="fa-regular fa-clock"></i> ${post.readTime || "5 min read"}
          </span>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="article-image-wrapper">
        <div class="article-featured-image">
          <img 
            src="${post.image}" 
            alt="${post.title.replace(/"/g, "&quot;")}"
            onerror="this.src='img/placeholder.jpg'"
          >
        </div>
      </div>
      <div class="article-content">
        ${post.content}
      </div>
      <div class="article-footer">
        <p>Was this article helpful? Share it with fellow farmers!</p>
        <a href="product.html" class="article-cta">
          <i class="fa-solid fa-leaf"></i> Explore Zencor Products
        </a>
      </div>
    `;

    // Add schema markup
    addSchemaMarkup(post);
  } else {
    showError("Article not found");
  }

  // Error function
  function showError(message) {
    if (loadingEl) loadingEl.style.display = "none";
    if (contentEl) contentEl.style.display = "block";

    if (contentEl) {
      contentEl.innerHTML = `
        <div class="article-error">
          <i class="fa-regular fa-circle-xmark"></i>
          <h2>${message}</h2>
          <p>The article you're looking for doesn't exist or may have been removed.</p>
          <a href="blog.html" class="article-error-btn">
            <i class="fas fa-arrow-left"></i> Browse All Articles
          </a>
        </div>
      `;
    }
  }

  // Schema markup function
  function addSchemaMarkup(post) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      author: {
        "@type": "Person",
        name: post.author,
      },
      datePublished: post.date + " 2026",
      image: "https://www.zencoragri.com/" + post.image,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
      publisher: {
        "@type": "Organization",
        name: "Zencor",
        logo: {
          "@type": "ImageObject",
          url: "https://www.zencoragri.com/img/zencor-logo.png",
        },
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
});
