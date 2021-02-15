import * as React from "react";
import {MpvPlayer} from "../components/player/mpv-player";
import { streamTorrent } from "../stream/torrent-stream";
import { ipcRenderer } from 'electron';
import * as stateStorage from "../storage/state-storage";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

export default function WatchEpisode(props) {
  const [result, setResult] = useState({
    ready: false,
    response: undefined
  });

  const history = useHistory();

  if (!props.location.state) {
    history.push({
      pathname: "/"
    });
    return;
  }

  const torrent = props.location.state.torrent;
  const anime = props.location.state.anime;
  const episode = props.location.state.episode;

  const prevPlayerData = {
    duration: 0,
    position: 0,
    paused: true
  }

  const player = React.createRef();

  useEffect(() => {
    if (torrent) {
      streamTorrent(torrent).then(response => {
        if (response.success) {
          setResult({
            ready: true,
            response: {
              port: response.port
            }
          });
          ipcRenderer.invoke('enime:presence-status', {
            status: 1,
            anime: anime,
            episode: episode
          })
        }
      })
        .catch(err => console.log(err))
    }
  }, []);

  return (
    <div>
      {result.ready &&
      <MpvPlayer ref={player} url={"http://localhost:" + result.response.port} handlePropertyChange={(name, value) => {
        if (name === 'pause' || name === 'duration' || name === 'time-pos') {
          const now = Date.now();

          let activity = {
            status: 1,
            anime: anime,
            episode: episode
          };

          if (name === 'pause') {
            if (value) activity.paused = value;
            if (value !== prevPlayerData.paused) {
              prevPlayerData.paused = value;
              activity.startTimestamp = value ? null : now + prevPlayerData.position * 1000;
              activity.endTimestamp = value ? null : now + (prevPlayerData.duration - prevPlayerData.position) * 1000;
            }
            ipcRenderer.invoke('enime:presence-status', activity);
          }

          if (!prevPlayerData.paused && (name === 'duration' || name === 'time-pos')) {
            if ((name === 'duration' && Math.abs(value - prevPlayerData.duration) > 1) || (name === 'time-pos' && Math.abs(value - prevPlayerData.position) > 1)) {
              if (name === 'duration') prevPlayerData.duration = value;
              if (name === 'time-pos') prevPlayerData.position = value;

              activity.startTimestamp = now + prevPlayerData.position * 1000;
              activity.endTimestamp = now + (prevPlayerData.duration - prevPlayerData.position) * 1000;

              ipcRenderer.invoke('enime:presence-status', activity);
            }
          }
        }
      }}/>
      }
      <button className={"back"} onClick={() => {
        history.push({
          pathname: "/"
        })
      }}>Back</button>
    </div>
  )
}
