
const CLIENT_ID = "41c646e1b786403980bdb8154c9d6c5f"
const CLIENT_SECRET = "4249d35be6bb4205982e12437d4acbfd"


export const getToken = async () => {

    try {
        const res = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${btoa(CLIENT_ID + ":" + CLIENT_SECRET)}`
            },
            body: "grant_type=client_credentials"
        })
        const auth = await res.json()
        localStorage.setItem("token", `${auth.token_type} ${auth.access_token}`)
    } catch (error) {
       console.log(error)
    }
}
