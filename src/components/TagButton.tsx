import Link from "next/link";
import { useRouter } from "next/router";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function TagButton({ tag }: Props) {
  const router = useRouter();
  
  const href = () => {
    if (router.pathname === '/') {
      return "/posts/tags/[[...slug]]"
    }
    if (router.pathname.includes('/posts')) {
      return "/posts/tags/[[...slug]]"
    }
    if (router.pathname.includes('/list')) {
      return "/list/tags/[[...slug]]"
    }
  };

  const as = (tag: TagContent) => {
    if (router.pathname === '/') {
      return `/posts/tags/${tag.slug}`
    }
    if (router.pathname.includes('/posts')) {
      return `/posts/tags/${tag.slug}`
    }
    if (router.pathname.includes('/list')) {
      return `/list/tags/${tag.slug}`
    }
  };

  return (
    <>
      <Link href={href()} as={as(tag)}>
        <a>{tag.name}</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          border-radius: 3px;
          background-color: rgba(21, 132, 125, 0.2);
          color: #15847d;
          transition: background-color 0.3s ease;
          padding: 0.25em 0.5em;
        }
        a:active,
        a:hover {
          background-color: rgba(21, 132, 125, 0.4);
        }
      `}</style>
    </>
  );
}
