import { create } from "zustand";
const ACCESS_TOKEN = String(localStorage.getItem("token"));

const fetchLikeData = async (set, playlistId) => {
    try {
        const res = await fetch(
            `https://api.spotify.com/v1/tracks/${playlistId}`,
            {
                headers: {
                    Authorization: ACCESS_TOKEN,
                },
            }
        );
        const playlists = await res.json();
        localStorage.setItem("likedMusics", JSON.stringify(playlists))
        console.log(playlists)
        set((state) => ({
            ...state,
            music: [...state.music, playlists],
        }))
    } catch (error) {
        console.log(error);
    }
}

const text = JSON.parse(localStorage.getItem("likedMusics"))
const fetchLikedData = (set) => {
        set((state) => ({
            ...state,
            likedMusic: [text],
        }))
}
const likesStore = (set) => ({
    music: [],
    likedMusic: [JSON.parse(localStorage.getItem("likedMusics"))],
    fetchLikeData: (playlistId) => fetchLikeData(set, playlistId),
    fetchLikedData: () => fetchLikedData(set)
})

export const useLikesStore = create(likesStore)