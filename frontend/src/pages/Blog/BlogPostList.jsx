import { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import { Link } from "react-router-dom";
import { FaPaw } from 'react-icons/fa';


const BlogPostList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const [categoryInput, setCategoryInput] = useState("");

  const [userSearchInput, setUserSearchInput] = useState("");
  // const [breedSearchResult, setBreedSearchResult] = useState();
  // const [displayBreedInfo, setDisplayBreedInfo] = useState();
  const [allPostInfo, setAllPostInfo] = useState();

  const handleSearch = (event, userSearchInput) => {
    event.preventDefault();
   

    // console.log(allPostInfo);

    const searchResultPosts = allPostInfo.filter((post)=>{
      return (post.name.category.includes(userSearchInput) || post.name.content.includes(userSearchInput) || post.name.name.includes(userSearchInput) || post.name.title.includes(userSearchInput)) 
    })

    // console.log(searchResultPosts)


setBlogPosts(searchResultPosts);
    // setBreedSearchResult(response);
    // setDisplayBreedInfo(true);
  };

  useEffect(() => {
    const blogRef = firebase.database().ref();

    blogRef.on("value", (response) => {
      const blogPostInfo = response.val();

      const allBlogPosts = [];

      for (let key in blogPostInfo) {
        allBlogPosts.unshift({
          key: key,
          name: blogPostInfo[key],
        });
      }

      setAllPostInfo(allBlogPosts);
    });
  }, []);

  useEffect(() => {
    const blogRef = firebase.database().ref();

    blogRef.on("value", (response) => {
      const blogPostInfo = response.val();

      const allBlogPosts = [];

      for (let key in blogPostInfo) {
        allBlogPosts.unshift({
          key: key,
          name: blogPostInfo[key],
        });
      }

      setBlogPosts(allBlogPosts);
    });
  }, []);

  return (
    <section className="blog-posts wrapper">
        <div className="all-blog-posts-container">

          <h2>
            Search <span>All Posts</span>
          </h2>
 

          <section className="blogPostSection">
            <div className="blogPostContainer">
              <h2>Search Posts by Category:</h2>

              <label htmlFor="blogPostCategory" className="srOnly"></label>
              <select
                name="blogPostCategory"
                onChange={(event) => {
                  setCategoryInput(event.target.value);
                }}
                value={categoryInput}
                className="categorySelectMenu"
              >
                <option value="">All Categories</option>
                <option value="General Interest">General Interest</option>
                <option value="Training Tools">Training Tools</option>
                <option value="Training Tips">Training Tips</option>
                <option value="Problem Behaviour">Problem Behaviour</option>
                <option value="Breeds">Breeds</option>
                <option value="Puppies">Puppies</option>
                <option value="Strange Stories">Strange Stories</option>
                <option value="Success Stories">Success Stories</option>
                <option value="Fun Stories">Fun Stories</option>
              </select>

              <div className="breedSearchForm">
              <form
                onSubmit={(event) => {
                  handleSearch(event, userSearchInput);
                }}
                action="search"
              >
                <label htmlFor="searchBar">Search by keyword</label>
                <input
                  onChange={(event) => {
                    setUserSearchInput(event.target.value);
                  }}
                  value={userSearchInput}
                  type="text"
                  name="searchBar"
                  id="searchBar"
                  placeholder="Search"
                  required
                />
                <button type="submit">Search</button>
              </form>
            </div>

                  <div className="blog-post-container">
              <ul className="blog-posts-cards">
                {blogPosts
                  .filter((post) => {
                    return post.name.category.includes(categoryInput);
                  })
                  .map((post) => {
                    return (
                      <Link to={`/blog/blog_list/${post.name.urlLink}`}>
                        <li key={post.key} className="preview-cards">
                          <div className="blog-preview-card">
                                <div className="blog-preview-card--content">
                                  <div className="blog-preview-card--paw">
                                    <FaPaw />
                                  </div>

                                  <h3 className="blog-preview-card--title">{post.name.title}</h3>
                                  
                                  <h4 className="blog-preview-card--category">
                                    <strong>Category:</strong> {post.name.category}
                                  </h4>

                                  <h4 className="blog-preview-card--author">
                                    <strong>Author:</strong> {post.name.name}
                                  </h4>
                                </div>

                                <div className="card-btn">
                                  <Link to={`/blog/blog_list/${post.name.urlLink}`} key={post.key}>
                                    <button className="blog-preview-card--btn">View Post</button>
                                  </Link>
                                </div>
                          </div>
                        </li>
                      </Link>
                    );
                  })}
              </ul>
              </div>
            </div>
          </section>
             </div>
    </section>
  );
};

export default BlogPostList;
