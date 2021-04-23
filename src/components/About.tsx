import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function About() {
  return (
    <>
      <div className="container">
        <div>
          <h1>
            Salut, je suis Yannick Goalen et j'écris ce blog<span className="fancy">.</span>
          </h1>
          <span className="handle">maj 04/2021</span>
        </div>
        <div className="illustrations">
          <img src="http://localhost:3000/images/feeling_proud-alt.svg" alt="Illustration Feeling Proud" />
          <img src="http://localhost:3000/images/product_iteration-alt.svg" alt="Illustration Feeling Proud" width="10%" height="auto" />
          <img src="http://localhost:3000/images/working_from_anywhere-alt.svg" alt="Illustration Feeling Proud" width="10%" height="auto" />
        </div>
        <div>
          <h2>Un Blog avec Next.js et Netlify.</h2>
          <SocialList />
        </div>
      </div>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
            padding: 0 5vw;
            flex-direction: column;
            width: 100vw;
            // box-shadow: inset 0 0 10px #000000;
          }
          h1 {
            font-size: 1.8rem;
            margin: 0;
            font-weight: 500;
          }
          h2 {
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 1.25;
          }
          .fancy {
            color: #15847d;
          }
          .handle {
            display: inline-block;
            margin-top: 0.275em;
            color: #9b9b9b;
            letter-spacing: 0.05em;
          }
          .illustrations {
            display: flex;
            flex-wrap: wrap;
            margin: 1.5rem 0 0 0;
            justify-content: center;
            min-height: auto;
            margin-bottom: -80px;
          }
          .illustrations img:first-child {
            max-width: 90%;
            align-self: flex-end;
          }
          .illustrations>* {
            flex: 0 0 33%;
          }
          .illustrations img:not(:first-child) {
            visibility: hidden;
          }
          @media(min-width: 769px) {
            .container {
              width: 75vw;
            }
            .illustrations {
              justify-content: space-between;
              margin: 3rem 0 2rem 0;
            }
            .illustrations img:first-child {
              max-width: 23%;
              align-self: flex-end;
            }
            .illustrations img:not(:first-child){
              visibility: visible;
            }
          }
        `}</style>
    </>
  );
}
