function reverse(text) {
  if (text.length <= 1) return text;
  return reverse(text.slice(1)) + text[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'