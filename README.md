# Angular 20 Pokémon Exercise

A very simple Angular 20 project that fetches and displays Pokémon data from the [PokéAPI](https://pokeapi.co/).  
This project is meant as an **exercise in using Angular 20 signals** and applying **frontend best practices**.

---

## 📋 Features

- **Poke List**: Displays the first 151 Pokémon.  
- **Pokemon**: Shows details of a specific Pokémon.  
- **Random Poke**: Fetches and displays a random Pokémon.  

---

## 🛠️ Tech Stack

- **Angular 20**
- **TypeScript**
- **Signals** (for reactive state management)
- **PokéAPI** (https://pokeapi.co/)

---

### Installation
```bash
# Clone the repository
git clone https://github.com/NiceFriendlyGuy/PokeApp.git
cd angular-pokemon-exercise

# Install dependencies
npm install
```

### Development Server
```bash
ng serve
```
Then open your browser at: [http://localhost:4200](http://localhost:4200)

---

## 📂 Project Structure

```plaintext
src/app/
  ├── poke-list/      # Component: lists first 151 Pokémon
  ├── pokemon/        # Component: details of a specific Pokémon
  ├── random-poke/    # Component: displays a random Pokémon
  └── app.module.ts
```

---

## 🎯 Learning Goals

This project was built for practice with:
- Angular 20 **signals** and reactive state.
- Clean and modular **frontend architecture**.
- Working with a **public REST API**.
- Following **modern Angular best practices**.

---

## 📜 License

This project is licensed under the MIT License.  

---

## 🙌 Acknowledgements

- [PokéAPI](https://pokeapi.co/) for providing free Pokémon data.  
