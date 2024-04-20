import { create } from "zustand";
const ACCESS_TOKEN = String(localStorage.getItem("token"));

const fetchData = async (set, playlistId) => {
    try {
        const res = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}`,
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

const playListsStore = (set) => ({
    music: [],

    fetchData: (playlistId) => fetchData(set, playlistId),
})

export const usePlayListsStore = create(playListsStore)