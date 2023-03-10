export function dummy() {}

console.log('hello world')

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'My context Menu"',
    contexts: ['page'],
    id: 'myContextMenuId',
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const { menuItemId, selectionText } = info
  // @ts-ignore
  const { id, url } = tab

  console.log({ id, url, menuItemId, selectionText })
})
