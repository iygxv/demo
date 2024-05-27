
let lastScript; //上一次获取到的script地址
let needTip = true; // 默认开启提示

// 匹配 src 里面的内容
// / 和 /：这是正则表达式的定界符，表示正则表达式的开始和结束。
// <script：这部分直接匹配字符串中的“<script”。
// .*：. 匹配除了换行符之外的任何单个字符，* 表示前面的字符（或字符组）可以出现0次或多次。因此，.* 会匹配尽可能多的字符，直到遇到后面的模式。
// src=["']：这部分匹配字符串“src="”或“src='”。也就是说，它会寻找属性名为src的HTML属性，并且该属性的值被双引号或单引号包围。
// (?<src>[^"']+)：这是一个命名捕获组。
// (?<src> 和 )：定义了一个名为src的命名捕获组。这意味着当正则表达式匹配成功时，你可以通过src这个名称来获取匹配到的内容。
// [^"']+：[^"'] 匹配任何不是双引号(")或单引号(')的字符。+ 表示前面的字符或字符组（在这里是[^"']）可以出现一次或多次。因此，这部分会匹配src属性值中尽可能多的字符，直到遇到另一个双引号或单引号。
const scriptReg = /<script.*src=["'](?<src>[^"']+)/gm;

async function extractNewScripts() {
	const html = await fetch('/?_timestamp=' + Date.now()).then((resp) => resp.text());
	scriptReg.lastIndex = 0;
	let result = [];
	let match;
  // scriptReg.exec(html) 会在 html 字符串中查找与 scriptReg 匹配的部分。
  // 如果找到匹配项，exec 方法会返回一个数组 match，其中包含了匹配的信息。如果没有找到匹配项，它会返回 null。
  // while 循环会持续执行，直到 scriptReg.exec(html) 返回 null，即没有更多的匹配项为止。
  // 在每次循环中，match 都会被重新赋值为 scriptReg.exec(html) 的返回值，从而实现循环遍历所有匹配项。
	while ((match = scriptReg.exec(html))) {
		result.push(match.groups.src)
	}
	return result;
}

/**
 * 是否需要更新
 * @returns 
 */
async function needUpdate() {
	const newScripts = await extractNewScripts();
  // 第一次获取
	if (!lastScript) {
		lastScript = newScripts;
		return false;
	}
  // 长度不一致
	let result = false;
	if (lastScript.length !== newScripts.length) {
		result = true;
	}
  // 逐一对比
	for (let i = 0; i < lastScript.length; i++) {
		if (lastScript[i] !== newScripts[i]) {
			result = true;
			break
		}
	}
	lastScript = newScripts;
	return result;
}
const DURATION = 2000;

function autoRefresh() {
	setTimeout(async () => {
		const willUpdate = await needUpdate();
		if (willUpdate) {
			if (window.confirm("发现新版本，是否去更新?")) {
        window.location.reload();
      }
      needTip = false; // 关闭更新提示，防止重复提醒
		}
		if(needTip){
			autoRefresh();
		}
	}, DURATION)
}
autoRefresh();
