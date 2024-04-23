import { create } from "zustand";
const ACCESS_TOKEN = String(localStorage.getItem("token"));

const fetchData = async (set) => {
    try {
        const res = await fetch(
            "https://api.spotify.com/v1/browse/featured-playlists",
            {
                headers: {
                    Authorization: ACCESS_TOKEN,
                },
            }
        );
        const { playlists } = await res.json();
        console.log(playlists)
        set((state) => ({
            ...state,
            music: playlists.items,
        }))
    } catch (error) {
        console.log(error);
    }
}

const fetchTopMixes = async (set) => {
    try {
        const res = await fetch(
            "https://api.spotify.com/v1/browse/categories/toplists/playlists",
            {
                headers: {
                    Authorization: ACCESS_TOKEN,
                },
            }
        );
        const { playlists } = await res.json();
        console.log(playlists)
        set((state) => ({
            ...state,
            topMixes: playlists.items,
        }))
    } catch (error) {
        console.log(error);
    }
}

const fetchMadeFor = async (set) => {
    const res = await fetch(
        "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists",
        {
            headers: {
                Authorization: ACCESS_TOKEN,
            },
        }
    );
    const { playlists } = await res.json();
    console.log(playlists)
    set((state) => ({
        ...state,
        madeForYou: playlists.items,
    }))
}

const fetchResentPlayed = async (set) => {
    const res = await fetch(
        "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists",
        {
            headers: {
                Authorization: ACCESS_TOKEN,
            },
        }
    );
    const { playlists } = await res.json();
    set((state) => ({
        ...state,
        resentPlayed: playlists.items,
    }))
}

const fetchJumpBack = async (set) => {
    const res = await fetch(
        "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists",
        {
            headers: {
                Authorization: ACCESS_TOKEN,
            },
        }
    );
    const { playlists } = await res.json();
    set((state) => ({
        ...state,
        jumpBack: playlists.items,
    }))
}

const fetchUniquely = async (set) => {
    const res = await fetch(
        "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists",
        {
            headers: {
                Authorization: ACCESS_TOKEN,
            },
        }
    );
    const { playlists } = await res.json();
    set((state) => ({
        ...state,
        uniquely: playlists.items,
    }))
}

const fetchMusicPlayer = async (set) => {
    try {
        const res = await fetch(
            "https://api.spotify.com/v1/me/player",
            {
                headers: {
                    Authorization: ACCESS_TOKEN,
                },
            }
        );
        const  {playlists}  = await res.json();
        console.log(playlists)
        set((state) => ({
            ...state,
            musicPlayer: playlists,
        }))
    } catch (error) {
        console.log(error);
    }
}

const musicStore = (set) => ({
    music: [],
    topMixes: [],
    madeForYou: [],
    resentPlayed: [],
    jumpBack: [],
    uniquely: [],
    musicPlayer: [],

    fetchData: () => fetchData(set),
    fetchTopMixes: () => fetchTopMixes(set),
    fetchMadeFor: () => fetchMadeFor(set),
    fetchResentPlayed: () => fetchResentPlayed(set),
    fetchJumpBack: () => fetchJumpBack(set),
    fetchUniquely: () => fetchUniquely(set),
    fetchMusicPlayer: () => fetchMusicPlayer(set),
})

export const useMusicStore = create(musicStore)