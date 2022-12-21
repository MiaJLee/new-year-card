export function getUrlParameter(
  url: string,
  target: string
): string | undefined {
  const _url = new URL(url);
  let sPageURL = _url.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName;

  for (let i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === target) {
      return sParameterName[1];
    }
  }
  return undefined;
}
