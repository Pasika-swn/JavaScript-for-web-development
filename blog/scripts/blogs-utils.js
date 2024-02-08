const blogElement = document.getElementById("blog-container");
let blogsRawData = [];

function createBlogHTML(blogs) {
  const blogContentElement = blogs
    .map(function (blog) {
      return `<div class="flex flex-col md:flex-row gap-6 w-full">
    <img
        src="${blog.imageUrl}"
        alt="feature image 1"
        class="w-full md:w-auto"
    />
    <div class="flex flex-col gap-4 bg-wd-darkgrey p-6 grow">
        <h3 class="text-2xl font-semibold">
        ${blog.title}
        </h3>
        <p class="text-xl font-light">
        ${blog.description}
        </p>
        <p>At ${blog.publishedDate}</p>
        <a href="blogs/test.html">Read more</a>
    </div>
    </div>`;
    })
    .join("");

  blogElement.innerHTML = blogContentElement;
}


//for searchBox
function searchBlogs(element) {
  const filteredBlogs = blogsRawData.filter(function (blog) {
    return blog.title.includes(element.value) || blog.description.includes(element.value);
  });

  createBlogHTML(filteredBlogs);
}

async function main() {
  const response = await axios.get("/scripts/blogs.json");
  blogsRawData = response.data;

  createBlogHTML(blogsRawData);
}

main();
