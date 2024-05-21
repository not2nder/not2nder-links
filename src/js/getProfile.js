export async function getProfile(image) {
    const channelID="UCYneqmkqlHRkbInADINEPVQ";
    const reqURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channelID}&key=${import.meta.env.VITE_API_KEY}`
    const res = await fetch(reqURL);

    const profilePicture = (await res.json()).items[0].snippet.thumbnails.default.url;

    image.src = profilePicture;
}