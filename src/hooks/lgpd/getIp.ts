import axios from 'axios'

export async function getIp() {
  const { data } = await axios('https://api.ipify.org?format=json')
    .then((res) => {
      return res
    })
    .catch(() => {
      return { data: { ip: undefined } }
    })

  return data
}
