const charactorAmountRange = document
   .getElementById('charactorAmountRange');

const charactorAmountNumber = document
   .getElementById('charactorAmountNumber');

const includeUppercaseElement = document
   .getElementById('includeUppercase');

const includeNumbersElement = document
   .getElementById('includeNumbers');

const includeSymbolsElement = document
   .getElementById('includeSymbols');

const passwordDisplay = document
   .getElementById('passwordDisplay');

const form = document.getElementById('passwordGeneratorForm');

const LOWERCASE_CHAR_CODES = arrayFromLowToHi(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHi(65, 90);
const NUMBERS_CHAR_CODES = arrayFromLowToHi(48, 57);
const SYMBOLS_CHAR_CODES = arrayFromLowToHi(33, 47)
   .concat(arrayFromLowToHi(58, 64))
   .concat(arrayFromLowToHi(91, 96))
   .concat(arrayFromLowToHi(123, 126));

charactorAmountRange.addEventListener('input', syncCharactorAmount);
charactorAmountNumber.addEventListener('input', syncCharactorAmount);

form.addEventListener('submit', e => {
   e.preventDefault();

   const charactorAmount = charactorAmountNumber.value

   const includeUppercase = includeUppercaseElement.checked;
   const includeNumbers = includeNumbersElement.checked;
   const includeSymbols = includeSymbolsElement.checked;


   const password = generatePassword(charactorAmount,
      includeUppercase, includeNumbers, includeSymbols);

   passwordDisplay.innerText = password
});

const generatePassword = (charactorAmount, includeUppercase,
   includeNumbers, includeSymbols) => {
   String.fromCharCode(65);

   let charCodes = LOWERCASE_CHAR_CODES;
   if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
   if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);
   if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES);

   const passwordCharacters = [];

   for (let i = 0; i < charactorAmount; ++i) {
      const characterCode = charCodes[Math.floor(Math.random() *
         charCodes.length)]

      passwordCharacters.push(String.fromCharCode(characterCode));
   }
   return passwordCharacters.join('');
}

function arrayFromLowToHi(low, high) {
   const array = [];

   for (let i = low; i <= high; i++) {
      array.push(i);
   }
   return array;
}

function syncCharactorAmount(e) {
   const value = e.target.value;

   charactorAmountNumber.value = value;
   charactorAmountRange.value = value;

}