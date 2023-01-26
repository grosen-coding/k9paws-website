import { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import styled from "styled-components";
import Logo from "../../components/Logo";
import BlogCard from "./BlogCard";

const BlogMainPage = () => {
  const [recentPosts, setRecentPosts] = useState([]);

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

      const mostRecentPosts = allBlogPosts.slice(0, 3);

      setRecentPosts(mostRecentPosts);
    });
  }, []);

  return (
    <Container>
      <Wrap className="wrapper">
        <BlogPosts>
          <h1>The Dog Blog</h1>

          <p>
            Keep up on the most recent news, interesting training tips, and even
            fun stories by following the <strong>K9PAWS </strong>
            blog! Add your own story, advice, or even a general tip to help
            continue educating and entertaining our community of clients.{" "}
          </p>

          <RecentPostsWrap>
            <RecentPostsContent>
              <h2>Recently Posted Stories</h2>

              <ul>
                {recentPosts.map((post) => {
                  return <BlogCard key={post.key} post={post} />;
                })}
              </ul>

              <BlogButtons className="blog-buttons">
                <Link
                  to={`/blog/blog_list`}
                  aria-label="Move to Blog Posts Page"
                  className="btn-blog"
                >
                  <span>view</span> all posts
                </Link>
                <Link
                  to={`/blog/new_post`}
                  aria-label="Move to Blog Post Form Page"
                  className="btn-blog"
                >
                  <span>create</span> new post
                </Link>
              </BlogButtons>
            </RecentPostsContent>
          </RecentPostsWrap>
        </BlogPosts>
      </Wrap>
    </Container>
  );
};

export default BlogMainPage;

const Container = styled.main`
  width: 100%;
  height: 100%;

  background-image: url("../img/blog-1.jpeg");
  background-position: center;
  background-size: cover;
  /* position: relative; */
  /* background-color: rgba(209, 232, 226, 0.4); */

  /* &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  } */
`;

const Wrap = styled.div`
  width: 80%;
  height: 100%;
`;

const BlogPosts = styled.div`
  /* height: 100%; */
  padding: 120px 0 60px;
  /* z-index: 2; */
  /* position: relative; */

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
`;

const RecentPostsWrap = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.7);
  border: 1px solid #333;
  padding: 2rem 5rem;
  width: 75%;
  height: 100%;
  margin: 0 auto;
  /* z-index: 2; */
  /* position: relative; */
  background-color: rgba(209, 232, 226, 0.6);
`;

const RecentPostsContent = styled.div`
  width: 90%;
  margin: 0 auto;

  h2 {
    text-align: center;
    color: rgb(255, 203, 154);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 1);
    /* font-size: 2rem; */
    /* font-weight: 400; */
    /* text-align: left; */
    font-size: 3rem;
    padding: 15px 0;
  }

  ul {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 2rem 0;
    /* margin: 5rem 0; */
    justify-content: space-around;
    // justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
`;

const BlogButtons = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-around;
`;
