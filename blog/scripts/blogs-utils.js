//access by id "blog-container"
const blogElement = document.getElementById("blog-container");
let blogsRawData = [];
let loadingTimeout = {};

//write a fn to change innerHTML
function createBlogHTML(blogs) {
  ///เอา json แต่ละก้อนมา .map เพื่อให้ได้ html ย่อยๆที่เปลี่ยนไปตาม json obj -> จากนั้นค่อยใช้ .join เพื่อเชื่อมอันย่อยๆให้กลายเป็นเนื้อเดียว
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

  ///เอาทั้งก้อนที่ return ไปเปลี่ยนแปลง blogElement -> blogElement.innerHTML
  blogElement.innerHTML = blogContentElement;
}

// //write searchFN
// function searchBlogs(element) {
//     //เอา json มาหาfilter
//     const filteredBlogs = blogsRawData.filter(function (blog) {
//         //ถ้ามันมี มันจะ return true -> แล้วจะยังเก็บไว้แสดงต่อ
//         return blog.title.includes(element.value) || blog.description.includes(element.value)
//     })

//     createBlogHTML(filteredBlogs)
// }

//write searchFN
function searchBlogs(element) {
  clearTimeout(loadingTimeout);
  blogElement.innerHTML = "loading~~~";

  loadingTimeout = setTimeout(function () {
    const filteredBlogs = blogsRawData.filter(function (blog) {
      return (
        blog.title.includes(element.value) ||
        blog.description.includes(element.value)
      );
    });

    createBlogHTML(filteredBlogs);
  }, 2000);
}

function sortBlogs(element){
  const sortedBlogs = blogsRawData.sort(function(blogA, blogB) {
  let compareDate = new Date(blogA.publishedDate) - new Date(blogB.publishedDate)

  if(element.value === 'desc'){
    compareDate = new Date(blogB.publishedDate) - new Date(blogA.publishedDate)
  }

  return compareDate
  })

  createBlogHTML(sortedBlogs)
}

//fetch API from blogs.json
async function main() {
  const response = await axios.get("/scripts/blogs.json");
  blogsRawData = response.data;

  createBlogHTML(blogsRawData);
  // console.log("enter to main");
}

main();
