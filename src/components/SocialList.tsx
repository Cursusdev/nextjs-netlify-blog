import React from "react";
import Email from "../assets/envelope-alt.svg";
import LinkedIn from "../assets/linkedin-alt.svg";
import GitHub from "../assets/github-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="GitHub"
        href={`mailto:${config.email_account}`}
        target="_blank"
        rel="noopener"
      >
        <Email width={22} height={22} fill={"#222"} style={{ marginTop: '5px' }} />
      </a>
      <a
        title="LinkedIn"
        href={`https://www.linkedin.com/in/${config.linkedin_account}`}
        target="_blank"
        rel="noopener"
      >
        <LinkedIn width={23} height={23} fill={"#222"}  style={{ marginBottom: '2px' }}/>
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        // div {
        //   min-height: 35px;
        // }
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
