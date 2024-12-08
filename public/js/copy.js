const codeBlocks = document.querySelectorAll('pre:has(code)');

//add copy btn to every code block on the dom
codeBlocks.forEach((code) => {
  //button icon
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', '/copy.svg#empty');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('copy-svg');
  svg.appendChild(use);

  //create button
  const btn = document.createElement('button');
  btn.appendChild(svg);
  btn.classList.add('copy-btn');
  btn.addEventListener('click', (e) => copyCode(e));

  //create copied text
  const copiedText = document.createElement('span');
  copiedText.textContent = 'Copied';
  copiedText.classList.add('copied-text');
  copiedText.style.display = 'none';

  //container to fix copy button
  const container = document.createElement('div');
  container.classList.add('copy-cnt');
  container.appendChild(btn);
  container.appendChild(copiedText);

  //add to code block
  code.classList.add('relative');
  code.appendChild(container);
});

/**
* @param {MouseEvent} event
*/
function copyCode(event) {
  let codeBlock = getChildByTagName(event.currentTarget.parentElement.parentElement, 'CODE')
  navigator.clipboard.writeText(codeBlock.innerText)
  const btn = event.currentTarget;
  const copiedText = event.currentTarget.parentElement.querySelector('.copied-text');
  
  btn.style.display = 'none';
  copiedText.style.display = 'block';
  
  setTimeout(() => {
    btn.style.display = 'block';
    copiedText.style.display = 'none';
  }, 1000);
}

function getChildByTagName(element, tagName) {
  return Array.from(element.children).find((child) => child.tagName === tagName);
}
