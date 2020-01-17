import React, { Component } from "react";
import Link from "next/link";

export default class Modal extends Component {
  render() {
    const { podcast, children } = this.props;
    return (
      <div className="modal">
        <div className="clip">
          <nav>
            <Link href={`/channel?id=${podcast.channel.id}`}>
              <a className="close">&lt; Volver</a>
            </Link>
          </nav>

          <picture>
            <div
              style={{
                backgroundImage: `url(${podcast.urls.image ||
                  podcast.channel.urls.logo_image.original})`
              }}
            />
          </picture>
          {children}
        </div>

        <style jsx>{`
          nav {
            background: none;
          }
          nav a {
            display: inline-block;
            padding: 15px;
            color: white;
            cursor: pointer;
            text-decoration: none;
          }
          .clip {
            display: flex;
            height: 100%;
            flex-direction: column;
            background: #8756ca;
            color: white;
          }
          picture {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1;
            flex-direction: column;
            width: auto;
            padding: 10%;
          }
          picture div {
            width: 100%;
            height: 100%;
            background-position: 50% 50%;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }
        `}</style>
      </div>
    );
  }
}
