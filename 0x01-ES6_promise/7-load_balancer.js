export default function loadbalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
