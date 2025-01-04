REUPLOADED AFTER ALL ENIME RELATED CODE WAS TAKEN DOWN DUE TO PRESSURE FROM OUTSIDE ORGANIZATIONS. Code will not be hosted and your actions with this code will not be affiliated with us, but the code is still available for all to learn from. Thank you everyone for all the support in the past in helping this project accumulate over 2000 stars!

<p align="center">
  <img src="https://github.com/Enime-Project/enime/blob/master/images/icon/icon-medium.png?raw=true" />  
</p>

<p align="center">
  <img src="http://ForTheBadge.com/images/badges/built-with-love.svg" />  
</p>

<h1 align="center">Enime</h1>
<h2 align="center"><i>Anime on Desktop</i></h2>

[![Release](https://img.shields.io/github/release/Enime-Project/enime.svg?style=flat-square)](https://github.com/Enime-Project/enime/releases/)
[![License](https://img.shields.io/github/license/Enime-Project/enime.svg?style=flat-square)](https://github.com/Enime-Project/enime/blob/master/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/Enime-Project/enime/total?style=flat-square)](https://github.com/Enime-Project/enime/releases/latest)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FEnime-Project%2Fenime&count_bg=%236EFF00&title_bg=%23555555&icon=&icon_color=%23FFFFFF&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

Leave a star to the repository if you like this project and believe in its potential :)

Enime is a cross-platform desktop app that allows you to experience ad-free anime without disruptions

## Features

- Built-in [mpv](https://github.com/mpv-player/mpv) player powered by [mpv.js](https://github.com/Kagami/mpv.js) that allows on-fly multi-language subtitle embedded in the video among with various controls in the interface!
- Integrated Discord RPC, you can optionally show your friends what anime and what episode you are currently watching!
- Fetch recent releases. Enime automatically parse corresponding anime from various sub teams from [nyaa](https://nyaa.si) and [animetosho](https://animetosho.org/) to obtain a video source from the torrents. A special algorithm has been deployed to ensure the information are as accurate as possible
- Synchronize your watchlist from [anilist](https://anilist.co/home) and watch the anime episodes directly! (No need to find a source anymore) **_[Working on]_**
- _More to be included_

## Installations

Enime is currently not publicly available to download via GitHub Releases. However, you can attempt to run the application in test mode:

1. Clone the repository
   - If you don't have yarn installed, please install yarn via `npm install -g yarn`
2. Head to the terminal with directory pointed to the project folder, execute `yarn install`
3. Run the app via `yarn start`

## Demo

_Note: The current screenshots are from the (very) initial version of the project and do not possibly indicate the final product, they will be periodically updated as the project progresses_
![](images/screenshots/screenshot-1.png)
![](images/screenshots/screenshot-2.png)
![](images/screenshots/screenshot-3.png)
![](images/screenshots/screenshot-4.png)

## Contributing

1. Fork the repository
2. Create a branch indicting your feature: `git checkout -b feature`
3. Commit your changes: `git commit -m 'Adding xxx feature'`
4. Push to your forked repository's feature branch: `git push origin feature`
5. Create a pull request at [here](https://github.com/Enime-Project/enime/pulls)

## Contributors

[![](https://opencollective.com/enime/contributors.svg?width=890&button=false)](https://github.com/aqilc/enime/graphs/contributors)

## Tech Used

- [electron](https://www.electronjs.org/) - Framework to create desktop app via JS
- [React](https://reactjs.org/) - Framework to write pages in JSX and includes other nice features
- [Redux](https://redux.js.org/) - Cross-process storage and event emitter
- [electron-redux](https://github.com/klarna/electron-redux) - Redux adapter for electron
- [torrent-stream](https://github.com/mafintosh/torrent-stream) - Torrent streaming service to play anime videos on fly, created an enime exclusive version to fix crucial bugs since the author remains inactive
- [read-torrent](https://github.com/mafintosh/read-torrent) - Read the torrent metadata and file data
- [mpv.js](https://github.com/Kagami/mpv.js) - Video player utility that has capability to display mkv subtitles on fly, created an enime exclusive binary version to fix crucial bugs
- [lodash](https://lodash.com/) - Nice utility that saved my time
- [apollo](https://www.apollographql.com/) - GraphQL client

## License

Enime is licensed under [MIT](https://github.com/Enime-Project/enime/master/LICENSE)

[![Stargazers over time](https://starchart.cc/Enime-Project/enime.svg?version=flush-cache)](https://starchart.cc/Enime-Project/enime)
