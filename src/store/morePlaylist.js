import { create } from "zustand"
const ACCESS_TOKEN = String(localStorage.getItem("token"));

const fetchMoreMusic = async (set, playlistId) => {
    try {
        const res = await fetch(
            `https://api.spotify.com/v1/browse/categories/${playlistId}/playlists`,
            {
                headers: {
                    Authorization: ACCESS_TOKEN,
                },
            }
        );
        const { playlists } = await res.json();
        set((state) => ({
            ...state,
            moreMusic: playlists.items,
        }))
    } catch (error) {
        console.log(error);
    }
}
const MorePlaylistStore = (set) => ({
    moreMusic: [],
    fetchMoreMusic: (playlistId) => fetchMoreMusic(set, playlistId),
})

export const useMorePlaylistStore = create(MorePlaylistStore)