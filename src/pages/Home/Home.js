import "./Home.css";
import { Navbar, Heading } from "../../components";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Heading />

      <div className="home-container">
        <div class="container1">
          <div class="contest-list">
            <div class="contest">
              <h2>Codeforces Round #789</h2>
              <p className="p">
                by loremipsum, 40 hours ago <span className="arrow-btn">▼</span>
              </p>
            </div>
            <div class="contest">
              <h2>Codeforces Round #788 (Div 2)</h2>
              <p className="p">
                by loremipsum, 45 hours ago <span className="arrow-btn">▼</span>
              </p>
              <div class="contest-details">
                <p className="p">
                  I'm glad to invite you to Codeforces Round #788 (Div. 2),
                  which will be held on Friday, May 6, 2022 at 20:05UTC+5.5.
                </p>
                <p className="p">
                  This round is rated for the participants with rating lower
                  than 2100.
                </p>
                <p className="p">
                  You will be given 6 problems and 2 hours to solve them. All
                  problems were prepared by me, Hemose and ZerooCool.
                </p>
                <p className="p">I would like to thank:</p>
                <p className="p">
                  Monogon, for a lot of things (awesome coordination, helping in
                  preparation, rejecting only not interesting tasks and a lot of
                  useful discussions).Our army of testers
                </p>
                <p className="p">
                  YahiaSherif, DeadlyPillow, TheScrasse, Bakry, IsaacMoris,
                  TeaTime, magnus.hegdahl, generic_placeholder_name,
                  NemanjaSo2005
                </p>
              </div>
            </div>
          </div>
          <div class="sidebar">
            <div class="sidebar-item">
              <h3>Participate, Compete and win exciting prizes</h3>
              <button>Explore Contests</button>
            </div>
            <div class="sidebar-item">
              <h3>Practice from a variety of problems</h3>
              <button>Problems</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
