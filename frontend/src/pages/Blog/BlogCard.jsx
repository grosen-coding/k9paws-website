import React from "react";
import styled from "styled-components";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <Card key={post.key}>
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

      <ViewPostButton className="card--btn">
        <Link to={`/blog/blog_list/${post.name.urlLink}`} key={post.key}>
          View Post
        </Link>
      </ViewPostButton>
    </Card>
  );
};

export default BlogCard;

const Card = styled.div`
  border: 1px solid rgb(17, 100, 102);
  width: 25%;
  height: 23rem;
  /* height: 100%; */
  border-radius: 1rem;
  /* padding: 0 10px; */
  /* margin: 20px; */
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.7);
  background-color: #e2e2e2;

  list-style: none;

  @include respond(tab-port) {
    width: 60%;
  }

  @include respond(phone) {
    height: 15rem;
    width: 22rem;
    margin: 10px auto;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover .card--paw {
    top: -1rem;
    right: 1rem;
    transform: scale(2.5) rotate(45deg);
    opacity: 0.4;
  }

  &:hover .card--title {
    top: 3rem;
    /* font-size: 2rem; */
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

  .card--content {
    /* position: absolute;
    display: flex;
    justify-content: center;
    align-items: center; */
    width: 90%;
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
    /* color: #555; */
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
    font-size: 1.4rem;
    opacity: 0;
    position: absolute;
    width: 100%;
    bottom: -5rem;
    transition: 0.7s;
    transition-delay: 0.1s;

    /* strong {
      color: #777;
    } */
  }

  .card--category {
    font-weight: 500;
    position: absolute;
    width: 100%;
    bottom: -10rem;
    transition: 0.7s;
    transition-delay: 0.2s;
    opacity: 0;
    font-size: 1.3rem;

    /* strong {
      color: #777;
    } */
  }

  &:hover .card--btn {
    bottom: 10%;
  }
`;

const ViewPostButton = styled.button`
  padding: 0.5rem 1rem;
  /* border: 1px solid #000; */
  width: 150px;
  border-radius: 5px;
  background: rgb(63, 174, 76);
  /* font-size: 16px; */
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  /* backface-visibility: hidden; */
  transition: 0.3s;
  /* transition-delay: 0.3s; */

  /* opacity: 0; */
  position: absolute;
  /* transform: translateY(0); */
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: #333;
  }

  &:hover {
    color: #333;
    background-color: #fff;
    /* outline: 2px solid rgb(63, 174, 76); */
    /* transform: scale(1.05) translateY(-0.3rem); */
    box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.5);
  }
`;
