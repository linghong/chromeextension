chrome.runtime.onInstalled.addListener(()=>{
	chrome.storage.sync.set({color:'#3aa757'}, ()=>{
		console.log("The color is green.");
	});
	chrome.declaractiveContent.onPageChanged.removeRules(undefined, ()=>{
		chrome.declarativeContent.onPageChanged.addRules([{
			conditiond: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'developer.chrome.com'},
			})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});