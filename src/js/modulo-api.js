import { BASE_URL } from "./config.js";

/**
 * Chiamata api per elenchi di film, serie, etc
 * @param {string} url la URL da chiamare con la fetch
 */
export const apiList = (s, type) => {
  const url = BASE_URL + `s=${s}&type=${type}`;
  fetch(url)
    .then((response) => response.json())
    .then((results) => {
      const items = results.Search;      
      viewItems(items);
    });
  
};

export const asApiList = async (s, type) => {
  const url = BASE_URL + `s=${s}&type=${type}`;

  try {
    const response = await fetch(url); // Possibile error
    viewItems(await response.json().Search);
  } catch (error) {
    // Si verifica in caso di errore (qualsiasi errore)
    console.log(error.message);
  } 
}

/**
 * Estrapola ogni elemento dell'array e stampa le proprietà
 * @param {array di movie/series/game} items
 */
const viewItems = (items) => { 
  // 1. Ciclare l'array - OK
  items.map((item) => {
    // 2. Estrapolare ogni item

    // 3. Estrapolare solo le proprietà che ci servono
    //    le proprietà sono Title, Year, Poster, Type
    console.group(item.Title);      
    console.log(item.Year);    
    console.log(item.Type);
    console.log(item.Poster);
    console.groupEnd();
  });
};
