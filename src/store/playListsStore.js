import { create } from "zustand";
const ACCESS_TOKEN = String(localStorage.getItem("token"));

const fetchData = async (set, playlistId) => {
    try {
        const res = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            {
                headers: {
                    Authorization: ACCESS_TOKEN,
                },
            }
        );
        const playlists = await res.json();
        set((state) => ({
            ...state,
            music: playlists.items,
        }))
    } catch (error) {
        console.log(error);
    }
}

const fetchUrlData = async (set) => {
    const url = String(localStorage.getItem("album-data"))
    try {
        const res = await fetch(
            url,
            {
                headers: {
                    Authorization: ACCESS_TOKEN,
                },
            }
        );
        const playlists = await res.json();
        set((state) => ({
            ...state,
            urlMusic: [playlists],
        }))
    } catch (error) {
        console.log(error);
    }
}

const playListsStore = (set) => ({
    music: [],
    urlMusic: [],
    fetchData: (playlistId) => fetchData(set, playlistId),
    fetchUrlData: () => fetchUrlData(set),
})

export const usePlayListsStore = create(playListsStore)