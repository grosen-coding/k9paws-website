import { useState, useEffect } from "react";
import firebase from '../../config/firebase';
import { Link } from "react-router-dom";

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
    <div>
      <header>
        <div className="headerTitle wrapper">
          <h1>Lets Discuss Dogs!</h1>
          <h2>
            The <span>JUNO College</span> Dog Blog
          </h2>
        </div>
      </header>

      <section className="recentPostDisplaySection">
        <div className="blogPostContainer wrapper">
          <h2>Recently Posted Stories:</h2>
          <ul>
            {recentPosts.map((post, idx) => {
              return (
                <Link to={`/blog/blog_list/${post.name.urlLink}`} key={post.key}>
                  <li>
                    <div className="blogPreviewCard">
                      <div>
                        <h3>{post.name.title}</h3>
                      </div>
                      <div>
                        <strong>Author:</strong> {post.name.name}
                      </div>
                      <div>
                        <strong>Category:</strong> {post.name.category}
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
<p>HELLO!!!</p>
              <Link to={`/blog/blog_list`} aria-label="Move to Blog Posts Page">All posts</Link>
              <Link to={`/blog/new_post`} aria-label="Move to Blog Post Form Page">new posts</Link>

        </div>
      </section>
    </div>
  );
};

export default BlogMainPage;
