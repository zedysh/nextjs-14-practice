import { notFound } from "next/navigation";

export default function ReviewDetails({ params }) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review Details
      <h1>{params.reviewsId}</h1>
      for product {params.productId}
    </div>
  );
}
