import Link from "next/link";
import { useRouter } from "next/router";
import {  TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
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
    <Link href={href()} as={as(tag)}>
      <a>{"#" + tag.name}</a>
    </Link>
  );
}
