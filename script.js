```javascript
/* =========================================================
   INKSPACE BLOGGING WEBSITE
   Complete JavaScript
========================================================= */


/* =========================================================
   DEFAULT BLOG DATA
========================================================= */

const defaultBlogs = [

    {
        id: 1,

        title: "How Artificial Intelligence Is Changing Web Development",

        category: "Technology",

        author: "Alex Morgan",

        date: "September 28, 2026",

        readTime: "8 min read",

        views: 2450,

        likes: 186,

        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",

        excerpt:
            "Artificial intelligence is transforming the way websites and applications are designed, developed and maintained.",

        content: `
            <p>
                Artificial intelligence has moved from being a futuristic
                concept to becoming a practical part of modern web
                development. Developers today can use AI tools to write
                code, generate ideas, debug applications and improve
                user experiences.
            </p>

            <h2>The rise of AI-assisted development</h2>

            <p>
                Traditional web development requires developers to manually
                write and maintain thousands of lines of code. AI-assisted
                development does not completely replace this process.
                Instead, it provides developers with tools that can speed
                up repetitive tasks and help them explore different
                solutions.
            </p>

            <p>
                Modern AI assistants can generate HTML, CSS and JavaScript,
                explain programming errors and suggest improvements to
                existing applications.
            </p>

            <h2>AI and user experience</h2>

            <p>
                AI can also improve the experience of website visitors.
                Recommendation systems can understand user interests and
                display more relevant content. Chatbots can answer common
                questions while intelligent search systems can understand
                natural language.
            </p>

            <h2>Developers still matter</h2>

            <p>
                Even though AI can generate code quickly, human developers
                remain responsible for architecture, security, accessibility
                and product decisions. Generated code still needs to be
                reviewed and tested.
            </p>

            <h2>The future</h2>

            <p>
                The future of web development will likely involve a
                combination of human creativity and machine assistance.
                Developers who understand how to use AI responsibly can
                spend more time solving meaningful problems rather than
                repeating routine tasks.
            </p>

            <h2>Conclusion</h2>

            <p>
                AI is changing web development, but it is not simply
                replacing developers. It is becoming another tool in the
                developer's toolbox. The strongest results come from
                combining technology with human judgment and creativity.
            </p>
        `
    },


    {
        id: 2,

        title: "The Complete Beginner's Guide to Street Photography",

        category: "Photography",

        author: "Emma Wilson",

        date: "September 25, 2026",

        readTime: "7 min read",

        views: 1890,

        likes: 142,

        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",

        excerpt:
            "Learn how to observe everyday life, compose stronger photographs and develop your own visual style.",

        content: `
            <p>
                Street photography is about observing ordinary moments
                and turning them into meaningful photographs. You do not
                need the most expensive camera to begin. A simple camera
                or smartphone can be enough.
            </p>

            <h2>Start by observing</h2>

            <p>
                Before taking photographs, spend time observing your
                surroundings. Look for interesting light, movement,
                architecture and interactions between people.
            </p>

            <h2>Understand composition</h2>

            <p>
                Composition determines how the viewer's eye moves through
                a photograph. Leading lines, symmetry, negative space and
                framing are useful techniques for creating stronger images.
            </p>

            <h2>Use light creatively</h2>

            <p>
                Light can completely change the mood of a photograph.
                Morning and evening light often creates softer shadows,
                while strong midday light can create dramatic contrast.
            </p>

            <h2>Tell a story</h2>

            <p>
                A great street photograph should communicate something.
                Instead of simply photographing interesting objects, ask
                yourself what story the image is telling.
            </p>

            <h2>Practice consistently</h2>

            <p>
                Photography improves through practice. Carry your camera
                regularly and challenge yourself to photograph something
                different each day.
            </p>

            <h2>Conclusion</h2>

            <p>
                Street photography is less about expensive equipment and
                more about curiosity. Learn to observe, experiment with
                composition and develop your own way of seeing the world.
            </p>
        `
    },


    {
        id: 3,

        title: "10 Places You Should Visit in Gujarat",

        category: "Travel",

        author: "Rahul Shah",

        date: "September 21, 2026",

        readTime: "6 min read",

        views: 3200,

        likes: 275,

        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",

        excerpt:
            "From historic architecture to peaceful landscapes, Gujarat has destinations for every type of traveler.",

        content: `
            <p>
                Gujarat offers a remarkable combination of history,
                architecture, culture, wildlife and natural landscapes.
                Whether you enjoy heritage buildings or peaceful coastal
                locations, there is something to explore.
            </p>

            <h2>1. Ahmedabad</h2>

            <p>
                Ahmedabad combines historic architecture with a modern
                urban lifestyle. The old city, heritage buildings and
                traditional markets provide plenty of opportunities for
                exploration.
            </p>

            <h2>2. Statue of Unity</h2>

            <p>
                The Statue of Unity is one of the most recognizable modern
                attractions in Gujarat. The surrounding area also offers
                gardens, viewpoints and other visitor attractions.
            </p>

            <h2>3. Rann of Kutch</h2>

            <p>
                The white salt desert of Kutch is particularly distinctive
                during the cooler months. The region is also known for
                traditional crafts and cultural festivals.
            </p>

            <h2>4. Dwarka</h2>

            <p>
                Dwarka is an important pilgrimage destination with a long
                cultural and religious history.
            </p>

            <h2>5. Somnath</h2>

            <p>
                Somnath is known for its temple and coastal setting. The
                combination of architecture and sea views makes it a popular
                destination.
            </p>

            <h2>6. Gir National Park</h2>

            <p>
                Gir is internationally known for the Asiatic lion and is
                an important wildlife destination.
            </p>

            <h2>7. Saputara</h2>

            <p>
                Saputara is a hill destination surrounded by green
                landscapes and is especially popular during the monsoon.
            </p>

            <h2>8. Champaner</h2>

            <p>
                Champaner contains important historical architecture and
                archaeological remains.
            </p>

            <h2>9. Modhera</h2>

            <p>
                The Sun Temple at Modhera is famous for its architecture
                and detailed stone carvings.
            </p>

            <h2>10. Diu</h2>

            <p>
                Diu offers beaches, historic architecture and a relaxed
                coastal atmosphere.
            </p>

            <h2>Conclusion</h2>

            <p>
                Gujarat has a wide variety of destinations. Planning your
                trip around your interests can help you experience both
                popular attractions and quieter places.
            </p>
        `
    },


    {
        id: 4,

        title: "How to Start a Small Online Business",

        category: "Business",

        author: "Daniel Carter",

        date: "September 18, 2026",

        readTime: "9 min read",

        views: 4100,

        likes: 318,

        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",

        excerpt:
            "A practical introduction to finding an idea, understanding customers and building your first online business.",

        content: `
            <p>
                Starting an online business has become more accessible
                because many tools for websites, payments and marketing
                are available to small businesses.
            </p>

            <h2>Find a real problem</h2>

            <p>
                A business should solve a problem or satisfy a need.
                Before building a product, spend time understanding what
                potential customers actually want.
            </p>

            <h2>Research your audience</h2>

            <p>
                Define who your ideal customer is. Think about their
                interests, budget, problems and purchasing behavior.
            </p>

            <h2>Build a simple offer</h2>

            <p>
                Your first product does not need dozens of features.
                Start with a clear offer that solves one specific problem.
            </p>

            <h2>Create your online presence</h2>

            <p>
                A website, social media presence and professional
                communication can help customers understand your business.
            </p>

            <h2>Marketing</h2>

            <p>
                Content marketing, search engines, social media and
                referrals are several ways a small business can reach
                potential customers.
            </p>

            <h2>Measure everything</h2>

            <p>
                Track visitors, inquiries, conversions and customer
                feedback. Data helps you understand which parts of your
                business need improvement.
            </p>

            <h2>Conclusion</h2>

            <p>
                Starting small allows you to learn without building a
                complicated system from the beginning. Focus on customers,
                provide genuine value and improve continuously.
            </p>
        `
    },


    {
        id: 5,

        title: "HTML, CSS and JavaScript: A Beginner's Roadmap",

        category: "Programming",

        author: "Michael Lee",

        date: "September 15, 2026",

        readTime: "10 min read",

        views: 5100,

        likes: 402,

        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",

        excerpt:
            "Understand how HTML, CSS and JavaScript work together to create modern interactive websites.",

        content: `
            <p>
                HTML, CSS and JavaScript form the foundation of front-end
                web development. Each technology has a different purpose,
                but they work together to create complete websites.
            </p>

            <h2>HTML: Structure</h2>

            <p>
                HTML defines the structure of a webpage. Headings,
                paragraphs, buttons, forms, images and links are represented
                using HTML elements.
            </p>

            <h2>CSS: Design</h2>

            <p>
                CSS controls how HTML elements look. Colors, spacing,
                typography, layouts, animations and responsive designs can
                all be created with CSS.
            </p>

            <h2>JavaScript: Behavior</h2>

            <p>
                JavaScript allows websites to respond to user actions.
                Buttons can trigger functions, forms can be validated and
                content can be changed dynamically.
            </p>

            <h2>Learn them in order</h2>

            <p>
                Beginners should first understand HTML structure, then
                learn CSS layout and styling before moving deeply into
                JavaScript.
            </p>

            <h2>Build projects</h2>

            <p>
                Projects are one of the best ways to practice. Try building
                a portfolio, calculator, weather application, blog or
                dashboard.
            </p>

            <h2>Conclusion</h2>

            <p>
                Learning web development is a gradual process. Consistent
                practice and building real projects will help you understand
                how different technologies work together.
            </p>
        `
    },


    {
        id: 6,

        title: "How to Build Better Habits for Learning",

        category: "Business",

        author: "Sophia Martin",

        date: "September 12, 2026",

        readTime: "5 min read",

        views: 1700,

        likes: 120,

        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",

        excerpt:
            "Small consistent habits can make learning more organized and sustainable.",

        content: `
            <p>
                Learning a new skill can feel difficult when there is no
                clear routine. Creating small and repeatable habits can
                make the process easier to manage.
            </p>

            <h2>Set a specific goal</h2>

            <p>
                Instead of saying that you want to become better at
                programming, choose a specific target such as completing
                a project or learning a particular concept.
            </p>

            <h2>Create a routine</h2>

            <p>
                A consistent study schedule can reduce the effort required
                to decide when to study.
            </p>

            <h2>Practice actively</h2>

            <p>
                Reading is useful, but applying what you learn through
                exercises and projects creates stronger understanding.
            </p>

            <h2>Review regularly</h2>

            <p>
                Revisiting previous material helps identify concepts that
                still need attention.
            </p>

            <h2>Conclusion</h2>

            <p>
                Good learning habits do not have to be complicated.
                Consistency, active practice and regular review can create
                a strong foundation for long-term learning.
            </p>
        `
    }

];


/* =========================================================
   LOCAL STORAGE
========================================================= */

function getBlogs() {

    const savedBlogs =
        localStorage.getItem("inkspaceBlogs");

    if (savedBlogs) {

        return JSON.parse(savedBlogs);

    }

    localStorage.setItem(
        "inkspaceBlogs",
        JSON.stringify(defaultBlogs)
    );

    return [...defaultBlogs];
}


function saveBlogs(blogs) {

    localStorage.setItem(
        "inkspaceBlogs",
        JSON.stringify(blogs)
    );
}


let blogs = getBlogs();


/* =========================================================
   USER DATA
========================================================= */

let likedBlogs =
    JSON.parse(
        localStorage.getItem("inkspaceLiked")
    ) || [];

let bookmarkedBlogs =
    JSON.parse(
        localStorage.getItem("inkspaceBookmarks")
    ) || [];


let comments =
    JSON.parse(
        localStorage.getItem("inkspaceComments")
    ) || {};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const blogGrid =
    document.getElementById("blogGrid");

const heroFeatured =
    document.getElementById("heroFeatured");

const featuredArticle =
    document.getElementById("featuredArticle");

const trendingGrid =
    document.getElementById("trendingGrid");

const articleCount =
    document.getElementById("articleCount");

const categoryFilter =
    document.getElementById("categoryFilter");

const noResults =
    document.getElementById("noResults");

const loadMoreBtn =
    document.getElementById("loadMoreBtn");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   PAGE SETTINGS
========================================================= */

let currentCategory = "all";

let displayedBlogs = 6;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializePage();

    }
);


function initializePage() {

    updateArticleCount();

    renderHeroFeatured();

    renderFeaturedArticle();

    renderBlogs();

    renderTrending();

    initializeTheme();

    initializeNavigation();

    initializeSearch();

    initializeCategoryFilter();

    initializeNewsletter();

    initializeCategoryCards();

    initializeFooterCategories();

    initializeLoadMore();

    updateYear();

    hideLoader();

}


/* =========================================================
   LOADER
========================================================= */

function hideLoader() {

    const loader =
        document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 500);

}


/* =========================================================
   UPDATE ARTICLE COUNT
========================================================= */

function updateArticleCount() {

    if (!articleCount) return;

    articleCount.textContent =
        blogs.length;
}


/* =========================================================
   HERO FEATURED
========================================================= */

function renderHeroFeatured() {

    if (!heroFeatured || blogs.length === 0) {
        return;
    }

    const blog =
        [...blogs]
            .sort((a, b) =>
                b.views - a.views
            )[0];

    heroFeatured.innerHTML = `

        <img
            src="${blog.image}"
            alt="${escapeHTML(blog.title)}"
            loading="lazy"
        >

        <div class="hero-featured-content">

            <span class="category">
                ${escapeHTML(blog.category)}
            </span>

            <h3>
                ${escapeHTML(blog.title)}
            </h3>

            <div class="article-meta">

                <span>
                    ${escapeHTML(blog.author)}
                </span>

                <span>•</span>

                <span>
                    ${escapeHTML(blog.readTime)}
                </span>

            </div>

            <a
                href="blog.html?id=${blog.id}"
                class="primary-btn"
                style="
                    background:white;
                    color:#111;
                    display:inline-flex;
                "
            >
                Read Article →
            </a>

        </div>

    `;
}


/* =========================================================
   FEATURED ARTICLE
========================================================= */

function renderFeaturedArticle() {

    if (!featuredArticle || blogs.length === 0) {
        return;
    }

    const blog =
        [...blogs]
            .sort((a, b) =>
                b.likes - a.likes
            )[0];

    featuredArticle.innerHTML = `

        <div class="featured-image">

            <img
                src="${blog.image}"
                alt="${escapeHTML(blog.title)}"
                loading="lazy"
            >

        </div>

        <div class="featured-content">

            <span class="featured-category">
                ${escapeHTML(blog.category)}
            </span>

            <h2>
                ${escapeHTML(blog.title)}
            </h2>

            <p>
                ${escapeHTML(blog.excerpt)}
            </p>

            <div class="article-meta">

                <div class="author">

                    <span class="author-avatar">
                        ${getInitials(blog.author)}
                    </span>

                    <span>
                        ${escapeHTML(blog.author)}
                    </span>

                </div>

                <span>•</span>

                <span>
                    ${escapeHTML(blog.date)}
                </span>

            </div>

            <a
                href="blog.html?id=${blog.id}"
                class="primary-btn"
            >
                Read Full Story →
            </a>

        </div>

    `;
}


/* =========================================================
   RENDER BLOGS
========================================================= */

function renderBlogs() {

    if (!blogGrid) return;

    let filteredBlogs =
        [...blogs];

    if (currentCategory !== "all") {

        filteredBlogs =
            filteredBlogs.filter(
                blog =>
                    blog.category === currentCategory
            );

    }

    filteredBlogs =
        filteredBlogs.slice(
            0,
            displayedBlogs
        );


    if (filteredBlogs.length === 0) {

        blogGrid.innerHTML = "";

        if (noResults) {

            noResults.style.display =
                "block";

        }

        if (loadMoreBtn) {

            loadMoreBtn.style.display =
                "none";

        }

        return;
    }


    if (noResults) {

        noResults.style.display =
            "none";

    }


    blogGrid.innerHTML =
        filteredBlogs
            .map(
                blog =>
                    createBlogCard(blog)
            )
            .join("");


    const totalFiltered =
        currentCategory === "all"
            ? blogs.length
            : blogs.filter(
                blog =>
                    blog.category === currentCategory
            ).length;


    if (loadMoreBtn) {

        loadMoreBtn.style.display =
            displayedBlogs >= totalFiltered
                ? "none"
                : "inline-flex";

    }
}


/* =========================================================
   CREATE BLOG CARD
========================================================= */

function createBlogCard(blog) {

    const isLiked =
        likedBlogs.includes(blog.id);

    const isBookmarked =
        bookmarkedBlogs.includes(blog.id);


    return `

        <article
            class="blog-card"
            data-id="${blog.id}"
        >

            <div class="blog-image">

                <img
                    src="${blog.image}"
                    alt="${escapeHTML(blog.title)}"
                    loading="lazy"
                >

                <span class="blog-category">
                    ${escapeHTML(blog.category)}
                </span>

            </div>


            <div class="blog-content">

                <h3>

                    <a
                        href="blog.html?id=${blog.id}"
                    >
                        ${escapeHTML(blog.title)}
                    </a>

                </h3>


                <p class="blog-excerpt">

                    ${escapeHTML(blog.excerpt)}

                </p>


                <div class="blog-footer">

                    <div>

                        <span class="blog-date">
                            ${escapeHTML(blog.date)}
                        </span>

                        <br>

                        <span class="blog-date">
                            ${escapeHTML(blog.readTime)}
                        </span>

                    </div>


                    <div class="blog-actions">

                        <button
                            class="blog-action-btn
                            ${isLiked ? "liked" : ""}"
                            onclick="toggleLike(${blog.id})"
                            title="Like"
                        >
                            ${isLiked ? "❤️" : "♡"}
                        </button>


                        <button
                            class="blog-action-btn
                            ${isBookmarked ? "bookmarked" : ""}"
                            onclick="toggleBookmark(${blog.id})"
                            title="Bookmark"
                        >
                            ${isBookmarked ? "🔖" : "📑"}
                        </button>


                        <button
                            class="blog-action-btn"
                            onclick="shareBlog(${blog.id})"
                            title="Share"
                        >
                            ↗
                        </button>

                    </div>

                </div>

            </div>

        </article>

    `;
}


/* =========================================================
   TRENDING BLOGS
========================================================= */

function renderTrending() {

    if (!trendingGrid) return;

    const trending =
        [...blogs]
            .sort(
                (a, b) =>
                    b.views - a.views
            )
            .slice(0, 4);


    trendingGrid.innerHTML =
        trending
            .map(
                (blog, index) => `

                    <article
                        class="trending-card"
                    >

                        <img
                            src="${blog.image}"
                            alt="${escapeHTML(blog.title)}"
                            loading="lazy"
                        >

                        <div
                            class="trending-content"
                        >

                            <span
                                class="trending-number"
                            >
                                #${index + 1}
                            </span>

                            <h3>
                                <a
                                    href="blog.html?id=${blog.id}"
                                >
                                    ${escapeHTML(blog.title)}
                                </a>
                            </h3>

                        </div>

                    </article>

                `
            )
            .join("");
}


/* =========================================================
   LIKE BLOG
========================================================= */

function toggleLike(id) {

    const blog =
        blogs.find(
            item =>
                item.id === id
        );

    if (!blog) return;


    if (likedBlogs.includes(id)) {

        likedBlogs =
            likedBlogs.filter(
                blogId =>
                    blogId !== id
            );

        blog.likes =
            Math.max(
                0,
                blog.likes - 1
            );

        showToast(
            "Like removed"
        );

    } else {

        likedBlogs.push(id);

        blog.likes++;

        showToast(
            "Article liked ❤️"
        );

    }


    localStorage.setItem(
        "inkspaceLiked",
        JSON.stringify(likedBlogs)
    );

    saveBlogs(blogs);

    renderBlogs();

    renderFeaturedArticle();
}


/* =========================================================
   BOOKMARK
========================================================= */

function toggleBookmark(id) {

    if (bookmarkedBlogs.includes(id)) {

        bookmarkedBlogs =
            bookmarkedBlogs.filter(
                blogId =>
                    blogId !== id
            );

        showToast(
            "Removed from bookmarks"
        );

    } else {

        bookmarkedBlogs.push(id);

        showToast(
            "Article bookmarked 🔖"
        );

    }


    localStorage.setItem(
        "inkspaceBookmarks",
        JSON.stringify(
            bookmarkedBlogs
        )
    );

    renderBlogs();
}


/* =========================================================
   SHARE BLOG
========================================================= */

async function shareBlog(id) {

    const blog =
        blogs.find(
            item =>
                item.id === id
        );

    if (!blog) return;


    const url =
        `${window.location.origin}/blog.html?id=${id}`;


    if (
        navigator.share
    ) {

        try {

            await navigator.share({

                title:
                    blog.title,

                text:
                    blog.excerpt,

                url:
                    url

            });

        } catch (error) {

            // User cancelled share.

        }

    } else {

        try {

            await navigator.clipboard.writeText(
                url
            );

            showToast(
                "Article link copied!"
            );

        } catch (error) {

            showToast(
                "Unable to copy link"
            );

        }

    }
}


/* =========================================================
   SEARCH
========================================================= */

function initializeSearch() {

    const searchBtn =
        document.getElementById(
            "searchBtn"
        );

    const searchOverlay =
        document.getElementById(
            "searchOverlay"
        );

    const closeSearch =
        document.getElementById(
            "closeSearch"
        );

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (!searchBtn || !searchOverlay) {
        return;
    }


    searchBtn.addEventListener(
        "click",
        () => {

            searchOverlay.classList.add(
                "active"
            );

            setTimeout(
                () =>
                    searchInput?.focus(),
                200
            );

        }
    );


    closeSearch?.addEventListener(
        "click",
        () => {

            searchOverlay.classList.remove(
                "active"
            );

        }
    );


    searchOverlay.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                searchOverlay
            ) {

                searchOverlay.classList.remove(
                    "active"
                );

            }

        }
    );


    searchInput?.addEventListener(
        "input",
        () => {

            performSearch(
                searchInput.value
            );

        }
    );

}


function performSearch(query) {

    const resultsContainer =
        document.getElementById(
            "searchResults"
        );

    if (!resultsContainer) return;


    const search =
        query
            .trim()
            .toLowerCase();


    if (!search) {

        resultsContainer.innerHTML = "";

        return;
    }


    const results =
        blogs.filter(
            blog =>

                blog.title
                    .toLowerCase()
                    .includes(search)

                ||

                blog.category
                    .toLowerCase()
                    .includes(search)

                ||

                blog.author
                    .toLowerCase()
                    .includes(search)

                ||

                blog.excerpt
                    .toLowerCase()
                    .includes(search)

        );


    if (results.length === 0) {

        resultsContainer.innerHTML = `

            <div class="no-results">

                <div class="no-results-icon">
                    🔍
                </div>

                <h3>
                    No articles found
                </h3>

                <p>
                    Try another search term.
                </p>

            </div>

        `;

        return;
    }


    resultsContainer.innerHTML =
        results
            .map(
                blog => `

                    <a
                        href="blog.html?id=${blog.id}"
                        class="search-result"
                    >

                        <img
                            src="${blog.image}"
                            alt="${escapeHTML(blog.title)}"
                        >

                        <div
                            class="search-result-content"
                        >

                            <h4>
                                ${escapeHTML(blog.title)}
                            </h4>

                            <span>
                                ${escapeHTML(blog.category)}
                                •
                                ${escapeHTML(blog.readTime)}
                            </span>

                        </div>

                    </a>

                `
            )
            .join("");
}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function initializeCategoryFilter() {

    if (!categoryFilter) return;


    categoryFilter.addEventListener(
        "change",
        event => {

            currentCategory =
                event.target.value;

            displayedBlogs = 6;

            renderBlogs();

        }
    );
}


/* =========================================================
   CATEGORY CARDS
========================================================= */

function initializeCategoryCards() {

    const cards =
        document.querySelectorAll(
            ".category-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;

                currentCategory =
                    category;

                displayedBlogs =
                    6;


                if (categoryFilter) {

                    categoryFilter.value =
                        category;

                }


                renderBlogs();


                document
                    .getElementById("latest")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });
}


/* =========================================================
   FOOTER CATEGORIES
========================================================= */

function initializeFooterCategories() {

    const links =
        document.querySelectorAll(
            "[data-footer-category]"
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const category =
                    link.dataset.footerCategory;


                currentCategory =
                    category;


                displayedBlogs =
                    6;


                if (categoryFilter) {

                    categoryFilter.value =
                        category;

                }


                renderBlogs();


                document
                    .getElementById("latest")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });
}


/* =========================================================
   LOAD MORE
========================================================= */

function initializeLoadMore() {

    if (!loadMoreBtn) return;


    loadMoreBtn.addEventListener(
        "click",
        () => {

            displayedBlogs += 3;

            renderBlogs();

        }
    );
}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initializeNavigation() {

    const menuBtn =
        document.getElementById(
            "menuBtn"
        );

    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (!menuBtn || !navLinks) {
        return;
    }


    menuBtn.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "open"
            );

            menuBtn.textContent =
                navLinks.classList.contains(
                    "open"
                )
                    ? "✕"
                    : "☰";

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                    menuBtn.textContent =
                        "☰";

                }
            );

        });
}


/* =========================================================
   DARK MODE
========================================================= */

function initializeTheme() {

    const themeBtn =
        document.getElementById(
            "themeBtn"
        );


    const savedTheme =
        localStorage.getItem(
            "inkspaceTheme"
        );


    if (
        savedTheme === "dark"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

        if (themeBtn) {
            themeBtn.textContent =
                "☀️";
        }

    }


    themeBtn?.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-mode"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "inkspaceTheme",
                isDark
                    ? "dark"
                    : "light"
            );


            themeBtn.textContent =
                isDark
                    ? "☀️"
                    : "🌙";

        }
    );
}


/* =========================================================
   NEWSLETTER
========================================================= */

function initializeNewsletter() {

    const form =
        document.getElementById(
            "newsletterForm"
        );


    const email =
        document.getElementById(
            "newsletterEmail"
        );


    if (!form) return;


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const emailValue =
                email.value.trim();


            if (!validateEmail(emailValue)) {

                showToast(
                    "Please enter a valid email."
                );

                return;

            }


            let subscribers =
                JSON.parse(
                    localStorage.getItem(
                        "inkspaceSubscribers"
                    )
                ) || [];


            if (
                subscribers.includes(
                    emailValue
                )
            ) {

                showToast(
                    "You are already subscribed!"
                );

                return;

            }


            subscribers.push(
                emailValue
            );


            localStorage.setItem(
                "inkspaceSubscribers",
                JSON.stringify(
                    subscribers
                )
            );


            email.value = "";


            showToast(
                "Successfully subscribed! 🎉"
            );

        }
    );
}


/* =========================================================
   EMAIL VALIDATION
========================================================= */

function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;


function showToast(message) {

    if (!toast) return;


    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* =========================================================
   YEAR
========================================================= */

function updateYear() {

    if (!currentYear) return;

    currentYear.textContent =
        new Date().getFullYear();
}


/* =========================================================
   GET INITIALS
========================================================= */

function getInitials(name) {

    return name
        .split(" ")
        .map(
            word =>
                word.charAt(0)
        )
        .slice(0, 2)
        .join("")
        .toUpperCase();
}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    if (!value) return "";

    return value
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   GLOBAL FUNCTIONS
========================================================= */

window.toggleLike =
    toggleLike;

window.toggleBookmark =
    toggleBookmark;

window.shareBlog =
    shareBlog;


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cInkSpace Blog Platform",
    "font-size:20px;font-weight:bold;"
);

console.log(
    "Blog system initialized successfully."
);
```
