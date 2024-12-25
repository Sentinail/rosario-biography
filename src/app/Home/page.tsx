import { Link } from "react-router-dom";
import profile from "../../assets/images/2.jpg";

export function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative my-5">
        <img
          src={profile}
          alt="Lorem Picsum"
          className="rounded-full object-cover border-4 border-amber-200 shadow-lg"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <h2 className="text-3xl font-semibold mb-4 text-amber-800 font-serif">
        A Life of Grace and Wisdom
      </h2>
      <p className="text-stone-700 max-w-2xl mx-auto text-lg mb-8">
        "Those we love never truly leave us. There are things that death cannot
        touch. Their love leaves an indelible imprint in our memories. We find
        comfort in knowing that our lives have been enriched by having shared
        their love."
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/gallery"
          className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
        >
          View Gallery
        </Link>
        <Link
          to="/timeline"
          className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
        >
          See Timeline
        </Link>
      </div>
    </div>
  );
}

export default Home;
