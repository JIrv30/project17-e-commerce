import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">What our <span className="text-coral-red">Customers</span> Say?
        </h3>

        <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their excpetional experiances with us</p>

        <div className="mt24 flex flex-1 justify-evenly item-center max-lg:flex-col gap-14">
          {reviews.map(review=>(
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews