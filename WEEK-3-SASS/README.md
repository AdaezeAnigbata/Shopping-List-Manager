# 🛒 Shopping List Manager

This is a small interactive project I built to practice **JavaScript array methods** and improve my styling workflow using **SASS (SCSS)**.

The idea is simple: a shopping cart manager. Instead of a static list, each button is connected to a specific JavaScript function to visually demonstrate how methods like `.map()`, `.filter()`, and `.reduce()` manipulate data in real time.

---

## 🌟 What I Learnt (SASS)

To avoid a large, cluttered CSS file, I refactored the styling using core SASS features:

- **Variables:** All colors, fonts, and reusable values are stored in a separate `_base.scss` file, making global updates quick and easy.
- **Nesting:** SASS nesting helped keep related styles grouped together, improving readability and maintainability.
- **Clean Architecture:** I used the `@use` rule to separate configuration (variables) from layout and component styles.
- **Mixins & Inheritance:** I learnt how to use mixins and `@extend` for reusable patterns and shared styles. They were not applied in this project because the styles did not require that level of abstraction.

---

## 🚀 How It Works

Open `index.html` to view the control panel.

- **Filter (< $10):** Uses `.filter()` to display only affordable items.
- **Reduce (Total):** Uses `.reduce()` to calculate the total price of the cart.
- **Splice / Push / Pop / Shift:** Buttons that dynamically add or remove items from the array.
- **Audit (forEach):** Prints a simple inventory report to the display area.

All results are rendered in the output box (with the green border), allowing you to see changes instantly.

---

## 🛠️ Project Structure

- **`style.scss`** – Main stylesheet containing layout and component styles
- **`_base.scss`** – SASS variables and design tokens
- **`script.js`** – JavaScript logic and array operations

---

## 🎨 Credits

- Icons by **Font Awesome**
- Built with **Vanilla JavaScript** and **SASS (SCSS)**
