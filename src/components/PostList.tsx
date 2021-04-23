import React from "react";
import { useRouter } from "next/router";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  const router = useRouter();
  
  const href = (page: number) => {
    if (router.pathname === '/') {
      return page === 1 ? "/posts" : "/posts/page/[page]"
    }
    if (router.pathname.includes('/posts')) {
      return page === 1 ? "/posts" : "/posts/page/[page]"
    }
    if (router.pathname.includes('/list')) {
      return page === 1 ? "/list" : "/list/page/[page]"
    }
  }

  const as = (page: number) => {
    if (router.pathname === '/') {
      return page === 1 ? null : "/posts/page/" + page
    }
    if (router.pathname.includes('/posts')) {
      return page === 1 ? null : "/posts/page/" + page
    }
    if (router.pathname.includes('/list')) {
      return page === 1 ? null : "/list/page/" + page
    }
  }

  return (
    <div className={"container"}>
      <div className={"posts"}>
        <ul className={"post-list"}>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
              <hr />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => href(page),
            as: (page) => as(page),
          }}
        />
      </div>
      <ul className={"categories"}>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container {
          display: flex;
          max-width: 1200px;
          width: 100vw;
          margin: 0 5vw;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .posts {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .posts li {
          margin-bottom: 1.5rem;
        }
        .post-list {
          flex: 1 0 auto;
        }
        .post-list li {
          display: block;
        }
        hr {
          width: 30vw;
        }
        .categories {
          display: none;
        }
        @media (min-width: 769px) {
          .container {
            width: 83vw;
          }
          .post-list li {
            display: inline-block;
          }
          .categories {
            display: block;
            margin-left: 2rem;
          }
          .categories li {
            width: 15vw;
            margin: 1rem 0 .75rem 1.2rem;
          }
          hr {
            display: none;
          }
          @media(min-width: 769px) {
            .container {
              margin: 0 0 0 5vw;
            }
          }
        }
      `}</style>
    </div>
  );
}
