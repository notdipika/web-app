// Write a function to check if a string is a palindrome.

function isPalindrome(word) 
{
    const reversed = word.split('').reverse().join('');
    if (reversed === word)
    {
        console.log("The string is a palindrome.");
    }
    else
    {
        console.log("The string is not a palindrome.");
    }
}

isPalindrome("madam");