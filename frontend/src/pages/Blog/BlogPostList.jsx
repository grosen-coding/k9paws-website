import { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import { Link } from "react-router-dom";
// import { FaPaw } from "react-icons/fa";
import BlogCard from "./BlogCard";
import styled from "styled-components";

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

    const searchResultPosts = allPostInfo.filter((post) => {
      return (
        post.name.category.includes(userSearchInput) ||
        post.name.content.includes(userSearchInput) ||
        post.name.name.includes(userSearchInput) ||
        post.name.title.includes(userSearchInput)
      );
    });

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
    <Container>
      <Wrap className="wrapper">
        <h1>Blog Posts</h1>

        {/* <h2 className="all-blog-posts--title-sub">Search/Filter Posts</h2> */}

        <p>
          Search through all blog posts below either by selecting a{" "}
          <strong>Category</strong> from the drop down menu, or entering a{" "}
          <strong>Keyword</strong> in the search bar.
        </p>

        <Link
          to={`/blog/new_post`}
          aria-label="Move to Blog Post Form Page"
          className="btn-blog-new-post"
        >
          <span>create</span> new post
        </Link>

        <SearchWrap>
          <SearchCategory>
            <div className="form-group">
              <label htmlFor="blogPostCategory" className="srOnly form-control">
                Search by <strong>Category</strong>:
              </label>
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
            </div>
          </SearchCategory>

          <SearchKeyword>
            <form
              onSubmit={(event) => {
                handleSearch(event, userSearchInput);
              }}
              action="search"
            >
              <div className="form-group">
                <label htmlFor="searchBar">
                  Search by <strong>Keyword</strong>:
                </label>
                <input
                  onChange={(event) => {
                    setUserSearchInput(event.target.value);
                  }}
                  value={userSearchInput}
                  className="form-control"
                  type="text"
                  name="searchBar"
                  id="searchBar"
                  placeholder="Search"
                  required
                />
              </div>
              <button type="submit" className="btn">
                Search
              </button>
            </form>
          </SearchKeyword>
        </SearchWrap>

        <AllPostsWrap>
          <ul>
            {blogPosts
              .filter((post) => {
                return post.name.category.includes(categoryInput);
              })
              .map((post) => {
                return <BlogCard post={post} />;
              })}
          </ul>
        </AllPostsWrap>
      </Wrap>
    </Container>
  );
};

export default BlogPostList;

const Container = styled.main`
  height: 100%;
  width: 100%;

  background-color: rgba(209, 232, 226, 0.4);
`;

const Wrap = styled.div`
  padding-top: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  h1 {
    font-size: 4rem;
    text-align: center;
    font-weight: 800;
    color: rgb(17, 100, 102);
  }

  p {
    width: 60%;
    margin: 0 auto;
    padding: 30px 0;
    text-align: center;
    font-size: 1.8rem;
  }

  .btn-blog-new-post {
    border: 1px solid #000;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background: rgb(63, 174, 76);
    color: #333;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    backface-visibility: hidden;
    transition: 0.3s;
    width: 25rem;
    margin: 2rem auto;
  }
`;

const SearchWrap = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  margin: 30px auto;

  /* border: 1px solid red; */
`;

const SearchCategory = styled.div`
  padding: 2rem;
  height: 100%;
  width: 50%;
`;

const SearchKeyword = styled.div`
  padding: 2rem;
  border-left: 1px solid #bbb;
  width: 50%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */

  button {
    margin: 0 auto;
    width: 70%;
  }
`;

const AllPostsWrap = styled.div`
  width: 80%;
  height: 100%;

  /* border: 1px solid green; */

  ul {
    padding: 3rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }
`;
