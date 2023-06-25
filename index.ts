export class Word {
  private _words: Array<string> | null;
  private _result: Record<string, any>;

  constructor(word: string) {
    this._words = word.match(/[\w']+/g);

    const result: Map<string, number> = new Map<string, number>();

    if (!this._words) {}
    else {for (const item of this._words) {
        if (result.has(item)) {
          const frequency: number = result.get(item)!;
          result.set(item, frequency + 1);
          continue;
        }
        result.set(item, 1);
      }}
    this._result = Object.fromEntries(result);
  }

  /**
   * Get specific word frequency
   * @params words
   */
  public getWordFrequency(
    words: Array<string> | null = null,
  ): undefined | Record<string, any> {
    if (words === null || typeof words === "undefined") return this._result;
    const result = words.map((
      word: string,
    ): [string, number | undefined] => [word, this._result[word]]);
    return Object.fromEntries(new Map<string, number | undefined>(result));
  }
}
