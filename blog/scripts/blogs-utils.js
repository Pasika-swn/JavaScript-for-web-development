const blogElement = document.getElementById("blog-container");

// create fn
function createBlogHTML(blog) {
  blogElement.innerHTML = `
    <div class="flex flex-col md:flex-row gap-6 w-full">
        <img
            src="https://fastly.picsum.photos/id/485/300/200.jpg?hmac=N6yRTUogA1s8HlQMCO9BtxlXa8mg7AOQs6JKw0jq6Fw"
            alt="feature image 1"
            class="w-full md:w-auto"
        />
        <div class="flex flex-col gap-4 bg-wd-darkgrey p-6 grow">
            <h3 class="text-2xl font-semibold">
            ${blog.title}
            </h3>
            <p class="text-xl font-light">
            Nobis quo est corporis totam dolores. Rerum quam autem debitis
            dolores sunt et quis occaecati. Nam dolorem dolores.
            </p>
            <p>At 4/1/2024</p>
            <a href="blogs/test.html">Read more</a>
        </div>
        </div>
    </section>
    <div class="mt-8 text-center">
        <a class="text-white text-2xl" href="blogs.html"> See All Blog </a>
    </div>

    `;
}

const blog = {
  title: "skooldio test",
  description:
    "Nobis quo est corporis totam dolores. Rerum quam autem debitis dolores sunt et quis occaecati. Nam dolorem dolores.",
  publishedDate: "4/1/2024",
  imageUrl:
    "https://fastly.picsum.photos/id/474/300/200.jpg?hmac=U3owchyfD1gP7JngoXB576Lo9qRMD8R19P1zopKGvKI",
};

createBlogHTML(blog);
