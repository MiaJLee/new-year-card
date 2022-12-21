export function getUrlParameter(
  url: string,
  target: string
): string | undefined {
  const _url = new URL(url);
  const params = _url.searchParams;

  return params.get(target) ?? undefined;
}
