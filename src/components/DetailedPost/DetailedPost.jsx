import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./DetailedPost.scss";

const DetailedPost = ({ idToShow }) => {
  const posts = useSelector((state) => state.posts);
  let postArrElem;
  Object.entries(posts).forEach((element) => {
    if (element[0] === String(idToShow - 1)) {
      // console.log(typeof element[0]);
      // console.log(typeof idToShow);
      postArrElem = element;
    }
  });
  // console.log(postArrElem);
  const post = postArrElem[1];
  const imgPath = post.imgPath;

  return (
    <div>
      <Header />
      <div className="container">
        <section className="detailed-post">
          <div className="detailed-post__content">
            <h1 className="detailed-post__title">{post.title}</h1>
            <p className="detailed-post__description">{post.description}</p>
            {imgPath.map((image, index) => (
              <img
                className="detailed-post__image"
                key={index}
                src={image}
                alt={`фото${index + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DetailedPost;
