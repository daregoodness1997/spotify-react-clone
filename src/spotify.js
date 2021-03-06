export const authEndpoint = 'https://accounts.spotify.com/authorize';

// Redirect URL

const redirectURL = 'http://localhost:3000/';

const clientID = 'a84d717cfdb6430f9e111ceef8801386';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () =>
  window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
