import "./Home.css";
import { Navbar } from "../../components";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <h1 className="home-heading">Welcome to Codeforces</h1>
        <p className="home-para">
          Codeforces is a website that hosts competitive programming contests.
          It is maintained by a group of competitive programmers from ITMO
          University led by Mikhail Mirzayanov. The target audience of the
          website is competitive programmers. The website hosts contests
          regularly and the contests are usually of 2-2.5 hours duration.
        </p>
      </div>
    </div>
  );
};
