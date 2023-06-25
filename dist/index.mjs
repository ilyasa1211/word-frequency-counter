export class Word {
    constructor(word) {
        this._words = word.match(/[\w']+/g);
        const result = new Map();
        if (!this._words) { }
        else {
            for (const item of this._words) {
                if (result.has(item)) {
                    const frequency = result.get(item);
                    result.set(item, frequency + 1);
                    continue;
                }
                result.set(item, 1);
            }
        }
        this._result = Object.fromEntries(result);
    }
    /**
     * Get specific word frequency
     * @params words
     */
    getWordFrequency(words = null) {
        if (words === null || typeof words === "undefined")
            return this._result;
        const result = words.map((word) => [word, this._result[word]]);
        return Object.fromEntries(new Map(result));
    }
}
