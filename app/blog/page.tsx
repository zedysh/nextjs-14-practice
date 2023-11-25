import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function Blog() {
  return (
    <div>
      Blog
      <Link href="/">Back Home</Link>
    </div>
  );
}
