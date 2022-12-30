export function getUrlParameter(
	url: string,
	target: string
): string | undefined {
	const _url = new URL(url);
	const params = _url.searchParams;

	return params.get(target) ?? undefined;
}

export function isMobile(): boolean {
	return /Android|iPhone/i.test(navigator.userAgent);
}

// [workaround] android input focusing 스크롤 안되는 이슈
export function focusOnWriting() {
	if (
		document.activeElement?.tagName == 'INPUT' ||
    document.activeElement?.tagName == 'TEXTAREA'
	) {
		window.setTimeout(function () {
			document.activeElement?.scrollIntoView();
		}, 0);
	}
}
