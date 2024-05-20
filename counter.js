export async function getSubs(element) {
  console.log(JSON.stringify(import.meta.env.VITE_API_KEY))
  const channelID = "UCYneqmkqlHRkbInADINEPVQ";
  const reqURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=${process.env.VITE_API_KEY}`;
  const res = await fetch(reqURL);

  const { subscriberCount } = (await res.json()).items[0].statistics;
  element.innerHTML = subscriberCount + " Subscribers";
}
