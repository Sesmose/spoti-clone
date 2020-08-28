// redirection login spotify 

export const authEndPoint = "https://accounts.spotify.com/authorize";

// apres auth renvoie sur notre app
const redirectUri = "http://localhost:3000/";

// Id Client

const clientId = "d4f423e2787e4b39accee72ecb9cc89e";

// Scopes droit pour utiliser fonctionnalitées spotify

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-modify-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]


// Récupération du token en url de reponse

export const getTokenUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((intial, item) => {

        var parts = item.split("=");

        intial[parts[0]] = decodeURIComponent(parts[1]);

        return intial;
    }, 
    {});
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;