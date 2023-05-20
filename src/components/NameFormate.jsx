export default function NameFormatter({ name }) {
    const nameToFormat = name;
  
    if (name === "") {
      return <p>Nic nie podales!</p>;
    }
  
    const smallLetters = nameToFormat.toLowerCase();
    const firstLetter = nameToFormat[0].toUpperCase();
  
    const formattedName = firstLetter + smallLetters.slice(1);
    return <p>{formattedName}</p>;}