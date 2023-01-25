import { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import styled from "styled-components";
import Logo from "../../components/Logo";

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
        <BlogPosts className="blog-main">
          <h1>The Dog Blog</h1>

          <p>
            Keep up on the most recent news, interesting training tips, and even
            fun stories by following the <strong>K9PAWS </strong>
            blog! Add your own story, advice, or even a general tip to help
            continue educating and entertaining our community of clients.{" "}
          </p>

          <AllPostsWrap>
            <RecentPostsWrap>
              <h2>Recently Posted Stories</h2>

              <ul>
                {recentPosts.map((post, idx) => {
                  return (
                    <BlogCard key={post.key}>
                      <li className="card--content">
                        <div className="card--paw">
                          <FaPaw />
                        </div>

                        <h3 className="card--title">{post.name.title}</h3>

                        <h4 className="card--category">
                          <strong>Category:</strong> {post.name.category}
                        </h4>

                        <h4 className="card--author">
                          <strong>Author:</strong> {post.name.name}
                        </h4>
                      </li>

                      <div className="card-btn">
                        <Link
                          to={`/blog/blog_list/${post.name.urlLink}`}
                          key={post.key}
                        >
                          <button className="card--btn">View Post</button>
                        </Link>
                      </div>
                    </BlogCard>
                  );
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
            </RecentPostsWrap>
          </AllPostsWrap>
        </BlogPosts>
      </Wrap>
    </Container>
  );
};

export default BlogMainPage;

const Container = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  // margin-bottom: 200px;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* padding: 2rem; */
`;

const Wrap = styled.div``;

const BlogPosts = styled.div`
  h1 {
  }

  p {
  }
`;

const AllPostsWrap = styled.div``;

const RecentPostsWrap = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.7);
  border: 1px solid #333;
  padding: 2rem 5rem;
  width: 75%;
  margin: 0 auto 70px;

  ul {
    display: flex;
    height: 100%;
    width: 100%;
    margin: 5rem 0;
    justify-content: space-between;
    // justify-content: center;
    align-items: center;
  }
`;

const BlogCard = styled.div`
  border: 1px solid #aaa;
  width: 20rem;
  height: 23rem;
  border-radius: 1rem;
  margin: 20px;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);

  @include respond(tab-port) {
    width: 60%;
  }

  @include respond(phone) {
    height: 15rem;
    width: 22rem;
    margin: 10px auto;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:hover .card--paw {
    top: -1rem;
    right: 1rem;
    transform: scale(2.5) rotate(45deg);
    opacity: 0.4;
  }

  &:hover .card--title {
    top: 3rem;
    font-weight: 800;

    @include respond(phone) {
      top: 1rem;
    }
  }

  &:hover .card--author {
    bottom: 12rem;
    opacity: 1;

    @include respond(tab-port) {
      bottom: 10rem;
    }

    @include respond(phone) {
      bottom: 8rem;
    }
  }

  &:hover .card--category {
    bottom: 9rem;
    opacity: 1;

    @include respond(tab-port) {
      bottom: 8rem;
      line-height: 1.2;
    }

    @include respond(phone) {
      bottom: 6rem;
    }
  }

  &:hover .card-btn {
    bottom: 2rem;
    opacity: 1;
  }

  .card--content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 1s;
  }

  .card--paw {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    font-size: 5rem;
    transition: 0.5s;
    color: rgb(63, 174, 76);

    @include respond(tab-port) {
      font-size: 7rem;
    }

    @include respond(phone) {
      top: 60%;
      font-size: 5rem;
    }
  }

  .card--title {
    color: #555;
    text-transform: uppercase;
    position: absolute;
    top: 12rem;
    width: 100%;
    transition: 0.5s;
    line-height: 1;
    font-size: 1.4rem;
    padding: 0 0.6rem;

    @include respond(tab-port) {
      font-size: 2rem;
    }

    @include respond(phone) {
      top: 10rem;
      font-size: 1.2rem;
    }
  }

  .card--author {
    font-weight: 500;
    opacity: 0;
    position: absolute;
    width: 100%;
    bottom: -5rem;
    transition: 0.7s;
    transition-delay: 0.1s;

    strong {
      color: #777;
    }
  }

  .card--category {
    font-weight: 500;
    position: absolute;
    width: 100%;
    bottom: -10rem;
    transition: 0.7s;
    transition-delay: 0.2s;
    opacity: 0;

    strong {
      color: #777;
    }
  }

  .card--btn {
    padding: 10px 20px;
    border: 1px solid #000;
    border-radius: 5px;
    background: rgb(63, 174, 76);
    color: #333;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    backface-visibility: hidden;
    transition: 0.3s;

    @include respond(tab-land) {
      padding: 5px 10px;
      font-size: 1.6rem;
    }

    @include respond(tab-port) {
      padding: 5px 10px;
      font-size: 1.3rem;
    }

    @include respond(phone) {
      padding: 5px 10px;
      font-size: 1rem;
    }

    &:hover {
      color: #333;
      background-color: #fff;
      border: 2px solid rgb(63, 174, 76);
      transform: scale(1.05) translateY(-0.3rem);
      box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.5);
    }

    &:active {
      transform: scale(1) translateY(0);
      box-shadow: 0 0.1rem 0.8rem rgba(0, 0, 0, 0.5);
    }
  }
`;

const BlogButtons = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-around;
`;
