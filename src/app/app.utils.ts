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

export function koreanSuffix(text: string): string {
	const KR_SUFFIX = ['을(를)', '이(가)', '와(과)'];
	let fixedText = text;

	KR_SUFFIX.forEach((s) => {
		if (text.indexOf(s) === -1) {
			return;
		}

		const finalCharCode = text.charCodeAt(text.indexOf(s) - 1);
		const finalConsonantCode = (finalCharCode - 44032) % 28;
		const isFinalCharBatchim = finalConsonantCode !== 0;

		if (isFinalCharBatchim) {
			switch (s) {
			case '을(를)':
				fixedText = fixedText.replace('을(를)', '을');
				break;
			case '이(가)':
				fixedText = fixedText.replace('이(가)', '이');
				break;
			case '와(과)':
				fixedText = fixedText.replace('와(과)', '와');
				break;
			}
		} else {
			switch (s) {
			case '을(를)':
				fixedText = fixedText.replace('을(를)', '를');
				break;
			case '이(가)':
				fixedText = fixedText.replace('이(가)', '가');
				break;
			case '와(과)':
				fixedText = fixedText.replace('와(과)', '과');
				break;
			}
		}
	});

	return fixedText;
}
