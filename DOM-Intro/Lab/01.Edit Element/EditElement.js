function editElement(ref, match, replacer) {
    const text = ref.textContent;
    const result = text.replace(new RegExp(match, 'g'), replacer);

    ref.textContent = result;
}