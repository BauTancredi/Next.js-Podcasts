import React, { Component } from "react";
import Link from "next/link";
import Player from "../components/Player";
import Layout from "../components/Layout";
import Modal from "../components/Modal";

export default class podcast extends Component {
  static async getInitialProps({ query }) {
    let idPodcast = query.id;

    let reqPodcast = await fetch(
      `https://api.audioboom.com/audio_clips/${idPodcast}.mp3`
    );
    let dataPodcast = await reqPodcast.json();
    let podcast = dataPodcast.body.audio_clip;

    return { podcast };
  }
  render() {
    const { podcast } = this.props;

    return (
      <Layout title={podcast.title}>
        <Modal podcast={podcast}>
          <Player podcast={podcast} />
        </Modal>
      </Layout>
    );
  }
}
