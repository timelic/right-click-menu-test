export function dummy() {}

console.log('hello world')

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const { menuItemId, selectionText } = info
  // @ts-ignore
  const { id, url } = tab

  console.log({ id, url, menuItemId, selectionText })
})
