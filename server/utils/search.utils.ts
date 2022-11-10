/**
 * Utils file for functions used around the search prompt feature
 */
import { uselessWords } from '../constants/search.contants';

/**
 * Function used to prepared the message input received by trymming
 * words and removing useless words stored in the constants file
 *
 * @param message input to be prepared
 * @returns the prepared message input as an array of words
 */
export function preparePromptMessage(message: string) {
  message = message.toUpperCase();
  let splitMessage = message.split(/[;,.]\s*|\s+/); // RegEx should be improved to ignore special characters

  splitMessage = splitMessage.filter((a) => !uselessWords.includes(a));

  return splitMessage;
}

/**
 * Function used to search for the product(s) with the most common characteristics
 * based on the message input. Returns more than one product if it has the same number
 * of common characteristics found
 *
 * @param characteristics array of characteristics
 * @param products the products to loop through
 * @returns the product(s) with the most common characteristics
 */
export function bestResult(characteristics: string[], products: any) {

  products.forEach((product: any) => {
    let occurences = 0;

    Object.keys(product.toObject()).forEach((k) => {

      if (characteristics.includes(product[k])) occurences += 1;

    });

    product.occurences = occurences;

  });

  return products.filter(
    (product: { occurences: number; }) => product.occurences === Math.max(
      ...products.map((p: { occurences: number; }) => p.occurences),
    ),
  );
}
