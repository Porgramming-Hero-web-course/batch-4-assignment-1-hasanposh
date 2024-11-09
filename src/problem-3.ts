const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.toLowerCase().split(" ");
    return words.filter(w => w === word).length;
};

console.log(countWordOccurrences("I love love typescript", "love"));
