import Allposts from "../../components/posts/all-posts";

const Myarray = [
  {
    slug: "folder-1",
    title: "Getting started with nextjs",
    image: "image-1.jpg",
    excerpt: "You can learn nextjs in just one week if you want to.",
    date: "1999-04-02",
  },
  {
    slug: "folder-2",
    title: "Getting started with nextjs",
    image: "image-2.jfif",
    excerpt: "You can learn nextjs in just one week if you want to.",
    date: "1999-04-02",
  },
  {
    slug: "folder-3",
    title: "Getting started with nextjs",
    image: "image-3.jfif",
    excerpt: "You can learn nextjs in just one week if you want to.",
    date: "1999-04-02",
  },
  {
    slug: "folder-4",
    title: "Getting started with nextjs",
    image: "image-4.jpg",
    excerpt: "You can learn nextjs in just one week if you want to.",
    date: "1999-04-02",
  },
];

export default function AllPostPage() {
  return <Allposts posts={Myarray} />;
}
