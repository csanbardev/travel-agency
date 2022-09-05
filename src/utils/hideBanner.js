const hideBanner = () => {
  let banner = document.querySelector('#banner')
  let topTravels = document.querySelector('#top-travels')

  if (banner.classList.contains("transparent")) {
    banner.classList.remove("transparent")
    topTravels.classList.add("transparent")
    return
  }
  banner.classList.add("transparent")
  topTravels.classList.remove("transparent")
}

export { hideBanner }