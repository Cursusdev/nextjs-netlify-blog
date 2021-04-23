import { useRouter } from "next/router";
import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  const router = useRouter();

  const shortDesc = router.pathname.includes('/posts') || router.pathname === '/'
    ? post.desc.length > 100 
      ? post.desc.substring(0, 300) + "..." 
      : post.desc
    : null;

  const image = router.pathname.includes('/posts') || router.pathname === '/'
    ? <img src={post.img} alt={post.title} width={250} height={'auto'} />
    : null;

  const href = "/posts/" + post.slug

  return (
    <>
      <div className="image-post">
        {image}
      </div>
      <div className="content-post">
        <Link href={href}>
          <a>
            <h2>{post.title}</h2>
            <Date date={parseISO(post.date)} />
            <p>{shortDesc}</p>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .image-post {
            text-align: center;
          }
          .image-post img {
            width: 400px;
          }
          .content-post {
            position: relative;
            width: 100%;
            text-align: justify;
            margin-top: 1rem;
          }
          .content-post p {
            font-size: 1.2rem;
            letter-spacing: .05rem;
            line-height: 1.5rem;
          }
          a {
            color: #222;
          }
          h2 {
            margin: 0;
            font-weight: 500;
          }
          @media (min-width: 769px) {
            .image-post {
              position: relative;
              float: left;
              margin-right: 20px;
            }
            .content-post {
              margin-top: 0;
            }
            .content-post p {
              font-size: 1rem;
              line-height: 1.4rem;
            }
          }
        `}
      </style>
    </>
  );
}
