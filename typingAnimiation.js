function typingAnimation(content, container) {
  let i = 0;
  let typingSound = new Audio("./sounds/typing.mp3");
  typingSound.loop = true;
  const addTypingChars = (chars, typingContainer) => {
    if (i === 0) typingSound.play();
    if (i === chars.length - 1) {
      typingSound.pause();
    }
    if (i < chars.length) {
      if (chars[i] === "<") {
        let closingIndex = chars.indexOf(">", i);
        typingContainer.innerHTML += chars.substring(i, closingIndex + 1);
        i = closingIndex + 1;
      }
      typingContainer.innerHTML += chars[i];
      i++;
      setTimeout(
        addTypingChars,
        Math.random() * 200 + 30,
        chars,
        typingContainer
      );
    }
  };
  setTimeout(addTypingChars, 1500, content, container);
}

export default typingAnimation;
