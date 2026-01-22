"use strict";
// Data Setup
const cart = [
  { name: "Apple", price: 2 },
  { name: "Bread", price: 3 },
  { name: "Milk", price: 4 },
  { name: "Steak", price: 15 },
  { name: "Laptop", price: 1000 },
];

// Helper to display text
const display = (text) => {
  document.getElementById("result-display").innerText = text;
};

// Map Method (Show All)
const showAll = () => {
  const list = cart.map((item) => `• ${item.name}: $${item.price}`);
  display("Full List:\n" + list.join("\n"));
};

// Filter Method (Cheap Items)
const showCheap = () => {
  const cheap = cart.filter((item) => item.price < 10);
  display("Items under $10:\n" + cheap.map((i) => i.name).join(", "));
};

// Reduce Method (Total Cost)
const showTotal = () => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  display("Total Cost:\n$" + total);
};

// Splice Method (Remove Laptop)
const removeItem = () => {
  let tempCart = [...cart];
  tempCart.splice(4, 1);
  display(
    "Removed Laptop.\nRemaining: " + tempCart.map((i) => i.name).join(", ")
  );
};

// Find Method (Find Steak)
const findItem = () => {
  const item = cart.find((i) => i.name === "Steak");

  if (!item) {
    display("Item not found");
    return;
  }
  display(`Found Item:\nName: ${item.name}\nPrice: $${item.price}`);
};

// Some Method (Any Item Expensive)
const checkExpensive = () => {
  const hasExpensive = cart.some((i) => i.price > 100);
  display("Is there an item over $100?\nAnswer: " + hasExpensive);
};

// Every Method (All Items Paid)
const checkFree = () => {
  const allPaid = cart.every((i) => i.price > 0);
  display("Do all items cost money (>0)?\nAnswer: " + allPaid);
};

// Sort Method (Price Low to High)
const sortItems = () => {
  const sorted = [...cart].sort((a, b) => a.price - b.price);
  const list = sorted.map((i) => `${i.name} ($${i.price})`);
  display("Sorted (Low to High):\n" + list.join("\n"));
};

// push Method (Add Item)
const addItem = () => {
  const newItem = { name: "Chips", price: 5 };
  cart.push(newItem);
  const list = cart.map((item) => `• ${item.name}: $${item.price}`);
  display("Success! Added Chips.\n\nNew List:\n" + list.join("\n"));
};

// Pop Method (Remove Last Item)
const removeLast = () => {
  if (cart.length === 0) {
    display("Cart is empty! Nothing to pop.");
    return;
  }
  const removedItem = cart.pop();
  display(`Popped : ${removedItem.name}\n Items remaining: ${cart.length}`);
};

// Shift Method (Remove First Item)
const removeFirst = () => {
  if (cart.length === 0) {
    display("Cart is empty! Nothing to shift.");
    return;
  }
  const removedItem = cart.shift();
  display(`Shifted: ${removedItem.name}\nItems remaining: ${cart.length}`);
};

// ForEach (Audit)
const runForEach = () => {
  let report = "STARTING INVENTORY AUDIT...\n\n";

  cart.forEach((item) => {
    report += `Verified: ${item.name} ($${item.price})\n`;
  });
  display(report);
};

// User Profile
const showObject = () => {
  const user = {
    id: "Victoria",
    role: "Developer",
    active: true,
  };
  display(
    `User Profile:\n ID: ${user.id}\n Role: ${user.role}\n Active: ${user.active}`
  );
};
